import { Suspense, useState } from "react"
import startImportTask from "./startImportTask"
import StatusThingy from "./importingFromRoundStatusThingy"
import LottieWrapper from "@/components/LottieWrapper"
import { Round } from "@/types/round"
import useSWR from "swr"
import { Button, LinearProgress, MenuItem, TextField } from "@mui/material"
import { Task } from "@/app/task"
import fetchRoundResults from "./fetchRoundSummary"

type ImportFromRoundWidgetProps = {
    currentRound: Round
    importing: boolean
    setImporting: (loading: boolean) => void
    distribute: (t: Task) => void
}
const ImportFromRoundWidget = ({ currentRound, importing, setImporting, distribute: afterImport }: ImportFromRoundWidgetProps) => {
    const [taskID, setTaskID] = useState('')
    const [score, setScore] = useState<string>('')
    // const [mediaType, setMediaType] = useState<string>('')
    const { data: summaryResponse, isLoading, } = useSWR(`/round/${currentRound.dependsOnRoundId}/results/summary`, fetchRoundResults, {
        revalidateOnFocus: true,
        revalidateOnReconnect: true,
        revalidateOnMount: true,
    })
    const startImporting = async (scores: string, fromId?: string) => {
        try {
            if (!fromId) {
                throw new Error('No round to import from')
            }
            setImporting(true)
            const taskResponse = await startImportTask(currentRound.roundId, fromId, [scores])
            if ('detail' in taskResponse) {
                throw new Error(taskResponse.detail)
            }
            setTaskID(taskResponse.data.taskId)
        } catch (e) {
            console.error(e)
        } finally {
            setImporting(false)
        }
    }
    if (isLoading) {
        return <LinearProgress />
    }
    if (!summaryResponse) {
        return <div>Failed to load summary</div>
    }
    if ('detail' in summaryResponse) {
        return <div>{summaryResponse.detail}</div>
    }
    const summaryScore = summaryResponse.data;
    return (taskID ? <StatusThingy taskId={taskID} onSuccess={afterImport} /> : <Suspense fallback={<LottieWrapper src="/lottie/importing.lottie" />}>
        <div className="flex flex-col gap-4">
            {summaryScore.length === 0 ? <div>No submissions to import</div> :
                <TextField
                    label="Minimum Passing Score"
                    placeholder="Select a score above which submissions will be imported"
                    select
                    fullWidth
                    value={score}
                    sx={{ my: 1 }}
                    variant="outlined"
                    onChange={(e) => setScore(e.target.value)}
                    helperText={score !== '' && `Importing submissions with score above ${score}% (${summaryScore.find((submission) => submission.averageScore >= parseInt(score))?.cumulative || 0} media)`}
                >
                    {summaryScore.map((submission, i) => <MenuItem key={i} value={submission.averageScore}>{submission.averageScore}% - {submission.cumulative} Files</MenuItem>)}
                </TextField>
            }
            <Button
                onClick={() => startImporting(score, currentRound.dependsOnRoundId,)}
                disabled={importing || score === ''}
                // sx={{ my: 1 }}
                loading={importing}
                variant="contained"
                color="primary"
            >
                Import
            </Button>
        </div>
    </Suspense>)
}
export default ImportFromRoundWidget