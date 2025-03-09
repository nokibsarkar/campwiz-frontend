// "use server";

import fetchAPIFromBackendSingleWithErrorHandling from "@/server";
import { Campaign } from "@/types";
import { CampaignCreate } from "@/types/campaign/create";

const createCampaign = async (campaign: CampaignCreate) => {
    if (campaign.name === '') {
        throw new Error('Campaign name cannot be empty')
    }
    if (campaign.description === '') {
        throw new Error('Campaign description cannot be empty')
    }
    if (campaign.startDate === '') {
        throw new Error('Campaign start date cannot be empty')
    }
    if (campaign.endDate === '') {
        throw new Error('Campaign end date cannot be empty')
    }
    if (campaign.coordinators.length === 0) {
        throw new Error('At least one coordinator is required')
    }
    if (campaign.language === '') {
        throw new Error('You must select a language. If it is wikimedia Commons, select "commons"')
    }
    const res = await fetchAPIFromBackendSingleWithErrorHandling<Campaign>('/campaign/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(campaign),
    })
    if ('detail' in res) {
        throw new Error(res.detail)
    }
    return res.data
}
export default createCampaign