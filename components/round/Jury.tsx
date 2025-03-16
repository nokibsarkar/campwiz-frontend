import { RoleWithUsername } from "@/types/role";
import GavelIcon from '@mui/icons-material/Gavel';
import { Box, Typography } from "@mui/material";
import AccountIcon from '@mui/icons-material/AccountCircle';
const Jury = ({ jury }: { jury: RoleWithUsername }) => {
    const progress = jury.totalAssigned > 0 ? Math.floor(jury.totalEvaluated / jury.totalAssigned * 100) : 0;
    return (
        <Box sx={{
            padding: 3, margin: 1, border: '1px solid #e0e0e0', borderRadius: 7,
            position: 'relative',
            width: {
                xs: '100%',
                sm: 'calc(50% - 20px)',
                md: 'calc(33% - 20px)',
                lg: 'calc(25% - 20px)',
                xl: 'calc(20% - 20px)',
            }
        }}>
            <Typography variant="h6" sx={{ mb: 0 }} component='div'>
                <AccountIcon sx={{ display: 'inline-block', mr: 1, }} fontSize="large" />
                {jury.username}
            </Typography>
            <Typography variant="h4" sx={{ mb: 2, mt: 1, textAlign: 'center' }} component='div'>
                {progress}%
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, mt: -0.5, }} component='div'>
                {jury.totalAssigned} assigned
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, mt: -0.5, }} component='div'>
                {jury.totalEvaluated} evaluated
            </Typography>

        </ Box>
    );
}
const JuryList = ({ juryList }: { juryList: RoleWithUsername[] }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'left', position: 'relative', width: '100%' }}>
            <GavelIcon sx={{ display: 'inline-block', mr: 1, }} fontSize="large" />
            <div style={{ width: '100%' }}>
                <Typography variant="h6" sx={{ mb: 0 }} component='div'>
                    Jury
                </Typography>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'left', flexWrap: 'wrap', width: '100%' }}>
                    {juryList.map((jury, i) => (
                        <Jury key={i} jury={jury} />
                    ))}
                </div>
            </div>
        </div>
    );
}
export default JuryList