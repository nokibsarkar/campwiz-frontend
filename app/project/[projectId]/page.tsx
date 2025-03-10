import PublicRunningCampaigns from "@/components/campaign/PublicCampaigns";
import { Paper } from "@mui/material";
import '@/App.css'

import festivalBackground from '@/public/tanabataremix.svg';
/**
* This page would be the default dashboard for any Project Lead.
* He would be see the project he is leading, all the running campaigns and the status of the campaigns.
* He would also be able to create new campaigns.
 */
const ProjectDashboard = () => {
    return (
        <Paper sx={{
            // backgroundImage: `url(${festivalBackground.src})`,
            backgroundSize: 'contain',
            zIndex: -1,
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: 'auto',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
        }}>
            <h1>Project Dashboard for async </h1>
            <PublicRunningCampaigns limit={12} />
        </Paper>
    );
}
export default ProjectDashboard;