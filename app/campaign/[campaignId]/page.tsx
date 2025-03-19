"use server";
import fetchAPIFromBackendSingleWithErrorHandling from "@/server";
import fetchSession from "@/server/session";
import { Campaign, WikimediaUsername } from "@/types";
import { Chip, Paper, Typography } from "@mui/material";
import RoundTimeline from "./roundTimeline";
// import DeleteIcon from '@mui/icons-material/Delete';
import Logo from "@/components/Logo";
import EditButton from "./EditButton";

type CampaignViewPageProps = {
    params: Promise<{
        campaignId: string
    }>
};
const CampaignViewPage = async ({ params }: CampaignViewPageProps) => {
    const session = await fetchSession();
    const { campaignId } = await params;
    const qs = new URLSearchParams();
    qs.append('includeRoles', 'true');
    qs.append('includeProject', 'true');
    qs.append('includeRounds', 'true');
    qs.append('includeRoundRoles', 'true');
    const campaignResponse = await fetchAPIFromBackendSingleWithErrorHandling<Campaign>(`/campaign/${campaignId}/?${qs.toString()}`);
    if (!campaignResponse) {
        return null;
    }
    if ('detail' in campaignResponse) {
        return <p>Error : {campaignResponse.detail}</p>
    }
    const campaign = campaignResponse.data;
    console.log(campaign.coordinators, session?.username, campaign.coordinators?.includes(session?.username || ''))
    return (
        <Paper sx={{ p: 2, m: 2 }}>
            <Logo />
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Typography variant="h2">
                    {campaign.name}
                    <Typography variant="subtitle1" color="textDisabled" component='b' sx={{ display: 'inline' }}>({campaign.campaignId})</Typography>
                </Typography>
                <div>
                    {session?.projectId === campaign.projectId && (
                        <EditButton campaignId={campaign.campaignId} />
                    )}
                </div>
            </div>
            <Typography variant="subtitle1">
                {new Date(campaign.startDate).toUTCString()} - {new Date(campaign.endDate).toUTCString()}
            </Typography>
            <Typography variant="body1">
                {campaign.description}
            </Typography>
            <CoordinatorList coordinators={campaign.coordinators} />
            <br />
            <RoundTimeline rounds={campaign.rounds} campaign={campaign} session={session}
                isCoordinator={campaign.coordinators?.includes(session?.username || '') === true}
            />

        </Paper>
    );
};
const CoordinatorList = ({ coordinators }: { coordinators: WikimediaUsername[] | null }) => {
    if (!coordinators) return <Typography variant="h4">No coordinators</Typography>
    return (
        <Typography variant="h6">
            Coordinators: &nbsp;
            {coordinators.map((c, i) => (
                <Chip key={i} label={c} sx={{ m: 0.5 }} />
            ))}
        </Typography>
    )
}
export default CampaignViewPage;