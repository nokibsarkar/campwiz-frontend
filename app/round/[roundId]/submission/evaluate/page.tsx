
import fetchAPIFromBackendSingleWithErrorHandling from "@/server";
import loadNextEvaluation from "./loadNextEvaluation";
import { EvaluationType, Round } from "@/types/round";
import { lazy, Suspense } from "react";
import LinearProgress from "@mui/material/LinearProgress";
const ScoreOrBinaryVotingInterface = lazy(() => import("./BinaryOrScoreVotingInterface2"));
const RankingVotingInterface = lazy(() => import("./RankingVotingInterface"));
const RankingBatchSize = 20;

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
    const limit = round.type === EvaluationType.RANKING ? RankingBatchSize : 5;
    const evaluations = await loadNextEvaluation({ roundId: round.roundId, limit: limit, includeSubmissions: true, isPublic: round.isPublicJury });
    if (!evaluations) {
        return null;
    }
    if ('detail' in evaluations) {
        return <p>Error : {evaluations.detail}</p>
    }
    return <Suspense fallback={<LinearProgress />}>
        {[EvaluationType.BINARY, EvaluationType.SCORE].includes(round.type) && <ScoreOrBinaryVotingInterface
            isPublicJury={round.isPublicJury}
            roundId={round.roundId}
            initailEvaluations={evaluations.data}
            next={evaluations.next}
            campaignId={round.campaignId}
            limit={1}
            evaluationCount={0}
            assignmentCount={0}
        />}
        {round.type === EvaluationType.RANKING && <RankingVotingInterface
            roundId={round.roundId}
            initailEvaluations={evaluations.data}
            next={evaluations.next}
            campaignId={round.campaignId}
            limit={RankingBatchSize}
            isPublicJury={round.isPublicJury}
        />}
    </Suspense>
}
export default Page