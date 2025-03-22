"use client"
import RoundDetails from "@/components/round/RoundDetails"
import { Round } from "@/types/round"
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Status, { getStatusColor, RoundStatusIcon } from "@/components/round/Status";
import { Campaign } from "@/types";
import { Session } from "@/types/user/session";
import ImportFromRoundDialog from "./round/import/round/_page";
import LatestRoundActions from "./LatestRoundAction";
import { LinearProgress } from "@mui/material";
import SelectedRoundActionStatus from "./SelectedActionStatus";
import ImportFromCommonsDialog from "./round/import/commons/_page";
import DistributionDialog from "./round/distribute/DistributionWidget";
const RoundCreate = React.lazy(() => import("./RoundCreate"));
const RoundEdit = React.lazy(() => import("./RoundEdit"));
type RoundTimelineProps = {
    rounds: Round[] | null
    campaign: Campaign
    session: Session | null
    isCoordinator: boolean
}

function RoundTimeline({ rounds, campaign, session, isCoordinator }: RoundTimelineProps) {
    rounds = rounds?.toSorted(
        (a, b) => b.roundId.localeCompare(a.roundId)
    ) ?? []
    const refresh = () => {
        if (typeof window !== 'undefined') {
            window.location.reload();
        }
    }
    const [currentRound, setCurrentRound] = React.useState<Round | null>(rounds.length > 0 ? rounds[0] : null);
    const isUserEligibleToVote = currentRound !== null && currentRound.jury !== null && session !== null && Object.values(currentRound.jury).includes(session.username);
    const [selectedRoundAction, setSelectedRoundAction] = React.useState<SelectedRoundActionStatus>(SelectedRoundActionStatus.none);
    return (
        <Box sx={{ ml: 1 }} component="div">
            <LatestRoundActions
                latestRound={currentRound} campaign={campaign}
                action={selectedRoundAction} setAction={setSelectedRoundAction}
                isJury={isUserEligibleToVote}
                judgableLink={`/round/${currentRound?.roundId}/submission/evaluate`}
                refresh={refresh}
                isCoordinator={isCoordinator}
            />
            <React.Suspense fallback={<LinearProgress />}>
                {selectedRoundAction === SelectedRoundActionStatus.creating && <RoundCreate campaignId={campaign.campaignId} onAfterCreationSuccess={(round) => {
                    setCurrentRound(round);
                }} onClose={() => { setSelectedRoundAction(SelectedRoundActionStatus.none); refresh(); }} />}
                {currentRound && selectedRoundAction === SelectedRoundActionStatus.editing && <RoundEdit campaignId={campaign.campaignId} onAfterCreationSuccess={(round) => {
                    setCurrentRound(round);
                    rounds[0] = round;
                }} onClose={() => { setSelectedRoundAction(SelectedRoundActionStatus.none); refresh(); }} existingRound={currentRound} />}
                {currentRound && selectedRoundAction === SelectedRoundActionStatus.importing && (
                    currentRound?.dependsOnRoundId ? <ImportFromRoundDialog
                        round={currentRound}
                        afterImport={() => {
                            if (currentRound.isPublicJury) {
                                setSelectedRoundAction(SelectedRoundActionStatus.none);
                                refresh();
                            } else {
                                setSelectedRoundAction(SelectedRoundActionStatus.distributing);
                            }
                        }}
                        onClose={() => {
                            setSelectedRoundAction(SelectedRoundActionStatus.none);
                            refresh();
                        }}
                    /> : <ImportFromCommonsDialog
                        round={currentRound}
                        afterImport={() => {
                            if (currentRound.isPublicJury) {
                                setSelectedRoundAction(SelectedRoundActionStatus.none);
                                refresh();
                            } else {
                                setSelectedRoundAction(SelectedRoundActionStatus.distributing);
                            }
                        }}
                        onClose={() => {
                            setSelectedRoundAction(SelectedRoundActionStatus.none);
                            refresh();
                        }}
                    />
                )}
                {currentRound && selectedRoundAction === SelectedRoundActionStatus.distributing && <DistributionDialog
                    roundId={currentRound.roundId}
                    juries={Object.values(currentRound.jury || {})}
                    afterDistribution={() => {
                        // setTaskId(t.taskId);
                        // setStage(Stage.DISTRIBUTING);
                        setSelectedRoundAction(SelectedRoundActionStatus.none);
                        refresh();
                    }}
                    onClose={() => { setSelectedRoundAction(SelectedRoundActionStatus.none); refresh(); }}
                />}

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