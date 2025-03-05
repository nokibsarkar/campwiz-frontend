import fetchAPIFromBackendSingleWithErrorHandling from "@/server";
import ViewRoundPage from "./actualPage";
import { Round } from "@/types/round";

const ViewRound = async ({ params }: { params: Promise<{ campaignId: string, roundId: string }> }) => {
    const { roundId } = await params;
    const roundResponse = await fetchAPIFromBackendSingleWithErrorHandling<Round>(`/round/${roundId}`);
    if ('detail' in roundResponse) {
        console.error(roundResponse.detail)
        return null
    }
    const round = roundResponse.data
    return (
        <ViewRoundPage round={round} />
    )
};
export default ViewRound;