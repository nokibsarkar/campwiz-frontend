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
    includeEvaluated?: boolean
    includeNonEvaluated?: boolean
    randomize?: boolean
}
const loadNextEvaluation = async ({ roundId, includeSkipped, limit, next, prev, includeSubmissions, isPublic, includeEvaluated, includeNonEvaluated, randomize }: EvaluationFilter) => {
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
    if (isPublic)
        qs.append('isPublic', isPublic.toString());
    if (typeof includeEvaluated !== 'undefined')
        qs.append('includeEvaluated', includeEvaluated.toString());
    if (typeof includeNonEvaluated !== 'undefined')
        qs.append('includeNonEvaluated', includeNonEvaluated.toString());
    if (typeof randomize !== 'undefined')
        qs.append('randomize', String(randomize))
    console.log('loadNextEvaluation', qs.toString());
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