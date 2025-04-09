
import fetchAPIFromBackendSingleWithErrorHandling from "@/server";
import loadNextEvaluation from "@/app/round/[roundId]/submission/loadNextEvaluation";
import { EvaluationType, Round } from "@/types/round";
import { Suspense } from "react";
import LinearProgress from "@mui/material/LinearProgress";

import Header from "@/components/home/Header";
import ActualPage from "./_page";
const RankingBatchSize = 20;

const Page = async ({ params }: { params: Promise<{ roundId: string }> }) => {
    const { roundId } = await params;
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
    const evaluationResponse = await loadNextEvaluation({ roundId: round.roundId, limit: limit, includeSubmissions: true, isPublic: round.isPublicJury, includeEvaluated: true });
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
    return <Suspense fallback={<LinearProgress />}>
        <Header returnTo={`/campaign/${round.campaignId}`} />
        <ActualPage initialEvaluations={evaluationResponse.data} next={evaluationResponse.next} round={round} />
    </Suspense>
}
export default Page