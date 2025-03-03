"use server";

import { CampaignCreate } from "@/types/campaign/create";

const createCampaign = async (campaign: CampaignCreate) => {
    try {
        const res = await fetch('/api/campaigns', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(campaign),
        })
        if (res.ok) {
            alert('Campaign created!')
        } else {
            alert('Failed to create campaign')
        }
    } catch (error) {
        console.error(error)
    }
}
export default createCampaign