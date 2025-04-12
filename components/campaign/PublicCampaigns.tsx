"use client"

import fetchAPIFromBackendSingleWithErrorHandling from "@/server"
import { Campaign } from "@/types"
import useSWR from "swr"
import SingleCampaignChip from "./SingleCampaignChip"
import Skeleton from "@mui/material/Skeleton"
import PerCampaignBackground from "@/public/campaign5.svg"

type PublicRunningCampaignProps = {
    limit: number
}
const PublicRunningCampaigns = ({ limit }: PublicRunningCampaignProps) => {
    const qs = new URLSearchParams({ limit: String(limit), isClosed: 'false', isHidden: 'false', 'sortOrder': 'desc' }).toString()
    const { data: publicCampaignResponse, error, isLoading } = useSWR('/campaign/?' + qs.toString(), fetchAPIFromBackendSingleWithErrorHandling<Campaign[]>);

    if (isLoading) return <Skeleton variant="rectangular" width='100%' height={200} sx={{ backgroundColor: 'rgba(0,0,0,0.1)' }} />
    if (error) return <p>Error : {error.message}</p>
    if (!publicCampaignResponse)
        return null;
    if ('detail' in publicCampaignResponse)
        return <p>Error : {error}</p>
    const campaigns = publicCampaignResponse.data.toSorted((a, b) => a.campaignId.localeCompare(b.campaignId));
    return campaigns.length > 0 ? <div style={{
        display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap',
        backgroundImage: `url(${PerCampaignBackground.src})`,
        backgroundSize: 'contain',
    }} className="justify-self-auto px-2">
        {campaigns.map(v => <SingleCampaignChip campaign={v} key={v.campaignId} />)}
    </div>
        : <div className="justify-self-auto p-1 mb-2 block text-center">
            <h3 className="text-2xl font-bold">No Running Campaigns</h3>
        </div>
}
export default PublicRunningCampaigns