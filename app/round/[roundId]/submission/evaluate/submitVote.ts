import fetchAPIFromBackendSingleWithErrorHandling from "@/server"
type Vote = {
    score: number
    comment: string | null
    submissionId?: string
    evaluationId?: string
    description?: string | null,
    thumbURL?: string | null
}
const submitVote = async (roundId: string, isPublicJury: boolean, votes: Vote[]) => {
    let url = `/evaluation/`
    if (isPublicJury) {
        url = `/evaluation/public/${roundId}`
    }
    const resp = await fetchAPIFromBackendSingleWithErrorHandling(url, {
        method: 'POST',
        body: JSON.stringify(votes)
    })
    return resp
}
export default submitVote