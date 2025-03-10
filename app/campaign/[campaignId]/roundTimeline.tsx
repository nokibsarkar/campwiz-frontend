import RoundDetails from "@/components/round/RoundDetails"
import { Round } from "@/types/round"
import * as React from 'react';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box } from "@mui/material";
type RoundTimelineProps = {
    rounds: Round[] | null
}
function RoundTimeline({ rounds }: RoundTimelineProps) {
    rounds = rounds?.toSorted(
        (a, b) => b.roundId.localeCompare(a.roundId)
    ) ?? []
    return (
        <Box sx={{ ml: 1 }} component="div">
            {rounds.map((round, i) => (
                <div key={i}>
                    <div style={{ textAlign: 'left' }}>
                        <CheckCircleIcon sx={{ display: 'inline', ml: -2, mr: 1 }} fontSize="large" color="success" />
                        <Typography variant="h6" sx={{ display: 'inline' }}>
                            {round.name}
                        </Typography>
                    </div>
                    <Box key={i} sx={{
                        pl: 2,
                        pr: 2,
                        borderLeft: 2,
                        my: 2,
                        borderLeftColor: 'success.main',
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