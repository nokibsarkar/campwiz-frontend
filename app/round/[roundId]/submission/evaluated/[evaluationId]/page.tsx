
import fetchAPIFromBackendSingleWithErrorHandling from "@/server";
import { EvaluationType, Round } from "@/types/round";
import { Evaluation } from "@/types/submission";
import KichuEkta from "./_page";
import Header from "@/components/home/Header";

const ModifyEvaluationPage = async ({
    params,
}: {
    params: Promise<{ roundId: string; evaluationId: string }>;
}) => {
    const { roundId, evaluationId } = await params;
    const roundResponse = await fetchAPIFromBackendSingleWithErrorHandling<Round>(`/round/${roundId}/`);
    if (!roundResponse) {
        return null;
    }
    if ('detail' in roundResponse) {
        return <p>Error : {roundResponse.detail}</p>;
    }
    const round = roundResponse.data;
    const evaluationResponse = await fetchAPIFromBackendSingleWithErrorHandling<Evaluation>(
        `/evaluation/${evaluationId}/?includeSubmissions=true&includeEvaluated=true`,
    );
    if (!evaluationResponse) {
        return null;
    }
    if ('detail' in evaluationResponse) {
        return <p>Error : {evaluationResponse.detail}</p>;
    }
    const evaluation = evaluationResponse.data;
    if (!evaluation) {
        return <p>Error : Evaluation not found</p>;
    }
    if (evaluation.roundId !== round.roundId) {
        return <p>Error : Evaluation not found in this round</p>;
    }
    if (!evaluation.submission) {
        return <p>Error : Submission not found</p>;
    }
    return (
        <>
            <Header returnTo={`/round/${round.roundId}/submission/evaluated`} />
            {([EvaluationType.BINARY, EvaluationType.SCORE].includes(round.type)) ?
                <KichuEkta evaluation={evaluation} round={round} submission={evaluation.submission} />
                : <p className="text-center text-red-500">
                    Sorry, OnlyYes/No and Rating evaluation types are supported for modification.
                </p>
            }

        </>
    );
}
export default ModifyEvaluationPage;