
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
        return <>
            <Header />
            <p className="text-center text-red-500">
                Error : Round not found
            </p>
        </>;
    }
    if ('detail' in roundResponse) {
        return <>
            <Header />
            <p className="text-center text-red-500">
                {roundResponse.detail}
            </p>
        </>;
    }
    const round = roundResponse.data;
    if (![EvaluationType.BINARY, EvaluationType.SCORE].includes(round.type))
        return <>
            <Header returnTo={`/campaign/${round.campaignId}`} />
            <p className="text-center text-red-500">
                Sorry, Only Yes/No and Rating evaluation types are supported for modification.
            </p>
        </>;
    const evaluationResponse = await fetchAPIFromBackendSingleWithErrorHandling<Evaluation>(
        `/evaluation/${evaluationId}/?includeSubmissions=true&includeEvaluated=true`,
    );
    if (!evaluationResponse) {
        return <>
            <Header />
            <p className="text-center text-red-500">
                Error : Evaluation not found
            </p>
        </>;
    }
    if ('detail' in evaluationResponse) {
        return <>
            <Header />
            <p className="text-center text-red-500">
                {evaluationResponse.detail}
            </p>
        </>;
    }
    const evaluation = evaluationResponse.data;
    if (!evaluation) {
        return <>
            <Header />
            <p className="text-center text-red-500">
                Error : Evaluation not found
            </p>
        </>;
    }
    if (!evaluation.submission) {
        return <>
            <Header />
            <p className="text-center text-red-500">
                Error : Submission not found
            </p>
        </>;
    }
    return (
        <>
            <Header returnTo={`/round/${round.roundId}/submission/evaluated`} />
            <KichuEkta evaluation={evaluation} round={round} submission={evaluation.submission} />
        </>
    );
}
export default ModifyEvaluationPage;