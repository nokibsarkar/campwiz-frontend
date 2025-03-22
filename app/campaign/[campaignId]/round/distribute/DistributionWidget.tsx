
import { WikimediaUsername } from "@/types"
import { Task } from "@/app/task"
import { useState } from "react"
import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, Typography } from "@mui/material"
import DistributionStatusThingy from "./distributingStatusSthingy"
import startDistributionTask from "./startDistributionTask"

type DistributionWidgetProps = {
    roundId: string
    juries: string[]
    afterDistribution: (t: Task) => void
    onClose: () => void
}
export const DistributionWidget = ({ juries: initialJuries, }: DistributionWidgetProps) => {
    const [juryMap, setJuryMap] = useState<{ [key: WikimediaUsername]: boolean }>(initialJuries.reduce((acc, jury) => ({ ...acc, [jury]: true }), {}))
    const juries = Object.keys(juryMap).filter((key) => juryMap[key]);
    return (
        <div style={{ padding: '1rem', textAlign: 'center' }}>
            <Typography variant="h5" component="h2" gutterBottom sx={{ textAlign: 'center' }}>
                Task Distribute
            </Typography>
            <Typography variant="subtitle1" gutterBottom sx={{ textAlign: 'center', color: 'text.secondary' }}>
                Select the juries to distribute the task
            </Typography>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={juries.length === initialJuries.length}
                        onChange={(e) => setJuryMap(initialJuries.reduce((acc, jury) => ({ ...acc, [jury]: e.target.checked }), {}))}
                        name="all"
                    />
                }
                label="All"
            />
            {
                initialJuries.map((jury) => (
                    <FormControlLabel
                        key={jury}
                        control={
                            <Checkbox
                                checked={juryMap[jury]}
                                onChange={(e) => setJuryMap({ ...juryMap, [jury]: e.target.checked })}
                                name={jury}
                            />
                        }
                        label={jury}
                    />
                ))
            }

        </div>
    )
}
const DistributionDialog = ({ juries: initialJuries, roundId, afterDistribution, onClose }: DistributionWidgetProps) => {
    const [juryMap, setJuryMap] = useState<{ [key: WikimediaUsername]: boolean }>(initialJuries.reduce((acc, jury) => ({ ...acc, [jury]: true }), {}))
    const juries = Object.keys(juryMap).filter((key) => juryMap[key]);
    const [distributing, setDistributing] = useState(false);
    const [task, setTask] = useState<Task | null>(null);
    const distribute = async () => {
        if (!juries || juries.length === 0 || !roundId) {
            throw new Error('Round not created yet');
        }
        setDistributing(true);
        const distributionTask = await startDistributionTask(roundId, juries);
        if ('detail' in distributionTask) {
            throw new Error(distributionTask.detail);
        }
        const task = distributionTask.data as Task;
        setTask(task);
    }
    return (
        <Dialog open={true} onClose={onClose}>
            <DialogTitle>Distribute Task</DialogTitle>
            <DialogContent>
                {distributing && task ? <DistributionStatusThingy taskId={task.taskId} onSuccess={(t) => { setDistributing(false); afterDistribution(t) }} />
                    : <>
                        <Typography variant="h5" component="h2" gutterBottom sx={{ textAlign: 'center' }}>
                            Task Distribute
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom sx={{ textAlign: 'center', color: 'text.secondary' }}>
                            Select the juries to distribute the task
                        </Typography>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={juries.length === initialJuries.length}
                                    onChange={(e) => setJuryMap(initialJuries.reduce((acc, jury) => ({ ...acc, [jury]: e.target.checked }), {}))}
                                    name="all"
                                />
                            }
                            label="All"
                        />
                        <br />
                        {
                            initialJuries.map((jury) => (
                                <FormControlLabel
                                    key={jury}
                                    control={
                                        <Checkbox
                                            checked={juryMap[jury]}
                                            onChange={(e) => setJuryMap({ ...juryMap, [jury]: e.target.checked })}
                                            name={jury}
                                        />
                                    }
                                    label={jury}
                                />
                            ))
                        }
                    </>
                }
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={distribute} variant="contained" color="primary" sx={{ marginTop: '1rem' }} loading={distributing} disabled={distributing}>
                    Distribute
                </Button>
            </DialogActions>
        </Dialog>
    )
}
export default DistributionDialog