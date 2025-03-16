"use client";
import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material"
import createRound from "@/app/campaign/[campaignId]/round/new/action"
import React, { lazy, useCallback, useReducer, useState } from "react";
import { roundCreateReducer, initialRoundCreate } from "@/types/round/create";
import { Round } from "@/types/round";
import LoadingPopup from "@/components/LoadingPopup";
const RoundEditForm = lazy(() => import("@/components/round/RoundEditForm"));

import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import startImportTask, { startDistributionTask } from "./round/import/commons/action";
import StatusThingy from "./round/import/commons/importingStatusSthingy";
import DistributionStatusThingy from "./round/distribute/distributingStatusSthingy";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<unknown, typeof Slide>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});
enum Stage {
    CREATE = 'create',
    IMPORT = 'import',
    DISTRIBUTE = 'distribute'
}
const CreateRound = ({ campaignId, onClose }: { campaignId: string, onAfterCreationSuccess: (round: Round) => void, onClose: () => void }) => {
    const [round, roundDispatch] = useReducer(roundCreateReducer, { ...initialRoundCreate, campaignId });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [stage, setStage] = useState<Stage>(Stage.CREATE);
    const [taskId, setTaskId] = useState<string>('');

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
            const newround = newRoundResponse.data as Round;
            setCreatedRound(newRoundResponse.data as Round);
            setStage(Stage.IMPORT);
            const taskResponse = await startImportTask(newround.roundId, ['Bangladesh']);
            if ('detail' in taskResponse) {
                throw new Error(taskResponse.detail);
            }
            setTaskId(taskResponse.data.taskId);
            setStage(Stage.IMPORT);

            // onAfterCreationSuccess(newRoundResponse.data as Round);
        } catch (e) {
            console.error(e);
            setError((e as Error).message);
        } finally {
            setLoading(false);
        }
    }, [round]);
    const distribute = async () => {
        if (!createdRound) {
            throw new Error('Round not created yet');
        }
        setStage(Stage.DISTRIBUTE);
        const distributionTask = await startDistributionTask(createdRound.roundId, ['CampWiz Bot']);
        if ('detail' in distributionTask) {
            throw new Error(distributionTask.detail);
        }
        setTaskId(distributionTask.data.taskId);
    }
    return (<Dialog open={true}
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
            {stage === Stage.CREATE && <RoundEditForm {...round} loading={loading} dispatch={roundDispatch} />}
            {stage === Stage.IMPORT && <StatusThingy taskId={taskId} onSuccess={distribute} />}
            {stage === Stage.DISTRIBUTE && <DistributionStatusThingy taskId={taskId} onSuccess={onClose} />}
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