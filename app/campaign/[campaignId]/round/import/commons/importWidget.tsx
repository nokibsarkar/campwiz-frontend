import { Suspense, useState } from "react"
import startImportTask from "./action"
import StatusThingy from "./importingStatusSthingy"
import LottieWrapper from "@/components/LottieWrapper"
import CategoryInput from "@/components/round/actions/CategoryInput"
import { Task } from "@/app/task"
import { Round } from "@/types/round"
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material"

type ImportWidgetProps = {
    roundId: string
    importing: boolean
    setImporting: (loading: boolean) => void
    afterImport: (t: Task) => void
}
export const ImportSuccess = ({ onClose, round, task }: { round: Round, task: Task, onClose: () => void }) => (
    <Dialog open={true} onClose={onClose}>
        <DialogTitle>
            Import successful
        </DialogTitle>
        <DialogContent>
            <p>Importing from {round.name} was successful.</p>
            <p>Task ID: {task.taskId}</p>
            <Typography variant="body1" gutterBottom>
                Total Imported Submissions: {task.successCount}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Total Failed Submissions: {task.failedCount}
            </Typography>
            {
                typeof task.failedIds === 'object' && (
                    <Typography variant="body1" gutterBottom>
                        Following files have been skipped:
                        <ul>
                            {
                                Object.keys(task.failedIds).map((key) => (
                                    <li key={key}>
                                        {key} - {task.failedIds[key]}
                                    </li>
                                ))
                            }
                        </ul>
                    </Typography>
                )
            }
        </DialogContent>
        <DialogActions>
            <Button onClick={onClose} variant="outlined" color="error">
                Close Dialog
            </Button>
        </DialogActions>
    </Dialog>
)
const ImportWidget = ({ roundId, importing, setImporting, afterImport }: ImportWidgetProps) => {
    const [taskID, setTaskID] = useState('')
    const startImporting = async (categories: string[]) => {
        try {
            setImporting(true)
            const taskResponse = await startImportTask(roundId, categories)
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
    return (taskID ? <StatusThingy taskId={taskID} onSuccess={afterImport} /> : <Suspense fallback={<LottieWrapper src="/lottie/importing.lottie" />}>
        <CategoryInput onSave={startImporting} alreadyIncludedCategories={[]} saving={importing} />
    </Suspense>)
}
export default ImportWidget