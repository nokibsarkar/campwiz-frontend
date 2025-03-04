"use client";
import { Button, CircularProgress, Paper, Typography } from "@mui/material"
import createCampaign from "@/app/campaign/new/action"
import { useCallback, useReducer, useState } from "react";
import { campaignCreateReducer, initialCampaignCreate } from "@/types/campaign/create";
import CampaignEditForm from "@/components/campaign/Campaign";
import ReturnButton from "@/components/ReturnButton";

const CreateCampaign = () => {
    const [campaign, campaignDispatch] = useReducer(campaignCreateReducer, initialCampaignCreate);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const createCampaignClient = useCallback(async () => {
        setLoading(true);
        try {
            setError(null);
            const newCampaign = await createCampaign(campaign);
            console.log(newCampaign);

        } catch (e) {
            console.error(e);
            setError((e as Error).message);
        } finally {
            setLoading(false);
        }
    }, [campaign]);
    return (
        <Paper sx={{ padding: 2, }}>
            <Typography variant="h3" sx={{ mb: 2 }}>
                {loading ? 'Creating Campaign...' : 'Create Campaign'}
            </Typography>
            {error && <Typography variant="body1" color="error">{error}</Typography>}
            <CampaignEditForm {...campaign} loading={loading} dispatch={campaignDispatch} />
            <br />
            <ReturnButton disabled={loading} />
            <Button
                onClick={createCampaignClient}
                variant="contained"
                color="success"
                disabled={loading}
            >
                <CircularProgress size={24} color="inherit" sx={{ display: loading ? 'inline-block' : 'none', mr: 1 }} />
                Create Campaign
            </Button>
        </Paper>
    )
}
export default CreateCampaign