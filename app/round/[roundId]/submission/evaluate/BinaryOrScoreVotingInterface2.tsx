"use client"
import loadNextEvaluation from "./loadNextEvaluation"
import { Evaluation, EvaluationListResponseWithCurrentStats, Submission } from "@/types/submission"
import LinearProgress from "@mui/material/LinearProgress"
import SubmissionDetails from "@/app/submission/[submissionId]/_preview/Details"
import React, { lazy, Suspense, useEffect, useState } from "react"
import submitVote from "./submitVote"
import { EvaluationType, MediaType } from "@/types/round"
import AllSet from "./AllSet"
import { Button, Dialog, DialogActions, useMediaQuery } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import IconButton from "@mui/material/IconButton"
import InfoIcon from "@mui/icons-material/Info"
import LoadingImage from '@/public/logo-animated.svg';
import Image from "next/image"
import Header from "@/components/home/Header"
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


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const InfoTriggerButton = ({ submission }: { submission: Submission }) => {
    const [showInfo, setShowInfo] = useState(false);
    const handleClick = () => {
        setShowInfo(!showInfo);
    }
    return (
        <Suspense fallback={<LinearProgress />}>
            <IconButton onClick={handleClick} className="absolute top-2 right-2" disabled={showInfo}>
                <InfoIcon />
            </IconButton>
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
        </Suspense>
    )
}
const ScoreOrBinaryVotingInterface = ({ roundId, initailEvaluations: initialEvaluations, next: initialNext, limit = 1, campaignId, isPublicJury, assignmentCount: initialAssignmentCount, evaluationCount: initialEvaluationCount }: { roundId: string, initailEvaluations: Evaluation[], next?: string, limit: number, campaignId: string, isPublicJury: boolean, evaluationCount: number, assignmentCount: number }) => {
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
    const isSmall = useMediaQuery('(max-width: 600px)');
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
                return null;
            }
            if ('detail' in response) {
                return { error: response.detail }
            }
            const r = response as EvaluationListResponseWithCurrentStats;
            setAssignmentCount(r.totalAssignmentCount);
            setEvaluationCount(r.totalEvaluatedCount);
            nextImageWrapper();
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
        <>
            <Header returnTo={`/campaign/${campaignId}`} />
            <div className="flex h-[600px] sm:h-full w-full sm:flex-row flex-col">

                <div className="relative w-full sm:w-2/3 h-5/6 flex flex-col">
                    <div className="relative max-h-1/12 flex flex-row justify-between items-center">
                        {/* <ReturnButton to={`/campaign/${campaignId}`} />
                    {isSmall && <Typography variant="subtitle1" className="text-center font-bold">
                        {submission.title}
                    </Typography>
                    }
                    {isSmall && <InfoTriggerButton submission={submission} />} */}
                    </div>
                    {
                        submission.mediatype === MediaType.IMAGE && <Image
                            src={submission.thumburl || '/red-hill.svg'}
                            alt={submission.title}
                            className="m-auto block object-contain max-h-5/6 self-center sm:self-auto"
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL={LoadingImage.src}
                            onLoad={() => setImageLoaded(true)}
                            width={submission.thumbwidth || 700}
                            height={submission.thumbheight}
                            unoptimized
                        />
                    }
                    {submission.mediatype === MediaType.VIDEO &&
                        <Suspense fallback={<LinearProgress sx={{ width: '100%' }} />}>
                            <VideoApp poster={submission.thumburl} src={submission.url} height={submission.height} width={submission.width} onPosterLoaded={() => setImageLoaded(true)} />
                        </Suspense>
                    }
                    {submission.mediatype === MediaType.AUDIO &&
                        <Suspense fallback={<LinearProgress sx={{ width: '100%' }} />}>
                            <AudioPlayer src={submission.url} title={submission.title} author={submission.author} onPosterLoaded={() => setImageLoaded(true)} />
                        </Suspense>
                    }

                </div>
                <div className="relative h-1/12 sm:h-11/12 w-full sm:w-1/3 flex flex-col justify-center items-center ">
                    <Suspense fallback={<LinearProgress sx={{ width: '100%' }} />}>
                        {!isSmall && <SubmissionDetails
                            submission={submission}
                        />}
                        {error && <p className="text-center text-lg text-red-600 font-bold">{error}</p>}
                        {currentEvaluation.type === EvaluationType.BINARY &&
                            <BinaryVotingInterface
                                goNext={() => nextImageWrapper(1)}
                                goPrevious={() => nextImageWrapper(-1)}
                                submitScore={submit}
                                evaluation={currentEvaluation}
                                saving={saving || isLoading || !imageLoaded}
                                noPrevious={currentCursor === 0}
                                evaluationCount={evaluationCount}
                                assignmnetCount={assignmentCount}

                            />
                        }
                        {
                            currentEvaluation.type === EvaluationType.SCORE &&
                            <RatingVotingInterface
                                evaluation={currentEvaluation}
                                goNext={() => nextImageWrapper(1)}
                                goPrevious={() => nextImageWrapper(-1)}
                                submitScore={submit} saving={saving || isLoading || !imageLoaded}
                                noPrevious={currentCursor === 0}
                                assignmnetCount={assignmentCount}
                                evaluationCount={evaluationCount}
                            />
                        }

                    </Suspense>
                </div>
            </div>

        </>
    )
}
export default ScoreOrBinaryVotingInterface