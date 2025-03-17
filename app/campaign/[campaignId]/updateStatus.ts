"use server";
import fetchAPIFromBackendSingleWithErrorHandling from "@/server";
import { Round } from "@/types/round";
import { RoundStatus } from "@/types/round/status"

export const updateroundStatus = async (roundId: string, status: RoundStatus) => {
    const data = { status }
    const response = await fetchAPIFromBackendSingleWithErrorHandling<Round>(`/round/${roundId}/status`, {
        method: 'POST',
        body: JSON.stringify(data)
    })
    return response
}
export const UpdateCampaignStatus = async (campaignId: string, status: RoundStatus) => {
    const data = { status }
    const response = await fetchAPIFromBackendSingleWithErrorHandling<Round>(`/campaign/${campaignId}/status`, {
        method: 'POST',
        body: JSON.stringify(data)
    })
    return response
}

