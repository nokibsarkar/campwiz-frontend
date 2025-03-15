"use client";
import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material"
import createRound from "@/app/campaign/[campaignId]/round/new/action"
import React, { lazy, useCallback, useReducer, useState } from "react";
import { roundCreateReducer, initialRoundCreate } from "@/types/round/create";
import { Round } from "@/types/round";
import RoundCreationSuccess from "@/app/campaign/[campaignId]/round/new/success";
import LoadingPopup from "@/components/LoadingPopup";
const RoundEditForm = lazy(() => import("@/components/round/RoundEditForm"));

import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<unknown, typeof Slide>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const CreateRound = ({ campaignId, onAfterCreationSuccess, onClose }: { campaignId: string, onAfterCreationSuccess: (round: Round) => void, onClose: () => void }) => {
    const [round, roundDispatch] = useReducer(roundCreateReducer, { ...initialRoundCreate, campaignId });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [createdRound, setCreatedRound] = useState<Round | null>(null);
    const createRoundClient = useCallback(async () => {
        setLoading(true);
        try {
            setError(null);
            const newRoundResponse = await createRound(round);
            if (!newRoundResponse) {
                throw new Error('Round creation failed');
            }
            if ('detail' in newRoundResponse) {
                throw new Error(newRoundResponse.detail);
            }
            setCreatedRound(newRoundResponse.data as Round);
            onAfterCreationSuccess(newRoundResponse.data as Round);
        } catch (e) {
            console.error(e);
            setError((e as Error).message);
        } finally {
            setLoading(false);
        }
    }, [onAfterCreationSuccess, round]);
    return (
        createdRound ? <RoundCreationSuccess round={createdRound} onClose={onClose} nextStepLabel="Import Submissions" nextStepAction={() => { }} />
            : <Dialog open={true}
                sx={{
                    width: {
                        xs: '100%',
                        sm: '80%',
                    },
                    margin: 'auto',
                    '& .MuiDialog-paper': {
                        width: '100%',
                        maxWidth: '100%',
                    }
                }}


                slots={{
                    transition: Transition
                }} onClose={onClose}>
                <DialogTitle>
                    Create a new round
                </DialogTitle>
                <DialogContent>
                    {error && <Typography variant="h6" color="error" sx={{ m: 2, textAlign: 'center' }}>{error}</Typography>}
                    {loading && <LoadingPopup src="/lottie/loading.lottie" />}
                    <RoundEditForm {...round} loading={loading} dispatch={roundDispatch} />
                </DialogContent>
                <DialogActions sx={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
                    <Button onClick={onClose} variant="outlined" color="error" disabled={loading}>
                        Cancel
                    </Button>
                    <Button
                        onClick={createRoundClient}
                        variant="contained"
                        color="success"
                        disabled={loading}
                    >
                        <CircularProgress size={24} color="inherit" sx={{ display: loading ? 'inline-block' : 'none', mr: 1 }} />
                        Create Round
                    </Button>
                </DialogActions>
            </Dialog>
    )
}

export default CreateRound