"use client"
import RoundDetails from "@/components/round/RoundDetails"
import { Round } from "@/types/round"
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Status, { getStatusColor, RoundStatusIcon } from "@/components/round/Status";
import { RoundStatus } from "@/types/round/status";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, LinearProgress } from "@mui/material";
import { Add } from "@mui/icons-material";
import { Campaign } from "@/types";
import StopIcon from '@mui/icons-material/Stop';
import DoubleTickIcon from '@mui/icons-material/DoneAll';
import Link from "next/link";
import JudgeIcon from '@mui/icons-material/HowToVote';
const RoundCreate = React.lazy(() => import("./RoundCreate"));
type RoundTimelineProps = {
    rounds: Round[] | null
    campaign: Campaign
}
const CreateRoundButton = ({ onClick }: { onClick: () => void }) => (
    <Button
        startIcon={<Add />}
        variant="contained"
        color="primary"
        onClick={onClick}
        sx={{ m: 1, px: 3 }}
    >
        Create Round
    </Button>
)
const MarkAsFinalButton = ({ }: { onClick: () => void }) => {
    const [showDialog, setShowDialog] = React.useState(false);
    const finalize = async () => {
        // await finalizeRound(round.roundId)
        setShowDialog(false)
    }
    return <>
        <Button
            startIcon={<DoubleTickIcon />}
            variant="contained"
            color="success"
            onClick={() => setShowDialog(true)}
            sx={{ m: 1, px: 3 }}
        >
            Mark as Final
        </Button>
        <React.Suspense fallback={<LinearProgress />}>
            {showDialog && <Dialog open={showDialog} onClose={() => setShowDialog(false)}>
                <DialogTitle>Finalize Round</DialogTitle>
                <DialogContent>
                    <Typography>Are you sure you want to mark this round as final?</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={finalize} variant="contained" color="success">Yes</Button>
                    <Button onClick={() => setShowDialog(false)} variant="contained" color="error">No</Button>
                </DialogActions>
            </Dialog>}
        </React.Suspense>
    </>
}
enum SelectedRoundActionStatus {
    creating = 'creating',
    importing = 'importing',
    finalizing = 'finalizing',
    none = ''
}
const LatestRoundActions = ({ latestRound, campaign, setAction, AllowedToEvaluate, judgableLink }: { latestRound: Round | null, campaign: Campaign, action: SelectedRoundActionStatus, setAction: (action: SelectedRoundActionStatus) => void, AllowedToEvaluate: boolean, judgableLink: string }) => {
    // if no round is avaliable, return a create round button
    const buttons: React.ReactNode[] = []
    if (campaign.status !== RoundStatus.ACTIVE)
        return <Button disabled>Cannot create round</Button>
    if (latestRound && latestRound.status === RoundStatus.ACTIVE && AllowedToEvaluate) {
        buttons.push(<Link href={judgableLink}>
            <Button
                startIcon={<JudgeIcon />}
                variant="contained"
                color="primary"
                sx={{ m: 1, px: 3 }}
            >
                Start Evaluation
            </Button>
        </Link>)
    }
    if (!latestRound) {
        buttons.push(<CreateRoundButton onClick={() => setAction(SelectedRoundActionStatus.creating)} />)
    } else {
        if (latestRound.status === RoundStatus.COMPLETED) {
            buttons.push(<CreateRoundButton onClick={() => setAction(SelectedRoundActionStatus.creating)} />);
            buttons.push(<MarkAsFinalButton onClick={() => setAction(SelectedRoundActionStatus.finalizing)} />);
        } else if (latestRound.status === RoundStatus.ACTIVE) {
            buttons.push(<Button
                startIcon={<StopIcon />}
                variant="contained"
                color="error"
                sx={{ m: 1, px: 3 }}
            >
                Stop
            </Button>)
        }
    }

    return buttons.map((button, i) => (
        <React.Fragment key={i}>
            {button}
        </React.Fragment>
    ))
}
function RoundTimeline({ rounds, campaign }: RoundTimelineProps) {
    rounds = rounds?.toSorted(
        (a, b) => b.roundId.localeCompare(a.roundId)
    ) ?? []
    const [currentRound, setCurrentRound] = React.useState<Round | null>(rounds.length > 0 ? rounds[0] : null);
    const [selectedRoundAction, setSelectedRoundAction] = React.useState<SelectedRoundActionStatus>(SelectedRoundActionStatus.none);
    return (
        <Box sx={{ ml: 1 }} component="div">
            <LatestRoundActions latestRound={currentRound} campaign={campaign} action={selectedRoundAction} setAction={setSelectedRoundAction} AllowedToEvaluate={true} judgableLink={`/round/${currentRound?.roundId}/submission/evaluate`} />
            <React.Suspense fallback={<LinearProgress />}>
                {selectedRoundAction === SelectedRoundActionStatus.creating && <RoundCreate campaignId={campaign.campaignId} onAfterCreationSuccess={(round) => {
                    setCurrentRound(round);
                }} onClose={() => setSelectedRoundAction(SelectedRoundActionStatus.none)} />}
                {/* {selectedRoundAction === SelectedRoundActionStatus.importing && currentRound && <CoomonsImportPage roundId={currentRound.roundId} onClose={() => setSelectedRoundAction(SelectedRoundActionStatus.none)} />} */}
            </React.Suspense>
            {rounds.map((round, i) => (
                <div key={i}>
                    <div style={{ textAlign: 'left' }}>
                        <RoundStatusIcon status={round.status} /> <Status status={round.status} />
                        <Typography variant="h6" sx={{ display: 'inline' }}>
                            {round.name}
                        </Typography>
                    </div>
                    <Box key={i} sx={{
                        pl: 2,
                        pr: 2,
                        borderLeft: 2,
                        my: 2,
                        borderLeftColor: `${getStatusColor(round.status)}.main`
                    }}>
                        <RoundDetails round={round} />

                    </Box>
                </div>
            ))
            }
        </Box>
    );
}

export default RoundTimeline