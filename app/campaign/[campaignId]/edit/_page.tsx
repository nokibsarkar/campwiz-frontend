"use client";
import { Button, Paper, Typography } from "@mui/material"
import { lazy, useReducer, useState } from "react";
import { campaignReducer, CampaignUpdate } from "@/types/campaign/create";
import CampaignEditForm from "@/components/campaign/CampaignEditForm";
import ReturnButton from "@/components/ReturnButton";
import { Campaign } from "@/types";
import useSWRMutation from "swr/mutation";
import LoadingPopup from "@/components/LoadingPopup";
import LoginBackground from "@/public/snowy-hill.svg";
import Logo from "@/components/Logo";
import SaveIcon from '@mui/icons-material/Save';
import updateCampaign from "./action";
const CampaignCreationSuccess = lazy(() => import('@/app/project/[projectId]/new/success'));

const EditCampaign = ({ initialCampaign }: { initialCampaign: CampaignUpdate }) => {
    const [error, setError] = useState<Error | null>(null);
    const [campaign, campaignDispatch] = useReducer(campaignReducer, initialCampaign);
    const { data: updatedCampaign = null, trigger, isMutating: loading } = useSWRMutation<Campaign | undefined>(`/api/campaign/${initialCampaign.campaignId}`, updateCampaign.bind(null, campaign as CampaignUpdate), {
        onError: setError,
    });
    return (
        <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex',
            justifyContent: 'center', alignItems: 'center',
            backgroundImage: `url(${LoginBackground.src})`,
            backgroundSize: 'cover',
        }}>
            <div style={{
                position: 'relative', width: '100%', height: '100%', display: 'flex',
                backgroundColor: 'rgba(255,255,255,0.4)',
                justifyContent: 'center', alignItems: 'center'
            }}>
                {updatedCampaign ? <CampaignCreationSuccess {...updatedCampaign} /> :
                    <Paper sx={{
                        padding: 2, px: 3, width: '100%', maxWidth: 800, position: 'absolute',
                        top: '50%', left: '50%',
                        transform: 'translate(-50%,-50%)',
                        borderRadius: 6,
                        backgroundColor: 'rgba(255,255,255,0.8)',
                    }}>
                        <Logo />
                        <Typography variant="h3" sx={{ mb: 4, textAlign: 'center', fontSize: { xs: 24, sm: 48 } }}>
                            Update Campaign
                        </Typography>
                        {loading && <LoadingPopup src="/lottie/creating.lottie" />}
                        <CampaignEditForm {...campaign} loading={loading} dispatch={campaignDispatch} disableOnPrivate />
                        {error && <Typography variant="body1" color="error" sx={{ mb: 1 }}>{error.message}</Typography>}
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                            <ReturnButton disabled={loading} sx={{ m: 0, borderRadius: 10, px: 2 }} />
                            <Button
                                onClick={() => trigger().catch(setError)}
                                variant="contained"
                                color="success"
                                disabled={loading}
                                sx={{ borderRadius: 10 }}
                                startIcon={<SaveIcon />}
                                loading={loading}
                            >
                                Update Campaign
                            </Button>
                        </div>
                    </Paper>}
            </div>
        </div>
    )
}
export default EditCampaign