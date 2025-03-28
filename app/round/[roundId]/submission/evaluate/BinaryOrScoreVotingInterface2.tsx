"use client"
import Logo from "@/components/Logo"
import loadNextEvaluation from "./loadNextEvaluation"
import { Evaluation } from "@/types/submission"
import LinearProgress from "@mui/material/LinearProgress"
import SubmissionDetails from "@/app/submission/[submissionId]/_preview/Details"
import React, { lazy, Suspense, useEffect, useState } from "react"
import submitVote from "./submitVote"
import { EvaluationType, MediaType } from "@/types/round"
import AllSet from "./AllSet"
const VideoApp = lazy(() => import("@/app/submission/[submissionId]/_preview/videoplayer"));
const AudioPlayer = lazy(() => import("@/app/submission/[submissionId]/_preview/audioPlayer"));
const BinaryVotingInterface = lazy(() => import("./BinaryVotingInterface"));
const RatingVotingInterface = lazy(() => import("./RatingVotingInterface"));
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



const ScoreOrBinaryVotingInterface = ({ roundId, initailEvaluations: initialEvaluations, next: initialNext, limit = 1, campaignId, isPublicJury }: { roundId: string, initailEvaluations: Evaluation[], next?: string, limit: number, campaignId: string, isPublicJury: boolean }) => {
    const [evaluations, setEvaluations] = React.useState<Evaluation[]>(initialEvaluations);
    const [next, setNext] = React.useState<string | undefined>(initialNext);
    const [currentCursor, setCurrentCursor] = React.useState(0);
    const [isLoading, setIsLoading] = React.useState(false);
    const currentEvaluation = evaluations?.[currentCursor];
    const [error, setError] = useState<string | null>(null);
    // It would determine whether any more evaluations are available or not.
    const [hasNextEvaluation, setHasNextEvauation] = useState<boolean>(evaluations?.length > currentCursor);
    const nextEvaluation = hasNextEvaluation ? evaluations[currentCursor + 1] : null;
    const [saving, setSaving] = useState(false);
    const submit = async (score: number) => {
        try {
            if (saving) return;
            if (!currentEvaluation) return;
            if (!currentEvaluation.submission) return;
            setSaving(true);
            const response = await submitVote(
                roundId,
                isPublicJury,
                [
                    { evaluationId: currentEvaluation.evaluationId, score, comment: null, submissionId: currentEvaluation.submission.submissionId }
                ]
            );
            if (!response) {
                return null;
            }
            if ('detail' in response) {
                return { error: response.detail }
            }
            setCurrentCursor((cursor) => cursor + 1);
        } catch (error) {
            return { error: (error as Error).message }
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
            const addedEvaluations = response.data;
            setEvaluations((evaluations) => [...evaluations, ...addedEvaluations]);
            setNext(response.next);
            setHasNextEvauation(response.next !== undefined && response.next !== next && response.next !== "");
            setIsLoading(false);
        });
        setIsLoading(false);
    }, [currentCursor, evaluations, evaluations.length, hasNextEvaluation, isPublicJury, limit, next, roundId]);
    useEffect(() => {
        if (!nextEvaluation)
            return;
        if (!nextEvaluation.submission)
            return;
        if (!nextEvaluation.submission.url)
            return;
        // only prefetch image previews
        if (nextEvaluation.submission.mediatype !== MediaType.IMAGE)
            return;
        if (nextEvaluation.submission.url.startsWith("http")) {
            console.log("Prefetching the next submission preview : ", nextEvaluation.submission.url);
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
        <div className="flex h-full w-full sm:flex-row flex-col">
            <div className="relative h-full w-full sm:w-1/2 border">
            </div>
            <div className="relative h-0 sm:h-full w-full sm:w-1/2 border">
            </div>
        </div>
    )
}
export default ScoreOrBinaryVotingInterface