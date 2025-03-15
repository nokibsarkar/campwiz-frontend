"use client"
import RoundDetails from "@/components/round/RoundDetails"
import { Round } from "@/types/round"
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Status, { getStatusColor, RoundStatusIcon } from "@/components/round/Status";
import Roundactions from "@/components/round/RoundActions";
import { RoundStatus } from "@/types/round/status";
import { Button, LinearProgress } from "@mui/material";
import { Add } from "@mui/icons-material";
const CoomonsImportPage = React.lazy(() => import("./round/import/commons/_page"));
const RoundCreate = React.lazy(() => import("./RoundCreate"));
type RoundTimelineProps = {
    rounds: Round[] | null
    campaignId: string
}
function RoundTimeline({ rounds, campaignId }: RoundTimelineProps) {
    rounds = rounds?.toSorted(
        (a, b) => b.roundId.localeCompare(a.roundId)
    ) ?? []
    const [currentRound, setCurrentRound] = React.useState<Round | null>(rounds.length > 0 ? rounds[0] : null);
    const [isNewCreation, setIsNewCreation] = React.useState(false);
    const isCreatable = rounds.length === 0 || rounds[0].status === RoundStatus.COMPLETED || true;
    const [isImporting, setOpenImportDialogBox] = React.useState(false);
    return (
        <Box sx={{ ml: 1 }} component="div">
            <React.Suspense fallback={<LinearProgress />}>
                {isNewCreation && <RoundCreate campaignId={campaignId} onAfterCreationSuccess={(round) => {
                    setCurrentRound(round);
                    setIsNewCreation(false);
                    setOpenImportDialogBox(true);
                }} onClose={() => setIsNewCreation(false)} />}
                {isImporting && currentRound && <CoomonsImportPage roundId={currentRound.roundId} onClose={() => setOpenImportDialogBox(false)} />}
            </React.Suspense>
            {rounds.length === 0 && <Button
                startIcon={<Add />}
                variant="contained"
                color="primary"
                onClick={() => setIsNewCreation(true)}
                sx={{ m: 1, px: 3 }}
            >
                Create Round
            </Button>}
            {rounds.map((round, i) => (
                <div key={i}>
                    <div style={{ textAlign: 'left' }}>
                        <RoundStatusIcon status={round.status} /> <Status status={round.status} />
                        <Typography variant="h6" sx={{ display: 'inline' }}>
                            {round.name}
                        </Typography>
                        <Roundactions round={round}
                            isStartable={!round.isOpen}
                            isStoppable={round.isOpen}
                            isCreatable={isCreatable}
                            isDeletable
                            isEditable
                            isImportable
                            onCreateClick={() => setIsNewCreation(true)}
                            onImportClick={() => setOpenImportDialogBox(true)}
                            judgableLink={`/round/${round.roundId}/submission/evaluate`}
                            hasJudgePermission
                        />
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