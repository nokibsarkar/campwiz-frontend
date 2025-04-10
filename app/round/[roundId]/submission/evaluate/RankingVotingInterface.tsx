"use client";
import React, { useEffect, useState } from "react";
import SortableList, { SortableItem } from "react-easy-sort";
import { Badge, Button, Dialog, DialogActions, DialogContent, Fab } from "@mui/material";
import { arrayMoveImmutable } from "array-move";
import "./index.css"
import ViewIcon from "@mui/icons-material/Visibility";
import { Evaluation, Submission } from "@/types/submission";
import Image from "next/image";
import loadNextEvaluation from "../loadNextEvaluation";
import submitVote from "./submitVote";
import AllSet from "./AllSet";
import Header from "@/components/home/Header";
import CloseButton from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";

const useStyles = {
    root: {
        display: "flex",
        flexWrap: "wrap",
        userSelect: "none"
    },
    item: {
        position: "relative",
        flexShrink: 0,
        display: "flex",
        margin: 2,
        cursor: "grab",
        userSelect: "none",
        boxShadow: "0px 6px 6px -3px rgba(0, 0, 0, 0.2)",
        borderRadius: "20%"
    },
    image: {
        width: 150,
        height: 150,
        pointerEvents: "none"
    },
    button: {
        position: "absolute",
        bottom: 0,
        right: 0
    },
    dragged: {
        boxShadow:
            "0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12)",
        "& button": {
            opacity: 0
        }
    }
}
const handleStartDrag = () => document.body.style.overflow = 'hidden';
const handleStopDrag = () => document.body.style.overflow = 'auto';

const RankingVotingInterface = ({ initailEvaluations, limit, roundId, isPublicJury, campaignId }: { roundId: string, initailEvaluations: Evaluation[], next?: string, limit: number, campaignId: string, isPublicJury: boolean }) => {
    const classes = useStyles;
    const [evaluations, setEvaluations] = useState<Evaluation[]>(initailEvaluations);
    const [next, setNext] = useState<string | undefined>("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [hasNextEvaluation, setHasNextEvauation] = useState<boolean>(evaluations.length > 0);
    const [currentSelectedForPreview, setCurrentSelectedForPreview] = useState<Submission | null>(null);
    useEffect(() => {
        if (!next || !roundId || !limit || !hasNextEvaluation || !evaluations || !evaluations.length) {
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
    }, [limit, next, hasNextEvaluation, evaluations, roundId, isPublicJury]);
    const onSortEnd = (oldIndex: number, newIndex: number) => {
        console.log(oldIndex, newIndex);
        setEvaluations((array) => arrayMoveImmutable(array, oldIndex, newIndex));
    };
    const saveRanking = async () => {
        const perPositionPoint = 100 / limit;
        const newEvaluations = evaluations.map((evaluation, index) => {
            return {
                evaluationId: evaluation.evaluationId,
                score: perPositionPoint * (evaluations.length - index),
                comment: null,
                submissionId: evaluation.submissionId
            }
        });
        const resp = submitVote(roundId, isPublicJury, newEvaluations);
        if (!resp) {
            return;
        }
        if ('detail' in resp) {
            console.error(resp.detail);
        } else {
            console.log('Submited');
            setEvaluations([]);
        }
    };
    if (error) {
        return <p>Error : {error}</p>
    }
    if (evaluations.length === 0) {
        return <AllSet campaignId={campaignId} roundId={roundId} />
    }

    return (
        <>
            <Header />
            <div>
                <SortableList
                    onSortEnd={onSortEnd}
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        userSelect: "none"
                    }}
                    draggedItemClassName='k'
                >
                    {evaluations.map(({ submission, }, position) => submission && (
                        <SortableItem key={submission.submissionId}>
                            <Badge
                                overlap="circular"
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                badgeContent={position + 1}
                                color="primary"
                            >
                                <div style={{
                                    position: "relative",
                                    margin: '2em',
                                    cursor: "grab",
                                    userSelect: "none",
                                    // boxShadow: "0px 6px 6px -3px rgba(0, 0, 0, 0.2)",
                                    borderRadius: "20%",

                                }} className="w-20 h-20 sm:w-24 sm:h-24"
                                    onDragStart={handleStartDrag}
                                    onDragEnd={handleStopDrag}
                                >
                                    <Fab
                                        color="primary"
                                        size="small"
                                        sx={classes.button}
                                        aria-label="show-preview"
                                        onClick={() => setCurrentSelectedForPreview(submission)}
                                    >
                                        <ViewIcon />
                                    </Fab>
                                    <Image
                                        src={submission.thumburl}
                                        alt={submission.title}
                                        style={{
                                            pointerEvents: "none",
                                            borderRadius: "20%"
                                        }}
                                        fill
                                        unoptimized
                                        slot="img"
                                    />

                                </div>
                            </Badge>
                        </SortableItem>
                    ))}
                </SortableList>
                <div style={{ textAlign: "center", marginTop: 20 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={saveRanking}
                        loading={isLoading}
                        disabled={isLoading}
                        startIcon={<SaveIcon />}
                        sx={{
                            mr: 0,
                            ml: 'auto',
                            right: 0,
                        }}
                    >
                        Submit
                    </Button>
                </div>
                {currentSelectedForPreview && <Dialog
                    open={Boolean(currentSelectedForPreview)}
                    onClose={() => setCurrentSelectedForPreview(null)}
                    sx={{ textAlign: 'center' }}
                >
                    <DialogContent sx={{ height: 400, width: 400 }}>
                        <Image
                            src={currentSelectedForPreview.thumburl}
                            alt={currentSelectedForPreview.title}
                            // width={currentSelectedForPreview.thumbwidth || 400}
                            // height={currentSelectedForPreview.thumbheight}
                            unoptimized
                            fill
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setCurrentSelectedForPreview(null)} color='error' variant='contained' startIcon={<CloseButton />}>
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>}
            </div>
        </>
    );
}
export default RankingVotingInterface;