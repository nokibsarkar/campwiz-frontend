import { Suspense, useState } from "react"
import startImportTask from "./action"
import StatusThingy from "./importingFromRoundStatusThingy"
import LottieWrapper from "@/components/LottieWrapper"
import { Round, SubmissionResultSummary } from "@/types/round"
import useSWR from "swr"
import { fetchAPIFromBackendListWithErrorHandling } from "@/server"
import { Button, MenuItem, TextField } from "@mui/material"

type ImportFromRoundWidgetProps = {
    currentRound: Round
    importing: boolean
    setImporting: (loading: boolean) => void
    afterImport: () => void
}
const ImportFromRoundWidget = ({ currentRound, importing, setImporting, afterImport }: ImportFromRoundWidgetProps) => {
    const [taskID, setTaskID] = useState('')
    const [scores, setScores] = useState<string>('')
    // const [mediaType, setMediaType] = useState<string>('')
    const { data: summaryResponse, isLoading, } = useSWR(`/round/${currentRound.dependsOnRoundId}/results/summary`, fetchAPIFromBackendListWithErrorHandling<SubmissionResultSummary>)
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
        return <LottieWrapper src="/lottie/loading.lottie" />
    }
    if (!summaryResponse) {
        return <div>Failed to load summary</div>
    }
    if ('detail' in summaryResponse) {
        return <div>{summaryResponse.detail}</div>
    }
    const summaryScore = summaryResponse.data;
    return (taskID ? <StatusThingy taskId={taskID} onSuccess={afterImport} /> : <Suspense fallback={<LottieWrapper src="/lottie/importing.lottie" />}>
        <div style={{ textAlign: 'center' }}>
            <h2>Import from Round</h2>
            <TextField
                label="Score"
                placeholder="Select a score"
                select
                fullWidth
                variant="outlined"
                onChange={(e) => setScores(e.target.value)}
            >
                {summaryScore.map((submission, i) => <MenuItem key={i} value={submission.averageScore}>{submission.averageScore}% - {submission.submissionCount}</MenuItem>)}
            </TextField>
            <Button
                onClick={() => startImporting(scores, currentRound.dependsOnRoundId,)}
                disabled={importing}
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