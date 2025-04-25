import Header from "@/components/home/Header";
import fetchAPIFromBackendSingleWithErrorHandling from "@/server";
import { EvaluationType, Round } from "@/types/round";
import loadNextEvaluation from "../../../../loadNextEvaluation";
import { LinearProgress } from "@mui/material";
import { Suspense } from "react";
import ActualPage from "../../../_page";

type AlreadyEvaluatedPreviousPaginationProps = {
    params: Promise<{
        minimumEvaluationId: string
        roundId: string
    }>
}
const RankingBatchSize = 20;
const AlreadyEvaluatedPreviousPagination = async ({ params }: AlreadyEvaluatedPreviousPaginationProps) => {
    const { minimumEvaluationId, roundId } = await params

    const roundResponse = await fetchAPIFromBackendSingleWithErrorHandling<Round>(`/round/${roundId}/`);
    if (!roundResponse) {
        return null;
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

    const limit = round.type === EvaluationType.RANKING ? RankingBatchSize : 20;
    const evaluationResponse = await loadNextEvaluation({ roundId: round.roundId, limit: limit, includeSubmissions: true, isPublic: false, includeEvaluated: true, includeNonEvaluated: false, prev: minimumEvaluationId });
    if (!evaluationResponse) {
        return null;
    }
    if ('detail' in evaluationResponse) {
        return <>
            <Header returnTo={`/campaign/${round.campaignId}`} />
            <p className="text-center text-red-500">
                {evaluationResponse.detail}
            </p>
        </>;
    }
    return (
        <Suspense fallback={<LinearProgress />}>
            <Header returnTo={`/campaign/${round.campaignId}`} />
            <ActualPage
                initialEvaluations={evaluationResponse.data}
                next={evaluationResponse.next}
                round={round}
                prev={evaluationResponse.prev}
            />
        </Suspense >
    )
}
export default AlreadyEvaluatedPreviousPagination;