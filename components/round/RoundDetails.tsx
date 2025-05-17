
import { EvaluationType, Round } from "@/types/round"
import Box from "@mui/material/Box";

import Deadline from "./Deadline";
import Description from "./Description";
import Quorum from "./Quorum";
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import JuryList from "./Jury";
import { useMemo } from "react";
import { RoleWithUsername } from "@/types/role";
import LikeDislike from "@mui/icons-material/ThumbUpOffAlt";
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import StarsIcon from '@mui/icons-material/Stars';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import RoundSummary from "./RoundSummary";
import type { TFunction } from "i18next";
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

const RoundDetails = ({ round: c, t }: { round: Round, t: TFunction<string, undefined> }) => {
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
                <RoundSummary c={c} />
                <div>
                    <Deadline deadline={c.endDate} />
                    {roundTypeIcon(c.type)}
                    <Description description={c.description} />
                    <Description description={t('round.evaluatedOutOf', {
                        total: c.totalSubmissions,
                        evaluated: c.totalEvaluatedSubmissions,
                    })} label={t('round.submissions')} Icon={HistoryEduIcon} />
                    {!c.isPublicJury && <Description description={t('round.evaluatedOutOf', {
                        total: c.totalAssignments,
                        evaluated: c.totalEvaluatedAssignments
                    })} label={t('round.assignments')} Icon={HistoryEduIcon} />}
                    <Quorum quorum={c.quorum} />
                </div>
            </Box>
            <JuryList juryList={juryList} isPublicJury={c.isPublicJury} />
        </Box>
    )
}

export default RoundDetails