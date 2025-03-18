import fetchAPIFromBackendSingleWithErrorHandling from "@/server";
import { Round } from "@/types/round";
import loadNextEvaluation from "./loadNextEvaluation";
import EvaluationManager from "./_page";

const GetEvaluationPage = async ({ params }: { params: Promise<{ roundId: string, }> }) => {
    const { roundId } = await params;
    const roundResponse = await fetchAPIFromBackendSingleWithErrorHandling<Round>(`/round/${roundId}/`);
    if (!roundResponse) {
        return null;
    }
    if ('detail' in roundResponse) {
        return <p>Error : {roundResponse.detail}</p>
    }
    const round = roundResponse.data;
    const evaluations = await loadNextEvaluation({ roundId: round.roundId, limit: 10, includeSubmissions: true });
    if (!evaluations) {
        return null;
    }
    if ('detail' in evaluations) {
        return <p>Error : {evaluations.detail}</p>
    }
    return (
        <div className="p-2 text-center">
            <h1 className="text-3xl">{round.name}</h1>
            <h2 className="text-lg text-slate-600" >78 remaing out of 78</h2>
            <EvaluationManager roundId={round.roundId} initailEvaluations={evaluations.data} next={evaluations.next} />
        </div>
    );
}
export default GetEvaluationPage