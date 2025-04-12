"use client"

import fetchAPIFromBackendSingleWithErrorHandling from "@/server"
import { Campaign } from "@/types"
import useSWR from "swr"
import SingleCampaignChip from "./SingleCampaignChip"
import { Box, Skeleton, Typography } from "@mui/material"
import PerCampaignBackground from "@/public/campaign5.svg"
import LoadMoreCampaignChip from "./LoadMoreCampaign"

type AssignedCampaignProps = {
    limit: number
}
const AssignedCampaigns = ({ limit }: AssignedCampaignProps) => {
    const qs = new URLSearchParams({ limit: String(limit), isClosed: 'false', isHidden: 'true', sortOrder: 'desc' }).toString()
    const showAllQs = new URLSearchParams({ limit: String(20), isClosed: 'false', isHidden: 'true' }).toString()
    const { data: publicCampaignResponse, error, isLoading } = useSWR('/campaign/?' + qs.toString(), fetchAPIFromBackendSingleWithErrorHandling<Campaign[]>);
    if (isLoading) return <Skeleton variant="rectangular" width='100%' height={200} />
    if (error) return <p>Error : {error.message}</p>
    if (!publicCampaignResponse)
        return null;
    if ('detail' in publicCampaignResponse)
        return <p>Error : {error}</p>
    return <div className="" style={{
    }}>
        <Typography variant="h4" sx={{
            textAlign: 'center', m: 3,
            // backgroundImage: 'linear-gradient(to right, red 20%,  blue 80%)',
            // color: 'transparent',
            backgroundClip: 'text'
        }} color="error">
            Your Campaigns
        </Typography>
        <Box sx={{
            display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', px: 2,
            backgroundImage: `url(${PerCampaignBackground.src})`,
            backgroundSize: 'contain',
        }} className="justify-self-auto">
            {publicCampaignResponse ? <>
                {(publicCampaignResponse.data || []).map((v, i) => (
                    <SingleCampaignChip campaign={v} key={i} />
                ))}
                <LoadMoreCampaignChip link={"/campaign?" + showAllQs.toString()} />
            </> : <div>
                <p>No Campaigns Assigned</p>
            </div>}
        </Box>
    </div>
}
export default AssignedCampaigns