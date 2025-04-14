"use client"
import loadNextEvaluation from "../loadNextEvaluation"
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
    const [currentEvaluation, setCurrentEvaluation] = useState<Evaluation | null>(evaluations?.[0] ?? null);
    const [imageLoaded, setImageLoaded] = useState(true);
    const [error, setError] = useState<string | null>(null);
    // It would determine whether any more evaluations are available or not.
    const [hasNextEvaluation, setHasNextEvauation] = useState<boolean>(evaluations?.length > currentCursor);
    const nextEvaluation = hasNextEvaluation ? evaluations[currentCursor + 1] : null;
    const [assignmentCount, setAssignmentCount] = useState(initialAssignmentCount);
    const [evaluationCount, setEvaluationCount] = useState(initialEvaluationCount);
    const [saving, setSaving] = useState(false);
    const [descriptionFetching, setDescriptionFetching] = useState(false);
    const [fetchedDescription, setFetchedDescription] = useState<string | null>(null);
    const [skipCount, setSkipCount] = useState(0);
    useEffect(() => {
        if (!evaluations)
            return setCurrentEvaluation(null);
        if (descriptionFetching) return;

        const cur = evaluations[currentCursor];
        if (cur && cur.submission && !cur.submission.description && !descriptionFetching) {
            console.log('Fetching Description');
            const qs = new URLSearchParams({
                "action": "query",
                "format": "json",
                "prop": "imageinfo",
                "titles": `File:${cur.submission.title}`,
                "formatversion": "2",
                "iiprop": "extmetadata|url",
                "iiurlwidth": "640",
                "iiurlheight": "640",
                "iimetadataversion": "latest",
                "iiextmetadatafilter": "ImageDescription",
                "origin": "*",
            }).toString();
            const url = "https://commons.wikimedia.org/w/api.php?" + qs;
            setDescriptionFetching(true);
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    if (data.query && data.query.pages && data.query.pages.length > 0) {
                        const page = data.query.pages[0];
                        if (page.imageinfo && page.imageinfo.length > 0) {
                            const imageInfo = page.imageinfo[0];
                            if (imageInfo.extmetadata && imageInfo.extmetadata.ImageDescription) {
                                const tempElement = document.createElement('div');
                                tempElement.innerHTML = imageInfo.extmetadata.ImageDescription.value;
                                const description = tempElement.innerText;
                                tempElement.remove();
                                console.log('Fetched Description:', description);
                                setFetchedDescription(description);
                                setCurrentEvaluation((prev) => {
                                    if (!prev) return null;
                                    if (!prev.submission) return null;
                                    return {
                                        ...prev,
                                        submission: {
                                            ...prev.submission,
                                            description: imageInfo.extmetadata.ImageDescription.value
                                        }
                                    }
                                }
                                )
                            }
                        }
                    }
                })
                .catch((error) => {
                    console.error("Error fetching description:", error);
                }).finally(() => {
                    setDescriptionFetching(false);
                })
        }
        setCurrentEvaluation(cur);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [evaluations, currentCursor]);
    const nextImageWrapper = (dx: number = 1) => {
        setImageLoaded(false);
        setCurrentCursor((cursor) => cursor + dx);
    }
    const submit = async (score: number) => {
        console.log('imageLoaded', imageLoaded);
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
                    { evaluationId: currentEvaluation.evaluationId, score, comment: null, submissionId: currentEvaluation.submission.submissionId, description: fetchedDescription, }
                ]
            );
            if (!response) {
                throw new Error("Something went wrong");
            }
            if ('detail' in response) {
                throw new Error(response.detail);
            }
            const r = response as EvaluationListResponseWithCurrentStats;
            setAssignmentCount(r.totalAssignmentCount);
            setEvaluationCount(r.totalEvaluatedCount);
            nextImageWrapper();
        } catch (error) {
            setError((error as Error).message);
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
        loadNextEvaluation({ roundId, limit, next, includeSubmissions: true, isPublic: isPublicJury, includeEvaluated: false, includeNonEvaluated: true }).then(async (response) => {
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
        return <AllSet roundId={roundId} campaignId={campaignId} skipCount={skipCount} />
    const { submission } = currentEvaluation;
    if (!submission) return null;
    return (
        <ScoreOrBinaryVotingInterface
            campaignId={campaignId}
            submission={submission}
            currentEvaluation={currentEvaluation}
            nextImageWrapper={nextImageWrapper}
            imageLoaded={imageLoaded}
            setImageLoaded={setImageLoaded}
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
            hasNext={true}
            onSkip={() => {
                setSkipCount((prev) => prev + 1);
                nextImageWrapper(1);
            }}
        />
    )
}
export default EvaluationManager