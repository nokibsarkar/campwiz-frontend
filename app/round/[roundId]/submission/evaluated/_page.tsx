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
import InformationIcon from '@mui/icons-material/Info';
import SubmissionDetails from "@/app/submission/[submissionId]/_preview/Details";
import CloseIcon from '@mui/icons-material/Close';
import { usePathname } from "next/navigation";

type EvaluatedPageProps = {
    initialEvaluations: Evaluation[]
    next?: string
    round: Round
    prev?: string | null
}
const ActualPage = ({ initialEvaluations: evaluations, next, round, prev: previousToken }: EvaluatedPageProps) => {
    "use client"
    const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
    const returnTo = usePathname();
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
            <Link href={`/round/${round.roundId}/submission/evaluated/page/${previousToken}/prev`} style={{ visibility: previousToken ? 'visible' : 'hidden' }}>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<ArrowBackIcon />}
                >
                    Previous
                </Button>
            </Link>
            <Link href={`/round/${round.roundId}/submission/evaluated/page/${next}`} style={{ visibility: next ? 'visible' : 'hidden' }}>
                <Button
                    variant="contained"
                    color="primary"
                    endIcon={<ArrowForwardIcon />}
                >
                    Next
                </Button>
            </Link>

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
                            {evaluation.submission.title.replaceAll('_', ' ')}
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
                                <Link href={`/round/${evaluation.roundId}/submission/evaluated/${evaluation.evaluationId}?back=${returnTo}`}>
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