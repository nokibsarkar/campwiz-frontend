"use client";

import AudioPreview from "@/app/submission/[submissionId]/_preview/audioPreview";
import ImagePreview from "@/app/submission/[submissionId]/_preview/imagePreview";
import VideoPreview from "@/app/submission/[submissionId]/_preview/videoPreview";
import { MediaType } from "@/types/round";
import { Evaluation } from "@/types/submission";
import { Button, useMediaQuery } from "@mui/material";
import { useState } from "react";
import submitVote from "./submitVote";
import loadNextEvaluation from "./loadNextEvaluation";
import Image from "next/image";

type EvaluationManagerProps = {
    roundId: string
    initailEvaluations: Evaluation[]
    next?: string
    isPublicJury: boolean

}
const EvaluationPagination = ({ evaluations, cursor, setCursor, isSmall }: { evaluations: Evaluation[], cursor: number, setCursor: (cursor: number) => void, isSmall: boolean }) => {
    const forwardStep = isSmall ? 3 : 8;
    const backwardStep = isSmall ? 3 : 8;
    const imageDimension = isSmall ? 50 : 90;
    let firstCursor = cursor - backwardStep;
    let lastCursor = cursor + forwardStep;
    if (firstCursor < 0) {
        lastCursor -= firstCursor;
        firstCursor = 0;
    } else if (lastCursor > evaluations.length) {
        firstCursor -= lastCursor - evaluations.length;
        lastCursor = evaluations.length;
    } else {
        lastCursor = Math.min(evaluations.length, lastCursor);
    }
    return (
        <div className="flex justify-between flex-row flex-wrap sm:max-w-1/4 sm:max-h-full overflow-x-auto mb-3 rounded items-baseline">
            {evaluations.slice(firstCursor, lastCursor).map((evaluation, index) => (
                <div key={evaluation.evaluationId} onClick={() => setCursor(firstCursor + index)}
                    className={`cursor-pointer p-2 border border-gray-200 mx-1 inline-block h-max content-baseline rounded-lg ${cursor === firstCursor + index ? 'bg-gray-200' : ''}`}
                    style={{ width: `${imageDimension}px`, }}
                >
                    <Image
                        src={evaluation.submission?.thumburl as string}
                        alt={evaluation.submission?.title || ''}
                        width={imageDimension}
                        height={imageDimension}
                        unoptimized
                    />

                </div>
            ))}
        </div>
    )
}
const EvaluationManager = ({ initailEvaluations, roundId, isPublicJury }: EvaluationManagerProps) => {
    const [evaluations, setEvaluations] = useState<Evaluation[]>(initailEvaluations)
    const [cursor, setCursor] = useState(0);
    const [next, setNext] = useState('')
    const isSmall = useMediaQuery('(max-width: 600px)');
    // const { data, error, isLoading, mutate : triggerFetching } = useSWR({ roundId, limit: 1, includeSubmission: true, next }, loadNextEvaluation,  { revalidateOnMount: false, revalidateOnFocus: false });
    const submit = async (evaluationId: string, score: number) => {
        try {
            const resp = await submitVote(
                roundId,
                isPublicJury,
                [
                    { evaluationId, score, comment: null, submissionId: evaluations[cursor].submissionId }
                ]
            );
            if ('detail' in resp) {
                console.error(resp.detail)
            } else {
                console.log('Submited')
                // evaluations.shift()
                // setEvaluations([...evaluations]);
                setCursor(Math.min(cursor + 1, evaluations.length));
                const resp = await loadNextEvaluation({
                    roundId, limit: 1, includeSubmissions: true, next,
                    isPublic: isPublicJury
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
        <div className="flex gap-4 justify-center flex-col sm:flex-row">
            <EvaluationPagination evaluations={evaluations} cursor={cursor} setCursor={setCursor} isSmall={isSmall} />

            {currentSubmission.mediatype === MediaType.IMAGE && (
                <ImagePreview submission={currentSubmission} votingComponent={
                    <>
                        <Button onClick={() => submit(currentEvaluation.evaluationId, 0)} color="error" variant="contained">
                            No
                        </Button>
                        <Button onClick={() => submit(currentEvaluation.evaluationId, 100)} color="success" variant="contained">
                            Yes
                        </Button>
                    </>
                } />
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