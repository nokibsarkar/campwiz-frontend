"use server";
import fetchAPIFromBackendSingleWithErrorHandling from "@/server";
import fetchSession from "@/server/session";
import { Campaign, WikimediaUsername } from "@/types";
import { Chip, Paper, Typography } from "@mui/material";
import RoundTimeline from "./roundTimeline";
import DateRangeIcon from '@mui/icons-material/DateRange'
import RuleIcon from '@mui/icons-material/Rule';
import EditButton from "./EditButton";
import Description from "@/components/round/Description";
import Header from "@/components/home/Header";

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
    return (
        <>
            <Header returnTo="/" />
            <Paper sx={{
                p: {
                    xs: 1,
                    sm: 2
                },
                m: 1,
            }}>
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
                <br />
                <Description
                    description={`${new Date(campaign.startDate).toDateString()} - ${new Date(campaign.endDate).toDateString()}`}
                    label="Duration" Icon={DateRangeIcon}
                />
                <Description description={campaign.description} label="Description" />
                <Description description={campaign.rules} label="Rules" Icon={RuleIcon} />
                <CoordinatorList coordinators={campaign.coordinators} />
                <br />
                <RoundTimeline rounds={campaign.rounds} campaign={campaign} session={session}
                    isCoordinator={campaign.coordinators?.includes(session?.username || '') === true}
                />

            </Paper>
        </>
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