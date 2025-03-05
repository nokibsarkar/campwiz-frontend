"use client";
import { Button, CircularProgress, Paper, Typography } from "@mui/material"
import createCampaign from "@/app/campaign/new/action"
import { useCallback, useReducer, useState } from "react";
import { campaignCreateReducer, initialCampaignCreate } from "@/types/campaign/create";
import CampaignEditForm from "@/components/campaign/CampaignEditForm";
import FprwardIcon from '@mui/icons-material/ArrowForwardSharp';
import ReturnButton from "@/components/ReturnButton";
import { Campaign } from "@/types";
import Link from "next/link";
import LottieWrapper from "@/components/LottieWrapper";
const CampaignCreationSuccess = (c: Campaign) => {
    return (
        <Paper sx={{ padding: 2, textAlign: 'center' }}>
            <LottieWrapper src='/success.lottie' />
            <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
                Campaign Created Successfully
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 2, textAlign: 'center' }}>
                Campaign {c.name} has been created with id <b>{c.campaignId}</b>
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 2, textAlign: 'center' }}>
                Now, would you like to create a round for this campaign?
                Your organizers can create rounds for this campaign, too.
                Please Let them know the details.
            </Typography>
            <Link href={`/campaign/${c.campaignId}/round/new`}>
                <Button variant="contained" color="success" endIcon={<FprwardIcon />}>
                    Create Round for Campaign
                </Button>
            </Link>
        </Paper>
    )
}
const CreateCampaign = () => {
    const [campaign, campaignDispatch] = useReducer(campaignCreateReducer, initialCampaignCreate);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [createdCampaign, setCreatedCampaign] = useState<Campaign | null>(null);
    const createCampaignClient = useCallback(async () => {
        setLoading(true);
        try {
            setError(null);
            const newCampaign = await createCampaign(campaign);
            console.log(newCampaign);
            setCreatedCampaign(newCampaign as Campaign);
        } catch (e) {
            console.error(e);
            setError((e as Error).message);
        } finally {
            setLoading(false);
        }
    }, [campaign]);
    return (
        createdCampaign ? <CampaignCreationSuccess {...createdCampaign} /> :
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