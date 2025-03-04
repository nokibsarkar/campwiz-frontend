"use client";
import { Button, CircularProgress, Paper, Typography } from "@mui/material"
import createRound from "./action"
import { lazy, useCallback, useReducer, useState } from "react";
import { roundCreateReducer, initialRoundCreate } from "@/types/round/create";
import ReturnButton from "@/components/ReturnButton";
import { Round } from "@/types/round";
import RoundCreationSuccess from "./success";
const RoundEditForm = lazy(() => import("@/components/round/RoundEditForm"));
const CreateRound = ({ campaignId }: { campaignId: string }) => {
    const [round, roundDispatch] = useReducer(roundCreateReducer, { ...initialRoundCreate, campaignId });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [createdRound, setCreatedRound] = useState<Round | null>(null);
    const createRoundClient = useCallback(async () => {
        setLoading(true);
        try {
            setError(null);
            const newRound = await createRound(round);
            console.log(newRound);
            setCreatedRound(newRound as Round);
        } catch (e) {
            console.error(e);
            setError((e as Error).message);
        } finally {
            setLoading(false);
        }
    }, [round]);
    return (
        createdRound ? <RoundCreationSuccess {...createdRound} /> :
            <Paper sx={{ padding: 2, }}>
                <Typography variant="h3" sx={{ mb: 2 }}>
                    {loading ? 'Creating Round...' : 'Create Round'}
                </Typography>
                {error && <Typography variant="body1" color="error">{error}</Typography>}
                <RoundEditForm {...round} loading={loading} dispatch={roundDispatch} />
                <br />
                <ReturnButton disabled={loading} />
                <Button
                    onClick={createRoundClient}
                    variant="contained"
                    color="success"
                    disabled={loading}
                >
                    <CircularProgress size={24} color="inherit" sx={{ display: loading ? 'inline-block' : 'none', mr: 1 }} />
                    Create Round
                </Button>
            </Paper>
    )
}
export default CreateRound