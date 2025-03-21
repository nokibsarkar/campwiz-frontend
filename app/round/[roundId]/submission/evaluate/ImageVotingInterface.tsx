"use client"
import Logo from "@/components/Logo"
import BinaryVotingInterface from "./BinaryVotingInterface"
import RatingVotingInterface from "./RatingVotingInterface"
import loadNextEvaluation from "./loadNextEvaluation"
import { Evaluation } from "@/types/submission"
import { Button, LinearProgress } from "@mui/material"
import SubmissionDetails from "@/app/submission/[submissionId]/_preview/Details"
import React, { useEffect } from "react"
import submitVote from "./submitVote"
import { EvaluationType } from "@/types/round"
import BackWardArrowIcon from "@mui/icons-material/ArrowBackIosNew";
const loadSubmission = async (url: string) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const headers = response.headers;
        const contentType = headers.get('content-type');
        console.log(contentType);
        const blob = await response.blob();
        const localURL = URL.createObjectURL(blob);
        return { url: localURL };
    } catch (error) {
        return { error: (error as Error).message }
    }
}
const VotingOrRatingInterface = ({ evaluation, setCurrentCursor }: { evaluation: Evaluation, roundId: string, setCurrentCursor: React.Dispatch<React.SetStateAction<number>> }) => {
    const submit = async (score: number) => {
        const response = await submitVote(evaluation.evaluationId, score);
        if (!response) {
            return null;
        }
        if ('detail' in response) {
            return { error: response.detail }
        }
        setCurrentCursor((cursor) => cursor + 1);
    }
    if (!evaluation) return null;
    const { submission } = evaluation;
    if (!submission) return null;
    return (
        <div className="relative h-11/12 sm:h-full w-full sm:w-3/4 overflow-y-auto block">
            <div className="h-3/4 flex flex-col mb-1 justify-between">
                <Logo />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={submission.url || '/red-hill.svg'} alt={submission.title} className="mx-auto block h-full w-auto" />
                {evaluation.type === EvaluationType.BINARY &&
                    <BinaryVotingInterface goNext={() => setCurrentCursor((cursor) => cursor + 1)} goPrevious={() => setCurrentCursor((cursor) => cursor - 1)} submitScore={submit} score={evaluation.score} />
                }
                {
                    evaluation.type === EvaluationType.SCORE &&
                    <RatingVotingInterface score={evaluation.score} goNext={() => setCurrentCursor((cursor) => cursor + 1)} goPrevious={() => setCurrentCursor((cursor) => cursor - 1)} submitScore={submit} />
                }

            </div>
            <div className="block h-1/4 z-18  relative rounded-4xl border-t p-4">
                <SubmissionDetails submission={submission} />
            </div>
        </div>
    )
}
const ReturnButton = () => {
    return (
        <Button
            onClick={(() => typeof window !== 'undefined' && window.history.back())}
            variant="text"
            color="primary"
            startIcon={<BackWardArrowIcon />}
            className="absolute top-4 left-4 z-20"
        >
            Return
        </Button>
    )
}
const EvaluationManager = ({ roundId, initailEvaluations: initialEvaluations, next: initialNext, limit = 1 }: { roundId: string, initailEvaluations: Evaluation[], next?: string, limit: number }) => {
    const [evaluations, setEvaluations] = React.useState<Evaluation[]>(initialEvaluations);
    const [next, setNext] = React.useState<string | undefined>(initialNext);
    const [currentCursor, setCurrentCursor] = React.useState(0);
    const [isLoading, setIsLoading] = React.useState(false);
    const currentEvalution = evaluations?.[currentCursor];
    const nextEvaluation = evaluations?.[currentCursor + 1];
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
        if (currentCursor === evaluations.length - 1) {
            setIsLoading(true);
            loadNextEvaluation({ roundId, limit: 1, includeSubmissions: true, next }).then((resp) => {
                if (!resp) {
                    return null;
                }
                if ('detail' in resp) {
                    return { error: resp.detail }
                }
                const evaluations = resp.data;
                for (const evaluation of evaluations) {
                    if (evaluation.submission) {
                        const { submission } = evaluation;
                        if (submission.url.startsWith('http')) {
                            console.log('loading submission');
                            loadSubmission(submission.url).then((res) => {
                                if ('error' in res) {
                                    console.error(res.error);
                                    return;
                                }
                                submission.url = res.url;
                            })
                        }
                    }
                }
                setNext(resp.next);
                setEvaluations([...evaluations, ...evaluations]);
            }).finally(() => {
                setIsLoading(false);
            })
        }
    }, [currentCursor, evaluations.length, limit, next, roundId]);
    useEffect(() => {
        if (nextEvaluation) {
            if (nextEvaluation.submission) {
                const { submission } = nextEvaluation;
                if (submission.url.startsWith('http')) {
                    console.log('loading next submission');
                    loadSubmission(submission.url).then((res) => {
                        if ('error' in res) {
                            console.error(res.error);
                            return;
                        }
                        submission.url = res.url;
                    })
                }
            }
        }
    }, [nextEvaluation,])
    return (
        <div className="flex sm:flex-row h-full flex-col  w-full">
            <div className="flex flex-row items-start relative sm:h-full w-full h-16 sm:w-1/4 overflow-y-auto">
                <ReturnButton />
                {isLoading && <LinearProgress />}
            </div>
            {!isLoading && evaluations && (
                [EvaluationType.BINARY, EvaluationType.SCORE].includes(currentEvalution.type) &&
                <VotingOrRatingInterface
                    evaluation={currentEvalution}
                    roundId={roundId}
                    setCurrentCursor={setCurrentCursor}
                />
            )}
        </div>
    )
}
export default EvaluationManager