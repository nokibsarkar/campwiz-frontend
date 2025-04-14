
import { EvaluationType, Round, SubmissionResultSummary } from "@/types/round"
import Box from "@mui/material/Box";

import Deadline from "./Deadline";
import Description from "./Description";
import Quorum from "./Quorum";
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import JuryList from "./Jury";
import CircularProgressWithLabel from "./CircularProgressWithLabel";
import { useMemo, useState } from "react";
import { RoleWithUsername } from "@/types/role";
import LikeDislike from "@mui/icons-material/ThumbUpOffAlt";
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import StarsIcon from '@mui/icons-material/Stars';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import SummaryIcon from '@mui/icons-material/Assignment';
import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import fetchRoundResults from "@/app/campaign/[campaignId]/round/import/round/fetchRoundSummary";
import useSWR from "swr";
import { ResponseList } from "@/types";
import CloseIcon from '@mui/icons-material/Close';
const roundTypeIcon = (type: EvaluationType) => {
    switch (type) {
        case EvaluationType.BINARY:
            return <Description description='Yes/No' label="Type" Icon={LikeDislike} />
        case EvaluationType.RANKING:
            return <Description description='Ranking' label="Type" Icon={MilitaryTechIcon} />
        case EvaluationType.SCORE:
            return <Description description='Rating' label="Type" Icon={StarsIcon} />
        default:
            return <Description description='Unknown, contact us' label="Type" Icon={QuestionMarkIcon} />
    }
}
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
                        <TableHead>
                            <TableRow>
                                <TableCell>Average Score</TableCell>
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
const RoundDetails = ({ round: c }: { round: Round }) => {
    const [juryList,] = useMemo(() => {
        if (!c.jury || !c.roles) {
            return [[], 0, 0]
        }
        const id2UsernameMap = c.jury;
        let totalAssigned = 0
        let totalEvaluated = 0
        const juryList: RoleWithUsername[] = []
        for (const role of c.roles) {
            const username = id2UsernameMap[role.userId]
            if (username) {
                juryList.push({ ...role, username: username })
            }
            totalAssigned += role.totalAssigned
            totalEvaluated += role.totalEvaluated
        }
        return [juryList, totalAssigned, totalEvaluated]

    }, [c])
    const [showSummaryOpen, setShowSummaryOpen] = useState(false)
    const { totalSubmissions, totalEvaluatedSubmissions } = c
    const progress = totalSubmissions > 0 ? Math.floor(totalEvaluatedSubmissions / totalSubmissions * 100) : 0;
    return (
        <Box sx={{
            textAlign: 'left',
            mx: 'auto',
            display: 'inline-block',
            minWidth: 300,
            width: '100%',
            p: 2,
            border: 1,
            borderColor: 'primary.main',
            borderRadius: 6,
        }} >
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row-reverse' },
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <div className="round-progress flex flex-col items-center">
                    <CircularProgressWithLabel value={progress} size='10em' color='success' /><br />
                    <Button variant="contained"
                        onClick={() => setShowSummaryOpen(true)}
                        color="success" size="large" sx={{ borderRadius: 2, px: 2, my: 'auto' }} startIcon={<SummaryIcon />}>
                        Summary
                    </Button>
                    {showSummaryOpen && <RoundSummaryDialog round={c} onClose={() => setShowSummaryOpen(false)} />}
                </div>
                <div>
                    <Deadline deadline={c.endDate} />
                    {roundTypeIcon(c.type)}
                    <Description description={c.description} />
                    <Description description={`${c.totalEvaluatedSubmissions} evaluated out of ${c.totalSubmissions}`} label='Submissions' Icon={HistoryEduIcon} />
                    {!c.isPublicJury && <Description description={`${c.totalEvaluatedAssignments} evaluated out of ${c.totalAssignments}`} label='Assignments' Icon={HistoryEduIcon} />}
                    <Quorum quorum={c.quorum} />
                </div>
            </Box>
            <JuryList juryList={juryList} isPublicJury={c.isPublicJury} />
        </Box>
    )
}

export default RoundDetails