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
import StopIcon from '@mui/icons-material/Pause';
import Start from '@mui/icons-material/PlayArrow';
import DoubleTickIcon from '@mui/icons-material/DoneAll';
import Link from "next/link";
import EditIcon from '@mui/icons-material/Edit';
import JudgeIcon from '@mui/icons-material/HowToVote';
import { updateroundStatus } from "./updateStatus";
import { Session } from "@/types/user/session";
const RoundCreate = React.lazy(() => import("./RoundCreate"));
const RoundEdit = React.lazy(() => import("./RoundEdit"));
type RoundTimelineProps = {
    rounds: Round[] | null
    campaign: Campaign
    session: Session | null
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
const EditRoundButton = ({ onClick }: { onClick: () => void }) => (
    <Button
        startIcon={<EditIcon />}
        variant="contained"
        color="primary"
        onClick={onClick}
        sx={{ m: 1, px: 3 }}
    >
        Edit Round
    </Button>
)
type ChangeStatusButtonProps = {
    status: RoundStatus
    label: string
    color: 'success' | 'error'
    icon: React.ReactNode
    description: string
    onClick?: (round: Round) => void
    roundId: string
    refresh: () => void
}
const ChangeStatusButton = ({ roundId, onClick, status, label, color, description, icon, refresh }: ChangeStatusButtonProps) => {
    const [showDialog, setShowDialog] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const finalize = async () => {
        try {
            setLoading(true)
            const res = await updateroundStatus(roundId, status)
            if (res) {
                console.log('Round status updated')
            }
            if ('detail' in res) {
                console.error(res.detail)
                throw new Error(res.detail)
            }
            setShowDialog(false)
            refresh()
            if (onClick) {
                onClick(res.data)
            }
        } catch (e) {
            console.error(e)
        } finally {
            setLoading(false)
        }
    }
    return <>
        <Button
            startIcon={icon}
            variant="contained"
            color={color}
            onClick={() => setShowDialog(true)}
            sx={{ m: 1, px: 3 }}
            loading={loading}
            disabled={showDialog}
        >
            {label}
        </Button>
        <React.Suspense fallback={<LinearProgress />}>
            {showDialog && <Dialog open={showDialog} onClose={() => setShowDialog(false)}>
                <DialogTitle>{label}</DialogTitle>
                <DialogContent>
                    <Typography>Are you sure you want to mark this round as {status}?</Typography>
                    <Typography>{description}</Typography>
                    {loading && <LinearProgress />}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setShowDialog(false)} variant="outlined" color="error" disabled={loading}>No</Button>
                    <Button onClick={finalize} variant="contained" color="success" disabled={loading} loading={loading}>Yes</Button>
                </DialogActions>
            </Dialog>}
        </React.Suspense>
    </>
}
enum SelectedRoundActionStatus {
    creating = 'creating',
    importing = 'importing',
    finalizing = 'finalizing',
    editing = 'editing',
    none = ''
}
const LatestRoundActions = ({ latestRound, campaign, setAction, AllowedToEvaluate, judgableLink, refresh }: { latestRound: Round | null, campaign: Campaign, action: SelectedRoundActionStatus, setAction: (action: SelectedRoundActionStatus) => void, AllowedToEvaluate: boolean, judgableLink: string, refresh: () => void }) => {
    // if no round is avaliable, return a create round button
    const buttons: React.ReactNode[] = []
    if (campaign.status !== RoundStatus.ACTIVE)
        return <Button disabled>Cannot create round</Button>

    if (!latestRound) {
        buttons.push(<CreateRoundButton onClick={() => setAction(SelectedRoundActionStatus.creating)} />)
    } else {
        if (latestRound.status === RoundStatus.COMPLETED) {
            buttons.push(<CreateRoundButton onClick={() => setAction(SelectedRoundActionStatus.creating)} />);
            buttons.push(<ChangeStatusButton
                roundId={latestRound.roundId}
                color="success" description=""
                icon={<DoubleTickIcon />}
                label="Mark as complete"
                status={RoundStatus.COMPLETED}
                onClick={() => setAction(SelectedRoundActionStatus.finalizing)}
                refresh={refresh}
            />);
        } else if (latestRound.status === RoundStatus.ACTIVE) {
            buttons.push(<ChangeStatusButton
                roundId={latestRound.roundId}
                color="error"
                description=""
                icon={<StopIcon />}
                label="Pause"
                status={RoundStatus.PAUSED}
                onClick={() => setAction(SelectedRoundActionStatus.finalizing)}
                refresh={refresh}
            />);
            if (AllowedToEvaluate) {
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

        } else if (latestRound.status === RoundStatus.PAUSED) {
            buttons.push(<EditRoundButton onClick={() => setAction(SelectedRoundActionStatus.editing)} />);
            buttons.push(<ChangeStatusButton
                roundId={latestRound.roundId}
                color="success" description=""
                icon={<DoubleTickIcon />}
                label="Mark as complete"
                status={RoundStatus.COMPLETED}
                onClick={() => setAction(SelectedRoundActionStatus.finalizing)}
                refresh={refresh}
            />);
            buttons.push(<ChangeStatusButton
                roundId={latestRound.roundId}
                color="error"
                description=""
                icon={<Start />}
                label="Start"
                status={RoundStatus.ACTIVE}
                onClick={() => setAction(SelectedRoundActionStatus.finalizing)}
                refresh={refresh}
            />);
        }

    }

    return (
        <div style={{ textAlign: 'right' }}>
            {buttons.map((button, i) => (
                <React.Fragment key={i}>
                    {button}
                </React.Fragment>
            ))}
        </div>
    )
}
function RoundTimeline({ rounds, campaign, session }: RoundTimelineProps) {
    rounds = rounds?.toSorted(
        (a, b) => b.roundId.localeCompare(a.roundId)
    ) ?? []
    const refresh = () => {
        if (typeof window !== 'undefined') {
            window.location.reload();
        }
    }
    const [currentRound, setCurrentRound] = React.useState<Round | null>(rounds.length > 0 ? rounds[0] : null);
    const allowedToVote = currentRound !== null && currentRound.jury !== null && session !== null && Object.values(currentRound.jury).includes(session.username);
    const [selectedRoundAction, setSelectedRoundAction] = React.useState<SelectedRoundActionStatus>(SelectedRoundActionStatus.none);
    return (
        <Box sx={{ ml: 1 }} component="div">
            <LatestRoundActions
                latestRound={currentRound} campaign={campaign}
                action={selectedRoundAction} setAction={setSelectedRoundAction}
                AllowedToEvaluate={allowedToVote}
                judgableLink={`/round/${currentRound?.roundId}/submission/evaluate`}
                refresh={refresh}
            />
            <React.Suspense fallback={<LinearProgress />}>
                {selectedRoundAction === SelectedRoundActionStatus.creating && <RoundCreate campaignId={campaign.campaignId} onAfterCreationSuccess={(round) => {
                    setCurrentRound(round);
                }} onClose={() => { setSelectedRoundAction(SelectedRoundActionStatus.none); refresh(); }} />}
                {currentRound && selectedRoundAction === SelectedRoundActionStatus.editing && <RoundEdit campaignId={campaign.campaignId} onAfterCreationSuccess={(round) => {
                    setCurrentRound(round);
                    rounds[0] = round;
                }} onClose={() => { setSelectedRoundAction(SelectedRoundActionStatus.none); refresh(); }} existingRound={currentRound} />}
            </React.Suspense>
            {rounds.map((round, i) => (
                <div key={i}>
                    <div style={{ textAlign: 'left' }}>
                        <RoundStatusIcon status={round.status} /> <Status status={round.status} />
                        <Typography variant="h6" sx={{ display: 'inline' }}>
                            {round.name}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ display: 'inline', color: 'text.secondary' }}>
                            &nbsp;({round.roundId})
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
            ))}
        </Box>
    );
}

export default RoundTimeline