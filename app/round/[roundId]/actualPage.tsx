
import RoundDetails from "@/components/round/RoundDetails"
import { Round } from "@/types/round"
import { Paper } from "@mui/material"

const ViewRoundPage = ({ round }: { round: Round }) => {
    return (
        <Paper sx={{ padding: { xs: 1, sm: 2 } }}>
            <h1>View Round</h1>
            <RoundDetails round={round} />
        </Paper>
    )
}
export default ViewRoundPage