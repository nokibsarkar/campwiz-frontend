
import type { Round } from "@/types/round"
import Box from "@mui/material/Box";

import Deadline from "./Deadline";
import Description from "./Description";
import Quorum from "./Quorum";
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import JuryList from "./Jury";
import CircularProgressWithLabel from "./CircularProgressWithLabel";
import { useMemo } from "react";
import { RoleWithUsername } from "@/types/role";


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
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row-reverse' },
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <CircularProgressWithLabel value={progress} size='10em' color='success' />
                <div>
                    <Deadline deadline={c.endDate} />
                    <Description description={c.description} />
                    <Description description={`${c.totalEvaluatedSubmissions} evaluated out of ${c.totalSubmissions}`} label='Submissions' Icon={HistoryEduIcon} />
                    <Description description={`${c.totalEvaluatedAssignments} evaluated out of ${c.totalAssignments}`} label='Assignments' Icon={HistoryEduIcon} />
                    <Quorum quorum={c.quorum} />
                </div>
            </Box>
            <JuryList juryList={juryList} />
        </Box>
    )
}

export default RoundDetails