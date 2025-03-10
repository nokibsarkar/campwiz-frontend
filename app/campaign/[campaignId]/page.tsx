import fetchAPIFromBackendSingleWithErrorHandling from "@/server";
import ActualViewPage from "./_page";
import { Campaign } from "@/types";

type CampaignViewPageProps = {
    params: Promise<{
        campaignId: string
    }>
};
const CampaignViewPage = async ({ params }: CampaignViewPageProps) => {
    const { campaignId } = await params;
    const qs = new URLSearchParams();
    qs.append('includeRoles', 'true');
    qs.append('includeProject', 'true');
    qs.append('includeRounds', 'true');
    const campaignResponse = await fetchAPIFromBackendSingleWithErrorHandling<Campaign>(`/campaign/${campaignId}/?${qs.toString()}`);
    if (!campaignResponse) {
        return null;
    }
    if ('detail' in campaignResponse) {
        return <p>Error : {campaignResponse.detail}</p>
    }
    const campaign = campaignResponse.data;
    return (
        <ActualViewPage campaign={campaign} />
    );
};
export default CampaignViewPage;