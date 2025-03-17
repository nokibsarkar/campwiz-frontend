"use server";
import { Campaign, WikimediaUsername } from "@/types";
import { Chip, Paper, Typography } from "@mui/material";
import RoundTimeline from "./roundTimeline";

type CampaignViewPageProps = {
    campaign: Campaign
};

const ActualViewPage = ({ campaign }: CampaignViewPageProps) => {
    return (
        <Paper sx={{ p: 2, m: 2 }}>
            <Typography variant="h2">
                {campaign.name} <Typography variant="subtitle1" color="textDisabled" component='b' sx={{ display: 'inline' }}>({campaign.campaignId})</Typography>
            </Typography>
            <Typography variant="subtitle1">
                {new Date(campaign.startDate).toUTCString()} - {new Date(campaign.endDate).toUTCString()}
            </Typography>
            <Typography variant="body1">
                {campaign.description}
            </Typography>
            <CoordinatorList coordinators={campaign.coordinators} />
            <br />
            <RoundTimeline rounds={campaign.rounds} campaign={campaign} />

        </Paper>
    );
}
const CoordinatorList = ({ coordinators }: { coordinators: WikimediaUsername[] | null }) => {
    if (!coordinators) return <Typography variant="h4">No coordinators</Typography>
    return (
        <Typography variant="h6">
            Coordinators: &nbsp;
            {coordinators.map((c, i) => (
                <Chip key={i} label={c} />
            ))}
        </Typography>
    )
}
export default ActualViewPage;