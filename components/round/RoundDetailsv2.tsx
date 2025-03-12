
import type { Round } from "@/types/round"
import Box from "@mui/material/Box";

import Deadline from "./Deadline";
import Description from "./Description";
import Quorum from "./Quorum";
import JuryList from "./Jury";
import CircularProgressWithLabel from "./CircularProgressWithLabel";

const RoundDetails = ({ round: c }: { round: Round }) => {
    return (
        <Box sx={{
            textAlign: 'left',
            mx: 'auto',
            display: 'inline-block',
            width: 'fit-content',
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
                <CircularProgressWithLabel value={100} size='10em' color='success' />
                <div>
                    <Deadline deadline={c.endDate} />
                    <Description description={c.description} />
                    <Quorum quorum={20} />
                </div>

            </Box>
            <JuryList juryList={[
                {
                    UserID: '1',
                    Username: 'User1 Useskjhsgb shgja nk ksjhks ksjhksk khjksh jshkkks kjhkjs',
                    Type: 'Evaluator',
                    CampaignID: '1',
                    RoundID: '1',
                    IsAllowed: true,
                    RoleID: '1',
                    TotalAssigned: 20,
                    TotalEvaluated: 13,
                    TotalScore: 0,
                },
                {
                    UserID: '1',
                    Username: 'User1 Useskjhsgb shgja nk ksjhks ksjhksk khjksh jshkkks kjhkjs',
                    Type: 'Evaluator',
                    CampaignID: '1',
                    RoundID: '1',
                    IsAllowed: true,
                    RoleID: '1',
                    TotalAssigned: 20,
                    TotalEvaluated: 13,
                    TotalScore: 0,
                },
                {
                    UserID: '1',
                    Username: 'User1 Useskjhsgb shgja nk ksjhks ksjhksk khjksh jshkkks kjhkjs',
                    Type: 'Evaluator',
                    CampaignID: '1',
                    RoundID: '1',
                    IsAllowed: true,
                    RoleID: '1',
                    TotalAssigned: 20,
                    TotalEvaluated: 13,
                    TotalScore: 0,
                },
                {
                    UserID: '1',
                    Username: 'User1Useskjhsgb shgja nk ksjhks ksjhksk khjksh jshkkks kjhkjs',
                    Type: 'Evaluator',
                    CampaignID: '1',
                    RoundID: '1',
                    IsAllowed: true,
                    RoleID: '1',
                    TotalAssigned: 20,
                    TotalEvaluated: 13,
                    TotalScore: 0,
                },
                {
                    UserID: '1',
                    Username: 'Useskjhsgb shgja nk ksjhks ksjhksk khjksh jshkkks kjhkjs',
                    Type: 'Evaluator',
                    CampaignID: '1',
                    RoundID: '1',
                    IsAllowed: true,
                    RoleID: '1',
                    TotalAssigned: 20,
                    TotalEvaluated: 13,
                    TotalScore: 0,
                },
                {
                    UserID: '1',
                    Username: 'Guidelines skjhsgb shgja nk ksjhks ksjhksk khjksh jshkkks kjhkjs',
                    Type: 'Evaluator',
                    CampaignID: '1',
                    RoundID: '1',
                    IsAllowed: true,
                    RoleID: '1',
                    TotalAssigned: 1000,
                    TotalEvaluated: 999,
                    TotalScore: 0,
                }
            ]} />
        </Box>
    )
}

export default RoundDetails