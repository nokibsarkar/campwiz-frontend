"use client"
import Logo from "@/components/Logo"
import loadNextEvaluation from "./loadNextEvaluation"
import { Evaluation } from "@/types/submission"
import { Button, LinearProgress } from "@mui/material"
import SubmissionDetails from "@/app/submission/[submissionId]/_preview/Details"
import React, { lazy, Suspense, useEffect, useState } from "react"
import submitVote from "./submitVote"
import { EvaluationType, MediaType } from "@/types/round"
import Link from "next/link"
const VideoApp = lazy(() => import("@/app/submission/[submissionId]/_preview/videoplayer"));
const AudioPlayer = lazy(() => import("@/app/submission/[submissionId]/_preview/audioPlayer"));
const RankingVotingInterface = lazy(() => import("./RankingVotingInterface"));
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
const VotingOrRatingInterface = ({ evaluation, setCurrentCursor, }: { evaluation: Evaluation, roundId: string, setCurrentCursor: React.Dispatch<React.SetStateAction<number>> }) => {
    const [saving, setSaving] = useState(false);
    const submit = async (score: number) => {
        try {
            if (saving) return;
            setSaving(true);

            const response = await submitVote(evaluation.evaluationId, score);
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
    if (!evaluation) return null;
    const { submission } = evaluation;
    if (!submission) return null;
    return (
        <div className="relative h-11/12 sm:h-full w-full sm:w-3/4 overflow-y-auto block">
            <div className="h-3/4 flex flex-col mb-1 justify-between">
                <Logo />

                {
                    // eslint-disable-next-line @next/next/no-img-element
                    submission.mediatype === MediaType.IMAGE && <img src={submission.url || '/red-hill.svg'} alt={submission.title} className="mx-auto block h-full w-auto" />
                }
                {submission.mediatype === MediaType.VIDEO &&
                    <Suspense fallback={<LinearProgress sx={{ width: '100%' }} />}>
                        <VideoApp poster={submission.thumburl} src={submission.url} />
                    </Suspense>
                }
                {submission.mediatype === MediaType.AUDIO &&
                    <Suspense fallback={<LinearProgress sx={{ width: '100%' }} />}>
                        <AudioPlayer src={submission.url} title={submission.title} author={submission.author} />
                    </Suspense>
                }
                {evaluation.type === EvaluationType.BINARY &&
                    <Suspense fallback={<LinearProgress sx={{ width: '100%' }} />}>
                        <BinaryVotingInterface goNext={() => setCurrentCursor((cursor) => cursor + 1)} goPrevious={() => setCurrentCursor((cursor) => cursor - 1)} submitScore={submit} score={evaluation.score} saving={saving} />
                    </Suspense>
                }
                {
                    evaluation.type === EvaluationType.SCORE &&
                    <Suspense fallback={<LinearProgress sx={{ width: '100%' }} />}>
                        <RatingVotingInterface score={evaluation.score} goNext={() => setCurrentCursor((cursor) => cursor + 1)} goPrevious={() => setCurrentCursor((cursor) => cursor - 1)} submitScore={submit} saving={saving} />
                    </Suspense>
                }

            </div>
            <div className="block h-1/4 z-18  relative rounded-4xl border-t p-4">
                <SubmissionDetails submission={submission} />
            </div>
        </div>
    )
}

const AllSet = ({ campaignId }: { roundId: string, campaignId: string }) => {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full">
            <Logo />
            <div className="text-center">
                <h1 className="text-2xl font-bold">All Set</h1>
                <p className="text-lg">Seems like, You have no pending submissions to evaluate in this round.</p>
                <div className="flex-row flex justify-center">
                    <Link href={`/campaign/${campaignId}`}>
                        <Button variant="contained" color="primary" sx={{ m: 1 }}>
                            Go to Round
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
const EvaluationManager = ({ roundId, initailEvaluations: initialEvaluations, next: initialNext, limit = 1, campaignId }: { roundId: string, initailEvaluations: Evaluation[], next?: string, limit: number, campaignId: string }) => {
    const [evaluations, setEvaluations] = React.useState<Evaluation[]>(initialEvaluations);
    const [next, setNext] = React.useState<string | undefined>(initialNext);
    const [currentCursor, setCurrentCursor] = React.useState(0);
    const [isLoading, setIsLoading] = React.useState(false);
    const currentEvalution = evaluations?.[currentCursor];
    const [error, setError] = useState<string | null>(null);
    // It would determine whether any more evaluations are available or not.
    const [hasNextEvaluation, setHasNextEvauation] = useState<boolean>(evaluations?.length > currentCursor);
    const nextEvaluation = hasNextEvaluation ? evaluations[currentCursor + 1] : null;
    /*
    First try to check if any nextEvaluation is available.
    If avaliable, then check if the submission url is a http url. If it is, then load the submission.
    When the cursor is at the end of the evaluations, then load the next evaluations and also load their submissions one by one.
    **/
    useEffect(() => {
        if (!next) {
            return;
        }
        if (!roundId) {
            return;
        }
        if (!limit) {
            return;
        }
        if (!hasNextEvaluation) {
            return;
        }
        if (currentCursor < evaluations.length - 1) {
            return;
        }
        setIsLoading(true);
        loadNextEvaluation({ roundId, limit, next }).then(async (response) => {
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
            setHasNextEvauation(response.next !== undefined && response.next !== next)
            setIsLoading(false);
        });
        setIsLoading(false);
    }, [currentCursor, evaluations.length, hasNextEvaluation, limit, next, roundId]);
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
    if (!currentEvalution)
        return <AllSet roundId={roundId} campaignId={campaignId} />

    return (
        <div className="flex sm:flex-row h-full flex-col  w-full">
            <div className="flex flex-row items-start relative sm:h-full w-full h-16 sm:w-1/4 overflow-y-auto">
                {isLoading && <LinearProgress />}
                {error && <p>{error}</p>}
            </div>
            {evaluations && (
                [EvaluationType.BINARY, EvaluationType.SCORE].includes(currentEvalution.type) &&
                <VotingOrRatingInterface
                    evaluation={currentEvalution}
                    roundId={roundId}
                    setCurrentCursor={setCurrentCursor}
                />
            )}
            {currentEvalution.type === EvaluationType.RANKING &&
                <Suspense fallback={<LinearProgress />}>
                    <RankingVotingInterface
                        goNext={() => setCurrentCursor((cursor) => cursor + 1)}
                        goPrevious={() => setCurrentCursor((cursor) => cursor - 1)}
                        saving={false}
                        score={currentEvalution.score}
                        submitScore={() => {
                            console.log("submitting ranking");
                        }}
                        key={currentEvalution.evaluationId}
                    />
                </Suspense>
            }
        </div>
    )
}
export default EvaluationManager