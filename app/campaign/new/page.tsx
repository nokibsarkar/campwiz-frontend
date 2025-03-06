"use client";
import { Button, CircularProgress, Paper, Typography } from "@mui/material"
import createCampaign from "@/app/campaign/new/action"
import { lazy, useReducer, useState } from "react";
import { campaignCreateReducer, initialCampaignCreate } from "@/types/campaign/create";
import CampaignEditForm from "@/components/campaign/CampaignEditForm";
import ReturnButton from "@/components/ReturnButton";
import { Campaign } from "@/types";
import useSWRMutation from "swr/mutation";
import LoadingPopup from "@/components/LoadingPopup";
const CampaignCreationSuccess = lazy(() => import('@/app/campaign/new/success'));

const CreateCampaign_ = () => {
    const [error, setError] = useState<Error | null>(null);
    const [campaign, campaignDispatch] = useReducer(campaignCreateReducer, initialCampaignCreate);
    const { data: createdCampaign = null, trigger, isMutating: loading } = useSWRMutation<Campaign | undefined>('/api/campaign', createCampaign.bind(null, campaign), {
        onError: setError,
    });
    return (
        createdCampaign ? <CampaignCreationSuccess {...createdCampaign} /> :
            <Paper sx={{ padding: 2, }}>
                <Typography variant="h3" sx={{ mb: 2 }}>
                    {loading ? 'Creating Campaign...' : 'Create Campaign'}
                </Typography>
                {loading && <LoadingPopup src="/creating.lottie" />}
                {error && <Typography variant="body1" color="error">{error.message}</Typography>}
                <CampaignEditForm {...campaign} loading={loading} dispatch={campaignDispatch} />
                <br />
                <ReturnButton disabled={loading} />
                <Button
                    onClick={() => trigger().catch(setError)}
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
export default CreateCampaign_