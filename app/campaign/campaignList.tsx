"use client"
import SingleCampaignChip from "@/components/campaign/SingleCampaignChip"
import fetchAPIFromBackendSingleWithErrorHandling from "@/server"
import { Campaign } from "@/types"
import { Skeleton } from "@mui/material"
import { useEffect, useState } from "react"
import useSWR from "swr"
type CListProps = {
    campaigns: Campaign[]
    limit: number
    isClosed: boolean
    isHidden: boolean
    sortOrder: string
}
const CList = ({ campaigns: initialCampaigns, isClosed, isHidden, limit, sortOrder }: CListProps) => {
    const [qs, setQs] = useState(new URLSearchParams({ limit: String(limit), isClosed: String(isClosed), isHidden: String(isHidden), sortOrder: sortOrder }).toString());
    const [campaigns, setCampaigns] = useState<Campaign[]>(initialCampaigns || []);
    const { data: campaignResponse, error, isLoading, mutate: loadCamps } = useSWR('/campaign/?' + qs, fetchAPIFromBackendSingleWithErrorHandling<Campaign[]>);
    useEffect(() => {
        const qs = new URLSearchParams({ limit: String(limit), isClosed: String(isClosed), isHidden: String(isHidden), sortOrder: sortOrder }).toString();
        setQs(qs);
        loadCamps();
    }, [isClosed, isHidden, limit, loadCamps, sortOrder]);
    useEffect(() => {
        if (campaignResponse) {
            if ('detail' in campaignResponse) {
                setCampaigns([]);
            } else {
                setCampaigns(campaignResponse.data);
            }
        }
    }, [campaignResponse]);
    if (isLoading) return <Skeleton variant="rectangular" width='100%' height={200} />
    if (error) return <p>Error : {error.message}</p>
    if (!campaignResponse)
        return null;
    if ('detail' in campaignResponse)
        return <p>Error : {error}</p>
    return campaigns.map((campaign) => (
        <SingleCampaignChip
            campaign={campaign}
            key={campaign.campaignId}
        />
    ))
}
export default CList