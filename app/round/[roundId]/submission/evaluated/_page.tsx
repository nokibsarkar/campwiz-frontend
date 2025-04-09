"use client"
import Image from "next/image";
import { Button, IconButton, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import CrossIcon from '@/public/cross.svg';
import OkIcon from '@/public/ok.svg';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import EditIcon from '@mui/icons-material/Edit';
import Link from "next/link";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Evaluation } from "@/types/submission";
import { EvaluationType, Round } from "@/types/round";
import { useState } from "react";
import loadNextEvaluation from "../evaluate/loadNextEvaluation";

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
    const loadWithToken = async ({ nextToken, previousToken }: { nextToken?: string | null, previousToken?: string | null }) => {
        let evs: Evaluation[] = []
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
                    setPreviousToken(response.prev || null);
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
                setPreviousToken(response.prev || null);
                setNext(response.next || null);
            }
        }
        setEvaluations(evs);
    }
    return <div>
        <div className="flex justify-around m-4 flex-row">
            <Button
                variant="contained"
                color="primary"
                onClick={() => {
                    if (previousToken)
                        loadWithToken({ previousToken });
                }}
                disabled={!previousToken}
                startIcon={<ArrowBackIcon />}
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
                disabled={!next}
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
                    return <TableRow key={evaluation.evaluationId}>
                        <TableCell>
                            {evaluation.submission?.title}
                        </TableCell>
                        <TableCell>
                            <Image
                                src={evaluation.submission?.thumburl || ''}
                                alt="preview"
                                width={100}
                                height={100}
                            />
                        </TableCell>
                        <TableCell>
                            <Score evType={evaluation.type} score={evaluation.score} />
                        </TableCell>
                        <TableCell>
                            <IconButton>
                                <Link href={`/submission/${evaluation.submissionId}/`}>
                                    <VisibilityIcon />
                                </Link>
                                <Link href={`/submission/${evaluation.submissionId}/edit/`}>
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