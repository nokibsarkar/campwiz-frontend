"use client"
import RoundDetails from "@/components/round/RoundDetails"
import { Round } from "@/types/round"
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Status, { getStatusColor, RoundStatusIcon } from "@/components/round/Status";
import Roundactions from "@/components/round/RoundActions";
import RoundCreate from "./RoundCreate";
import { RoundStatus } from "@/types/round/status";
import { LinearProgress } from "@mui/material";
import P from "./round/import/commons/_page";
type RoundTimelineProps = {
    rounds: Round[] | null
    campaignId: string
}
function RoundTimeline({ rounds, campaignId }: RoundTimelineProps) {
    rounds = rounds?.toSorted(
        (a, b) => b.roundId.localeCompare(a.roundId)
    ) ?? []
    const [currentRound, setCurrentRound] = React.useState<Round | null>(null);
    const [isNewCreation, setIsNewCreation] = React.useState(false);
    const isCreatable = rounds.length === 0 || rounds[0].status === RoundStatus.COMPLETED || true;

    const [isImporting, setIsImporting] = React.useState(false);
    return (
        <Box sx={{ ml: 1 }} component="div">
            <React.Suspense fallback={<LinearProgress />}>
                {isNewCreation && <RoundCreate campaignId={campaignId} onAfterCreationSuccess={(round) => {
                    setCurrentRound(round);
                    setIsNewCreation(false);
                    setIsImporting(true);
                }} onClose={() => setIsNewCreation(false)} />}
                {isImporting && <P roundId={currentRound?.roundId ?? ''} />}
            </React.Suspense>
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
                            onCreateClick={() => setIsNewCreation(true)}
                            onImportClick={() => setIsImporting(true)}
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