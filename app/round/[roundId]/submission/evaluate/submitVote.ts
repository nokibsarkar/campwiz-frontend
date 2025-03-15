import fetchAPIFromBackendSingleWithErrorHandling from "@/server"

const submitVote = async (evaluationId: string, score: number) => {
    const data = [{
        evaluationId,
        score,
        comment: null
    }]
    const resp = await fetchAPIFromBackendSingleWithErrorHandling('/evaluation', {
        method: 'POST',
        body: JSON.stringify(data)
    })
    return resp
}
export default submitVote