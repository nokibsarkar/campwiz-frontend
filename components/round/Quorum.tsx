import GroupsIcon from '@mui/icons-material/Groups';
import Typography from '@mui/material/Typography';
type QuorumProps = {
    quorum: number
}
const Quorum = ({ quorum }: QuorumProps) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'left' }}>
            <GroupsIcon sx={{ display: 'inline-block', mr: 1, }} fontSize="large" />
            <div style={{ display: 'inline-block', }}>
                <Typography variant="h6" sx={{ mb: 0 }} component='div'>
                    Quorum
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, mt: -0.5, }} component='div'>
                    {quorum} jury per submission is required
                </Typography>
            </div>
        </div>
    );
}
export default Quorum