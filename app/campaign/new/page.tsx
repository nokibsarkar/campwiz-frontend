"use client";
import { Button, Paper, Typography } from "@mui/material"
import createCampaign from "@/app/campaign/new/action"
import { useReducer } from "react";
import { campaignCreateReducer, initialCampaignCreate } from "@/types/campaign/create";
import CampaignEditForm from "@/components/campaign/Campaign";
import ReturnButton from "@/components/ReturnButton";

const CreateCampaign = () => {
    const [campaign, campaignDispatch] = useReducer(campaignCreateReducer, initialCampaignCreate);
    return (
        <Paper sx={{ padding: 2, }}>
            <Typography variant="h3" sx={{ mb: 2 }}>
                Create Campaign
            </Typography>
            <Typography variant="subtitle1">
                Create a new campaign by filling out the form below.
            </Typography>
            <CampaignEditForm {...campaign} dispatch={campaignDispatch} />

            <ReturnButton />
            <Button
                onClick={() => createCampaign(campaign)}
                variant="contained"
                color="success"
            >
                Create Campaign
            </Button>
        </Paper>
    )
}
export default CreateCampaign