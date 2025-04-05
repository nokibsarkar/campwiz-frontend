import { fetchAPIFromBackendListWithErrorHandling } from "@/server";
import { Evaluation, EvaluationListResponseWithCurrentStats } from "@/types/submission";
type EvaluationFilter = {
    roundId: string
    includeSkipped?: boolean
    limit: number
    next?: string
    prev?: string
    includeSubmissions?: boolean
    isPublic: boolean
}
const loadNextEvaluation = async ({ roundId, includeSkipped, limit, next, prev, includeSubmissions, isPublic }: EvaluationFilter) => {
    const qs = new URLSearchParams({
        roundId: roundId
    });
    if (includeSkipped)
        qs.append('includeSkipped', includeSkipped.toString());
    if (limit)
        qs.append('limit', limit.toString());
    if (next)
        qs.append('next', next);
    if (prev)
        qs.append('prev', prev);
    if (includeSubmissions)
        qs.append('includeSubmission', includeSubmissions.toString());
    const url = (isPublic ? `/round/${roundId}/next/public` : `/evaluation/`) + `?${qs.toString()}`;
    const response = await fetchAPIFromBackendListWithErrorHandling<Evaluation>(url);
    if (!response) {
        return null;
    }
    if ('detail' in response) {
        return response;
    }
    const r = response as EvaluationListResponseWithCurrentStats;
    return r
}
export default loadNextEvaluation;