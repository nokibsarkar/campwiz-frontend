"use client"
import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, Table, TableBody, TableCell, TableFooter, TableHead, TableRow } from "@mui/material";
import fetchRoundResults from "@/app/campaign/[campaignId]/round/import/round/fetchRoundSummary";
import useSWR from "swr";
import { ResponseList } from "@/types";
import CloseIcon from '@mui/icons-material/Close';
import CircularProgressWithLabel from "./CircularProgressWithLabel";
import { useState } from "react";
import { Round, SubmissionResultSummary } from "@/types/round";
import SummaryIcon from '@mui/icons-material/Assessment';

const RoundSummaryDialog = ({ round: c, onClose }: { round: Round, onClose: () => void }) => {
    const { data: summaryResponse, isLoading, error } = useSWR(`/round/${c.roundId}/results/summary`, fetchRoundResults, {
        revalidateOnFocus: true,
        revalidateOnReconnect: true,
        revalidateOnMount: true,
    })
    return <Dialog open onClose={onClose} fullWidth>
        <DialogTitle>
            Round Summary
        </DialogTitle>

        <DialogContent>
            {isLoading && <CircularProgress size={24} />}
            {error && <p className="text-red-500">Error: {error.message}</p>}
            {summaryResponse && !isLoading && !error && (
                ('details' in summaryResponse) ? <p className="text-red-500">Error: {summaryResponse.details as string}</p> :
                    <Table>
                        <caption>
                            * If there is two &apos;0&lsquo; (zero ) is mentioned on the Average Score column, the last zero means Unevaluated Submissions
                        </caption>
                        <TableHead>
                            <TableRow>
                                <TableCell>Average Score
                                    <b className="font-bold">*</b>
                                </TableCell>
                                <TableCell>Submission Count</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(summaryResponse as ResponseList<SubmissionResultSummary & { cumulative: number; }>).data.map((row: { averageScore: number, submissionCount: number }, index: number) => (
                                <TableRow key={index}>
                                    <TableCell>{row.averageScore}</TableCell>
                                    <TableCell>{row.submissionCount}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>

                        </TableFooter>
                    </Table>
            )}
        </DialogContent>
        <DialogActions>
            <Button onClick={onClose} variant="outlined" color="error" disabled={isLoading} startIcon={<CloseIcon />}>
                Close Dialog
            </Button>
        </DialogActions>
    </Dialog>
}
const RoundSummary = ({ c }: { c: Round }) => {
    const [showSummaryOpen, setShowSummaryOpen] = useState(false);
    const { totalSubmissions, totalEvaluatedSubmissions } = c
    const progress = totalSubmissions > 0 ? Math.floor(totalEvaluatedSubmissions / totalSubmissions * 100) : 0;
    return <div className="round-progress flex flex-col items-center">
        <CircularProgressWithLabel value={progress} size='10em' color='success' /><br />
        <Button variant="contained"
            onClick={() => setShowSummaryOpen(true)}
            color="success" size="large" sx={{ borderRadius: 2, px: 2, my: 'auto' }} startIcon={<SummaryIcon />}>
            Summary
        </Button>
        {showSummaryOpen && <RoundSummaryDialog round={c} onClose={() => setShowSummaryOpen(false)} />}
    </div>
}
export default RoundSummary;