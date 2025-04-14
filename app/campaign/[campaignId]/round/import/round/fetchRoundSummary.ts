import { fetchAPIFromBackendListWithErrorHandling } from "@/server"
import { SubmissionResultSummary } from "@/types/round"

const fetchRoundResults = async (url: string) => {
    const resp = await fetchAPIFromBackendListWithErrorHandling<SubmissionResultSummary & { cumulative: number }>(url)
    if ('data' in resp) {
        const { data: summary } = resp
        // make all the scores cumulative
        let cumulative = 0
        for (let i = 0; i < summary.length; i++) {
            cumulative += summary[i].submissionCount
            summary[i].cumulative = cumulative
        }
        resp.data = summary
    }
    return resp
}
export default fetchRoundResults