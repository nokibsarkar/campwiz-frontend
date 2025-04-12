"use server"
import { fetchAPIFromBackendListWithErrorHandling } from "@/server";
import { Campaign, ResponseError } from "@/types";

const LoadCampaigns = async (path: string, qs: string) => {
    const url = path + '?' + qs;
    const campaignListResponse = await fetchAPIFromBackendListWithErrorHandling<Campaign>(url);
    if (!campaignListResponse) {
        return null
    }
    if ('detail' in campaignListResponse) {
        return campaignListResponse as ResponseError
    }
    return campaignListResponse.data;
}
export default LoadCampaigns;