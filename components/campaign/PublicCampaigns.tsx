"use client"

import fetchAPIFromBackendSingleWithErrorHandling from "@/server"
import { Campaign } from "@/types"
import useSWR from "swr"
import SingleCampaignChip from "./SingleCampaignChip"
import { Box, Skeleton, Typography } from "@mui/material"
import PerCampaignBackground from "@/public/Flat-Shaded-Mountains-Scene.svg"

type PublicRunningCampaignProps = {
    limit: number
}
const PublicRunningCampaigns = ({ }: PublicRunningCampaignProps) => {
    const { data: publicCampaignResponse, error, isLoading } = useSWR('/campaign/', fetchAPIFromBackendSingleWithErrorHandling<Campaign[]>);
    if (isLoading) return <Skeleton variant="rectangular" width={400} height={200} />
    if (error) return <p>Error : {error.message}</p>
    if (!publicCampaignResponse)
        return null;
    if ('detail' in publicCampaignResponse)
        return <p>Error : {error}</p>
    return <div className="" style={{

    }}>
        <Typography variant="h4" sx={{
            textAlign: 'center', m: 3,
            backgroundImage: 'linear-gradient(to right, red 20%,  blue 80%)',
            color: 'transparent',
            backgroundClip: 'text'
        }}>
            Public Running Campaigns
        </Typography>
        <Box sx={{
            display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', px: 2,


            backgroundImage: `url(${PerCampaignBackground.src})`,
        }} className="justify-self-auto">
            {(publicCampaignResponse?.data || []).map((v, i) => (
                <SingleCampaignChip campaign={v} key={i} />
            ))}
        </Box>
    </div>
}
export default PublicRunningCampaigns