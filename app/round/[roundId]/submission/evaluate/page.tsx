
import fetchAPIFromBackendSingleWithErrorHandling from "@/server";
import loadNextEvaluation from "./loadNextEvaluation";
import { EvaluationType, Round } from "@/types/round";
import { lazy, Suspense } from "react";
import LinearProgress from "@mui/material/LinearProgress";
const ScoreOrBinaryVotingInterface = lazy(() => import("./EvaluationManager"));
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
    const evaluationResponse = await loadNextEvaluation({ roundId: round.roundId, limit: limit, includeSubmissions: true, isPublic: round.isPublicJury, includeEvaluated: false });
    if (!evaluationResponse) {
        return null;
    }
    if ('detail' in evaluationResponse) {
        return <p>Error : {evaluationResponse.detail}</p>
    }
    return <Suspense fallback={<LinearProgress />}>
        {[EvaluationType.BINARY, EvaluationType.SCORE].includes(round.type) && <ScoreOrBinaryVotingInterface
            isPublicJury={round.isPublicJury}
            roundId={round.roundId}
            initailEvaluations={evaluationResponse.data}
            next={evaluationResponse.next}
            campaignId={round.campaignId}
            limit={1}
            evaluationCount={evaluationResponse.totalEvaluatedCount}
            assignmentCount={evaluationResponse.totalAssignmentCount}
        />}
        {round.type === EvaluationType.RANKING && <RankingVotingInterface
            roundId={round.roundId}
            initailEvaluations={evaluationResponse.data}
            next={evaluationResponse.next}
            campaignId={round.campaignId}
            limit={RankingBatchSize}
            isPublicJury={round.isPublicJury}
        />}
    </Suspense>
}
export default Page