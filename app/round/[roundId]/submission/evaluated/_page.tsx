"use client"
import Image from "next/image";
import { Button, Dialog, DialogActions, IconButton, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import CrossIcon from '@/public/cross.svg';
import OkIcon from '@/public/ok.svg';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import EditIcon from '@mui/icons-material/Edit';
import Link from "next/link";
import LogoIcon from '@/public/logo.svg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Evaluation, Submission } from "@/types/submission";
import { EvaluationType, Round } from "@/types/round";
import { useState } from "react";
import loadNextEvaluation from "../evaluate/loadNextEvaluation";
import InformationIcon from '@mui/icons-material/Info';
import SubmissionDetails from "@/app/submission/[submissionId]/_preview/Details";
import CloseIcon from '@mui/icons-material/Close';

// const ScoreOrBinaryVotingInterface = lazy(() => import("@/app/round/[roundId]/submission/evaluate/BinaryOrScoreVotingInterface2"));
// const RankingVotingInterface = lazy(() => import("@/app/round/[roundId]/submission/evaluate/RankingVotingInterface"));
type EvaluatedPageProps = {
    initialEvaluations: Evaluation[]
    next?: string
    round: Round
}
const ActualPage = ({ initialEvaluations, next: initialNext, round }: EvaluatedPageProps) => {
    const [evaluations, setEvaluations] = useState<Evaluation[]>(initialEvaluations);
    const [previousToken, setPreviousToken] = useState<string | null>(null);
    const [next, setNext] = useState<string | null>(initialNext || null);
    const [loading, setLoading] = useState(false);
    const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
    const loadWithToken = async ({ nextToken, previousToken }: { nextToken?: string | null, previousToken?: string | null }) => {
        let evs: Evaluation[] = []
        setLoading(true);
        if (previousToken) {
            if (previousToken === initialNext) {
                evs = initialEvaluations;
                setPreviousToken(null);
                setNext(initialNext);
            } else {
                const response = await loadNextEvaluation({ isPublic: round.isPublicJury, roundId: round.roundId, limit: 20, prev: previousToken, includeSubmissions: true, includeEvaluated: true });
                if (response) {
                    if ('detail' in response) {
                        return;
                    }
                    evs = response.data;
                    setPreviousToken(nextToken || null);
                    setNext(response.next || null);
                }
            }
        } else if (nextToken) {
            const response = await loadNextEvaluation({ isPublic: round.isPublicJury, roundId: round.roundId, limit: 20, next: nextToken, includeSubmissions: true, includeEvaluated: true });
            if (response) {
                if ('detail' in response) {
                    return;
                }
                evs = response.data;
                setPreviousToken(nextToken || null);
                setNext(response.next || null);
            }
        }
        setEvaluations(evs);
        setLoading(false);
    }
    return <div>
        {selectedSubmission && <Dialog
            open={selectedSubmission !== null}
            onClose={() => setSelectedSubmission(null)}
            fullWidth
            maxWidth="lg"
            className="overflow-hidden"
        >
            <SubmissionDetails
                submission={selectedSubmission}
            />
            <DialogActions>
                <Button
                    variant="outlined"
                    color="error"
                    onClick={() => setSelectedSubmission(null)}
                    startIcon={<CloseIcon />}
                >
                    Close
                </Button>
            </DialogActions>
        </Dialog>
        }
        <div className="flex justify-around m-4 flex-row">
            <Button
                variant="contained"
                color="primary"
                onClick={() => {
                    if (previousToken)
                        loadWithToken({ previousToken });
                }}
                disabled={!previousToken || loading}
                startIcon={<ArrowBackIcon />}
                loading={loading}
            >
                Previous
            </Button>

            <Button
                variant="contained"
                color="primary"
                onClick={() => {
                    loadWithToken({ nextToken: next });
                }}
                endIcon={<ArrowForwardIcon />}
                disabled={!next || loading}
                loading={loading}
            >
                Next
            </Button>

        </div>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                        Name
                    </TableCell>
                    <TableCell>
                        Preview
                    </TableCell>
                    <TableCell>
                        Score
                    </TableCell>
                    <TableCell>
                        Action
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {evaluations.map((evaluation) => {
                    return evaluation.submission && <TableRow key={evaluation.evaluationId}>
                        <TableCell>
                            {evaluation.submission.title}
                        </TableCell>
                        <TableCell>
                            <Image
                                src={evaluation.submission.thumburl || ''}
                                alt={evaluation.submission.title}
                                width={100}
                                height={100}
                                unoptimized
                                blurDataURL={LogoIcon.src}
                                placeholder="blur"
                            />
                        </TableCell>
                        <TableCell>
                            <Score evType={evaluation.type} score={evaluation.score} />
                        </TableCell>
                        <TableCell>
                            <IconButton onClick={() => setSelectedSubmission(evaluation.submission)}>
                                <InformationIcon />
                            </IconButton>
                            <IconButton>
                                <Link href={`/round/${evaluation.roundId}/submission/evaluated/${evaluation.evaluationId}`}>
                                    <EditIcon />
                                </Link>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                })}
            </TableBody>
        </Table>
    </div>
}
const Score = ({ evType, score }: { evType: EvaluationType, score: number }) => {
    if (score === null) return null;
    if (evType === EvaluationType.BINARY) {
        return <Image src={score === 0 ? CrossIcon.src : OkIcon.src} alt="no" width={50} height={50} />
    }
    if (evType === EvaluationType.SCORE) {
        const count = score / 20;
        return Array.from({ length: 5 }, (_, i) => {
            if (i < count) {
                return <FavoriteIcon key={i} color="error" />
            }
            return <FavoriteBorderIcon key={i} color="error" />
        }
        )
    }
    return null
}
export default ActualPage