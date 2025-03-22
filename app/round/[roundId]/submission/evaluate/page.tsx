
import fetchAPIFromBackendSingleWithErrorHandling from "@/server";
import EvaluationManager from "./AllVotingInterface"
import loadNextEvaluation from "./loadNextEvaluation";
import { Round } from "@/types/round";


const Page = async ({ params }: { params: Promise<{ roundId: string }> }) => {
    const { roundId } = await params;
    const roundResponse = await fetchAPIFromBackendSingleWithErrorHandling<Round>(`/round/${roundId}/`);
    if (!roundResponse) {
        return null;
    }
    if ('detail' in roundResponse) {
        return <p>Error : {roundResponse.detail}</p>
    }
    const round = roundResponse.data;
    const evaluations = await loadNextEvaluation({ roundId: round.roundId, limit: 5, includeSubmissions: true });
    if (!evaluations) {
        return null;
    }
    if ('detail' in evaluations) {
        return <p>Error : {evaluations.detail}</p>
    }
    return <EvaluationManager
        roundId={round.roundId}
        initailEvaluations={evaluations.data}
        next={evaluations.next}
        campaignId={round.campaignId}
        limit={1}
    />
}
export default Page