import fetchAPIFromBackendSingleWithErrorHandling from "@/server"
import { Round } from "@/types/round"
import { Paper } from "@mui/material"
import SingleRound from "./singleRound"


const ViewCampaignPage = async ({ params }: { params: Promise<{ campaignId: string }> }) => {
    const { campaignId } = await params
    console.log(campaignId)
    const filter = new URLSearchParams({ campaignId })
    const rounds = await fetchAPIFromBackendSingleWithErrorHandling<Round[]>(`/round/?${filter.toString()}`)
    if ('detail' in rounds) {
        console.error(rounds.detail)
        return null
    }
    return (
        <Paper sx={{ padding: 2 }}>
            <h1>View Campaign</h1>
            View Round
            {rounds.data.map((round) => (
                <SingleRound key={round.roundId} round={round} />
            ))}
        </Paper>
    )
}
export default ViewCampaignPage