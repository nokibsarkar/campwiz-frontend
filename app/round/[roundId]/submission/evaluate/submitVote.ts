import fetchAPIFromBackendSingleWithErrorHandling from "@/server"
type PublicJuryProps = {
    isPublicJury: boolean
    roundId: string
    submissionId: string
    score: number
}
type PrivateJuryProps = {
    evaluationId: string
    score: number
    isPublicJury: boolean
}
const submitVote = async (props: PublicJuryProps | PrivateJuryProps) => {
    const { isPublicJury, score } = props
    if (isPublicJury) {
        const { roundId, submissionId: Id } = props as PublicJuryProps
        const url = `/evaluation/public/${roundId}/${Id}`
        const data = {
            score,
            // comment: null
        }
        const resp = await fetchAPIFromBackendSingleWithErrorHandling(url, {
            method: 'POST',
            body: JSON.stringify(data)
        })
        return resp
    } else {
        const { evaluationId: Id } = props as PrivateJuryProps
        const data = [{
            evaluationId: Id,
            score,
            // comment: null
        }]
        const resp = await fetchAPIFromBackendSingleWithErrorHandling(`/evaluation`, {
            method: 'POST',
            body: JSON.stringify(data)
        })
        return resp
    }
}
export default submitVote