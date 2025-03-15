"use client";

import AudioPreview from "@/app/submission/[submissionId]/_preview/audioPreview";
import ImagePreview from "@/app/submission/[submissionId]/_preview/imagePreview";
import VideoPreview from "@/app/submission/[submissionId]/_preview/videoPreview";
import { MediaType } from "@/types/round";
import { Evaluation } from "@/types/submission";
import { Button } from "@mui/material";
import { useState } from "react";
import submitVote from "./submitVote";
import loadNextEvaluation from "./loadNextEvaluation";

type EvaluationManagerProps = {
    roundId: string
    initailEvaluations: Evaluation[]
    next?: string

}

const EvaluationManager = ({ initailEvaluations, roundId }: EvaluationManagerProps) => {
    const [evaluations, setEvaluations] = useState<Evaluation[]>(initailEvaluations)
    const [cursor, setCursor] = useState(0);
    const [next, setNext] = useState('')
    // const { data, error, isLoading, mutate : triggerFetching } = useSWR({ roundId, limit: 1, includeSubmission: true, next }, loadNextEvaluation,  { revalidateOnMount: false, revalidateOnFocus: false });
    const submit = async (evaluationId: string, score: number) => {
        try {
            const resp = await submitVote(evaluationId, score)
            if ('detail' in resp) {
                console.error(resp.detail)
            } else {
                console.log('Submited')
                evaluations.shift()
                // setEvaluations([...evaluations]);
                setCursor(Math.min(cursor + 1, evaluations.length));
                const resp = await loadNextEvaluation({
                    roundId, limit: 10, includeSubmissions: true, next
                });
                if ('detail' in resp) {
                    console.error(resp.detail)
                } else {
                    setNext(resp.next || '')
                    setEvaluations([...evaluations, ...resp.data])
                }

            }
        } catch (e) {
            console.error(e)
        }
    }
    if (evaluations.length === 0) {
        return <p>No evaluations</p>
    }

    const currentEvaluation = evaluations[cursor]
    if (!currentEvaluation) {
        return <p>No evaluations</p>
    }
    const currentSubmission = currentEvaluation.submission;
    if (!currentSubmission) {
        return <p>No submission</p>
    }
    return (
        <div>
            <Button onClick={() => setCursor(cursor - 1)} disabled={cursor === 0}>Previous</Button>
            <Button onClick={() => setCursor(cursor + 1)} disabled={cursor === evaluations.length - 1}>Next</Button>
            <Button onClick={() => submit(currentEvaluation.evaluationId, 0)} color="error" variant="contained">
                No
            </Button>
            <Button onClick={() => submit(currentEvaluation.evaluationId, 100)} color="success" variant="contained">
                Yes
            </Button>
            {currentSubmission.mediatype === MediaType.IMAGE && (
                <ImagePreview submission={currentSubmission} />
            )}
            {currentSubmission.mediatype === MediaType.VIDEO && (
                <VideoPreview submission={currentSubmission} />
            )}
            {currentSubmission.mediatype === MediaType.AUDIO && (
                <AudioPreview submission={currentSubmission} />
            )}
        </div>
    );
}
export default EvaluationManager