import { Round } from "@/types/round"
import { Box, Typography } from "@mui/material"

const SingleRound = ({ round }: { round: Round }) => {
    return (
        <Box sx={{ padding: 2, display: 'inline-block', m: 2 }}>
            <Typography variant="h4">{round.name}</Typography>
            <Typography variant="body1">{round.description}</Typography>
            <Typography variant="body2">Round ID: {round.roundId}</Typography>
            <Typography variant="body2">Campaign ID: {round.campaignId}</Typography>
        </Box>
    )
}
export default SingleRound