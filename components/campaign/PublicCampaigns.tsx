"use client"

import fetchAPIFromBackendSingleWithErrorHandling from "@/server"
import { Campaign } from "@/types"
import useSWR from "swr"
import SingleCampaignChip from "./SingleCampaignChip"
import { Box, Skeleton } from "@mui/material"
import PerCampaignBackground from "@/public/Flat-Shaded-Mountains-Scene.svg"

type PublicRunningCampaignProps = {
    limit: number
}
const PublicRunningCampaigns = ({ limit }: PublicRunningCampaignProps) => {
    const qs = new URLSearchParams({ limit: String(limit), isOpen: 'true', isHidden: 'false' }).toString()
    const { data: publicCampaignResponse, error, isLoading } = useSWR('/campaign/?' + qs.toString(), fetchAPIFromBackendSingleWithErrorHandling<Campaign[]>);
    if (isLoading) return <Skeleton variant="rectangular" width='100%' height={200} sx={{ backgroundColor: 'rgba(0,0,0,0.1)' }} />
    if (error) return <p>Error : {error.message}</p>
    if (!publicCampaignResponse)
        return null;
    if ('detail' in publicCampaignResponse)
        return <p>Error : {error}</p>
    return <Box sx={{
        display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', px: 2,


        backgroundImage: `url(${PerCampaignBackground.src})`,
    }} className="justify-self-auto">
        {(publicCampaignResponse?.data || []).map((v, i) => (
            <SingleCampaignChip campaign={v} key={i} />
        ))}
    </Box>
}
export default PublicRunningCampaigns