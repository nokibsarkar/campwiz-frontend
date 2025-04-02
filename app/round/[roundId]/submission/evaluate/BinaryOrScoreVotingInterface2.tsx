"use client"
import loadNextEvaluation from "./loadNextEvaluation"
import { Evaluation, Submission } from "@/types/submission"
import LinearProgress from "@mui/material/LinearProgress"
import SubmissionDetails from "@/app/submission/[submissionId]/_preview/Details"
import React, { lazy, Suspense, useEffect, useState } from "react"
import submitVote from "./submitVote"
import { EvaluationType, MediaType } from "@/types/round"
import AllSet from "./AllSet"
import ReturnButton from "@/components/ReturnButton"
import { Button, Dialog, DialogActions, Typography, useMediaQuery } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import IconButton from "@mui/material/IconButton"
import InfoIcon from "@mui/icons-material/Info"
const VideoApp = lazy(() => import("@/app/submission/[submissionId]/_preview/videoplayer"));
const AudioPlayer = lazy(() => import("@/app/submission/[submissionId]/_preview/audioPlayer"));
const BinaryVotingInterface = lazy(() => import("./BinaryVotingInterface copy"));
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


const InfoTriggerButton = ({ submission }: { submission: Submission }) => {
    const [showInfo, setShowInfo] = useState(false);
    const handleClick = () => {
        setShowInfo(!showInfo);
    }
    return (
        showInfo ? <Suspense fallback={<LinearProgress />}>
            <Dialog
                open={showInfo}
                onClose={handleClick}
                fullWidth
                maxWidth="lg"
                className="overflow-hidden"
            >
                <SubmissionDetails
                    submission={submission}
                />
                <DialogActions>
                    <Button
                        variant="outlined"
                        color="error"
                        onClick={handleClick}
                        startIcon={<CloseIcon />}
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Suspense> : <IconButton onClick={handleClick} className="absolute top-2 right-2">
            <InfoIcon />
        </IconButton>
    )
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
    const isSmall = useMediaQuery('(max-width: 600px)');
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
        // Removed console.log to avoid unintended logging in production
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
            <div className="relative w-full sm:w-2/3 h-11/12">
                <div className="relative max-h-1/12 flex flex-row justify-between items-center">
                    <ReturnButton to={`/campaign/${campaignId}`} />
                    {isSmall && <Typography variant="subtitle1" className="text-center font-bold">
                        {submission.title}
                    </Typography>
                    }
                    {isSmall && <InfoTriggerButton submission={submission} />}
                </div>
                {

                    // eslint-disable-next-line @next/next/no-img-element
                    submission.mediatype === MediaType.IMAGE && <img
                        src={submission.url || '/red-hill.svg'}
                        alt={submission.title}
                        className="mx-auto block object-contain max-h-5/6"
                    // fill
                    />
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

            </div>
            <div className="relative h-1/12 sm:h-full w-full sm:w-1/3">
                <Suspense fallback={<LinearProgress sx={{ width: '100%' }} />}>
                    {!isSmall && <SubmissionDetails
                        submission={submission}
                    />}
                    {error && <p className="text-center text-lg text-red-600 font-bold">{error}</p>}
                    {currentEvaluation.type === EvaluationType.BINARY &&
                        <BinaryVotingInterface
                            goNext={() => setCurrentCursor((cursor) => cursor + 1)}
                            goPrevious={() => setCurrentCursor((cursor) => cursor - 1)}
                            submitScore={submit}
                            evaluation={currentEvaluation}
                            saving={saving || isLoading}
                        />
                    }
                    {
                        currentEvaluation.type === EvaluationType.SCORE &&
                        <RatingVotingInterface
                            evaluation={currentEvaluation}
                            goNext={() => setCurrentCursor((cursor) => cursor + 1)}
                            goPrevious={() => setCurrentCursor((cursor) => cursor - 1)}
                            submitScore={submit} saving={saving || isLoading}
                        />
                    }

                </Suspense>
            </div>
        </div>
    )
}
export default ScoreOrBinaryVotingInterface