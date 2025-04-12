"use client"
import SingleCampaignChip from "@/components/campaign/SingleCampaignChip"
import fetchAPIFromBackendSingleWithErrorHandling from "@/server"
import { Campaign } from "@/types"
import { Skeleton } from "@mui/material"
import useSWR from "swr"
type CListProps = {
    campaigns: Campaign[]
    limit: number
    isClosed?: boolean
    isHidden?: boolean
    sortOrder: string
    projectId?: string
}
export const formQs = (isClosed: boolean | undefined, isHidden: boolean | undefined, limit: number, sortOrder: string, projectId?: string) => {
    const searchParams = new URLSearchParams();
    if (limit !== 0) {
        searchParams.set('limit', String(limit));
    }
    if (isClosed !== undefined) {
        searchParams.set('isClosed', String(isClosed));
    }
    if (isHidden !== undefined) {
        searchParams.set('isHidden', String(isHidden));
    }
    if (sortOrder !== undefined) {
        searchParams.set('sortOrder', sortOrder);
    }
    if (projectId !== undefined) {
        searchParams.set('projectId', projectId);
    }
    return searchParams.toString();
}
const CList = ({ isClosed, isHidden, limit, sortOrder, projectId }: CListProps) => {
    "use client"
    const qs = formQs(isClosed, isHidden, limit, sortOrder, projectId);
    console.log('qs', qs);
    const { data: campaignResponse, error, isLoading } = useSWR('/campaign/?' + qs, fetchAPIFromBackendSingleWithErrorHandling<Campaign[]>);
    if (isLoading) return <Skeleton variant="rectangular" width='100%' height={200} />
    if (error) return <p>Error : {error.message}</p>
    if (!campaignResponse)
        return null;
    if ('detail' in campaignResponse)
        return <p>Error : {error}</p>
    const campaigns = campaignResponse.data;
    return campaigns.map((campaign) => (
        <SingleCampaignChip
            campaign={campaign}
            key={campaign.campaignId}
        />
    ))
}
export default CList