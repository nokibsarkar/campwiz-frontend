"use server";

import fetchAPIFromBackendSingleWithErrorHandling from "@/server";
import { Campaign } from "@/types";
import { CampaignCreate } from "@/types/campaign/create";

const createCampaign = async (campaign: CampaignCreate) => {
    try {
        const res = await fetchAPIFromBackendSingleWithErrorHandling<Campaign>('/campaign/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(campaign),
        })
        if ('detail' in res) {
            console.error(res.detail)
            throw new Error(res.detail)
        } else {
            console.log(res)
        }
        return res.data
    } catch (error) {
        console.error(error)
    }
}
export default createCampaign