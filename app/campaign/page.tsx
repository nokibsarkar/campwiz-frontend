
import Header from "@/components/home/Header";
import { fetchAPIFromBackendListWithErrorHandling } from "@/server";
import { Campaign } from "@/types";
import CampaignList from "./_page";

const CampaignListPage = async () => {
    const qs = new URLSearchParams();
    const campaignListResponse = await fetchAPIFromBackendListWithErrorHandling<Campaign>(`/campaign/?${qs.toString()}`);
    if (!campaignListResponse) {
        return <div>Failed to fetch campaigns</div>
    }
    if ('detail' in campaignListResponse) {
        return <div>{campaignListResponse.detail}</div>
    }
    return (
        <>
            <Header returnTo="/" />
            <CampaignList initialCampaigns={campaignListResponse.data} />
        </>
    );
}
export default CampaignListPage;