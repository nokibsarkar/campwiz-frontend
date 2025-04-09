"use client"
import loadNextEvaluation from "./loadNextEvaluation"
import { Evaluation, EvaluationListResponseWithCurrentStats } from "@/types/submission"
import React, { useEffect, useState } from "react"
import submitVote from "./submitVote"
import { MediaType } from "@/types/round"
import AllSet from "./AllSet"
// import IconButton from "@mui/material/IconButton"
import ScoreOrBinaryVotingInterface from "./BinaryOrScoreVotingInterface"

const prefetchSubmissionPreview = async (url: string) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const blob = await response.blob();
        const localURL = URL.createObjectURL(blob);
        return { url: localURL };
    } catch (error) {
        return { error: (error as Error).message }
    }
}


const EvaluationManager = ({ roundId, initailEvaluations: initialEvaluations, next: initialNext, limit = 1, campaignId, isPublicJury, assignmentCount: initialAssignmentCount, evaluationCount: initialEvaluationCount }: { roundId: string, initailEvaluations: Evaluation[], next?: string, limit: number, campaignId: string, isPublicJury: boolean, evaluationCount: number, assignmentCount: number }) => {
    const [evaluations, setEvaluations] = React.useState<Evaluation[]>(initialEvaluations);
    const [next, setNext] = React.useState<string | undefined>(initialNext);
    const [currentCursor, setCurrentCursor] = React.useState(0);
    const [isLoading, setIsLoading] = React.useState(false);
    const currentEvaluation = evaluations?.[currentCursor];
    const [imageLoaded, setImageLoaded] = useState(true);
    const [error, setError] = useState<string | null>(null);
    // It would determine whether any more evaluations are available or not.
    const [hasNextEvaluation, setHasNextEvauation] = useState<boolean>(evaluations?.length > currentCursor);
    const nextEvaluation = hasNextEvaluation ? evaluations[currentCursor + 1] : null;
    const [assignmentCount, setAssignmentCount] = useState(initialAssignmentCount);
    const [evaluationCount, setEvaluationCount] = useState(initialEvaluationCount);
    const [saving, setSaving] = useState(false);
    const nextImageWrapper = (dx: number = 1) => {
        setImageLoaded(false);
        setCurrentCursor((cursor) => cursor + dx);
    }
    const submit = async (score: number) => {
        try {
            if (saving) return;
            if (!currentEvaluation) return;
            if (!currentEvaluation.submission) return;
            if (!imageLoaded) return;
            setSaving(true);
            const response = await submitVote(
                roundId,
                isPublicJury,
                [
                    { evaluationId: currentEvaluation.evaluationId, score, comment: null, submissionId: currentEvaluation.submission.submissionId }
                ]
            );
            if (!response) {
                setError("Something went wrong");
                return;
            }
            if ('detail' in response) {
                setError(response.detail);
                return
            }
            const r = response as EvaluationListResponseWithCurrentStats;
            setAssignmentCount(r.totalAssignmentCount);
            setEvaluationCount(r.totalEvaluatedCount);
            nextImageWrapper();
        } catch (error) {
            setError((error as Error).message);
            return
        } finally {
            setSaving(false);
        }
    }

    /*
    First try to check if any nextEvaluation is available.
    If avaliable, then check if the submission url is a http url. If it is, then load the submission.
    When the cursor is at the end of the evaluations, then load the next evaluations and also load their submissions one by one.
    **/
    useEffect(() => {
        if (!next || !roundId || !limit || !hasNextEvaluation || !evaluations || !evaluations.length) {
            return;
        }
        if (currentCursor < evaluations.length - 1) {
            return;
        }
        setIsLoading(true);
        loadNextEvaluation({ roundId, limit, next, includeSubmissions: true, isPublic: isPublicJury }).then(async (response) => {
            if (!response) {
                return;
            }
            if ('detail' in response) {
                setError(response.detail);
                return;
            }
            const r = response as EvaluationListResponseWithCurrentStats;
            const addedEvaluations = r.data;
            setAssignmentCount(r.totalAssignmentCount);
            setEvaluationCount(r.totalEvaluatedCount);
            setEvaluations((evaluations) => [...evaluations, ...addedEvaluations]);
            setNext(r.next);
            setHasNextEvauation(r.next !== undefined && r.next !== next && r.next !== "");
            setIsLoading(false);
        });
    }, [currentCursor, evaluations, evaluations.length, hasNextEvaluation, isPublicJury, limit, next, roundId]);
    useEffect(() => {
        if (!nextEvaluation)
            return;
        if (!nextEvaluation.submission)
            return;
        if (!nextEvaluation.submission.url)
            return;
        // Removed console.log to avoid unintended logging in production
        // only prefetch image previews
        if (nextEvaluation.submission.mediatype !== MediaType.IMAGE)
            return;
        if (nextEvaluation.submission.url.startsWith("http")) {
            prefetchSubmissionPreview(nextEvaluation.submission.url).then((response) => {
                if (response.error)
                    return;
                if (!response.url)
                    return;
                setEvaluations((evaluations) => {
                    const updatedEvaluations = evaluations.map((evaluation, index) => {
                        if (!evaluation.submission)
                            return evaluation;
                        if (index === currentCursor + 1)
                            return {
                                ...evaluation,
                                submission: {
                                    ...evaluation.submission,
                                    url: response.url,
                                    submissionId: evaluation.submission.submissionId || '' // Ensure submissionId is always a string
                                }
                            }
                        return evaluation;
                    })
                    return updatedEvaluations;
                })
            }
            )
        }
    }, [currentCursor, nextEvaluation]);

    if (!currentEvaluation)
        return <AllSet roundId={roundId} campaignId={campaignId} />
    const { submission } = currentEvaluation;
    if (!submission) return null;

    return (
        <ScoreOrBinaryVotingInterface
            campaignId={campaignId}
            submission={submission}
            currentEvaluation={currentEvaluation}
            nextImageWrapper={nextImageWrapper}
            evaluationCount={evaluationCount}
            assignmentCount={assignmentCount}
            isPublicJury={isPublicJury}
            isLoading={isLoading}
            currentCursor={currentCursor}
            setCurrentCursor={setCurrentCursor}
            submit={submit}
            saving={saving}
            error={error}
            returnTo={`/campaign/${campaignId}`}
        />
    )
}
export default EvaluationManager