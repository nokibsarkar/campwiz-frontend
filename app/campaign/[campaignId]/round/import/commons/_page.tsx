import LottieWrapper from "@/components/LottieWrapper"
import CategoryInput from "@/components/round/actions/CategoryInput"
import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material"
import { Suspense, useEffect, useState } from "react"
import startImportTask from "./action"
type StatusThingyProps = {
    taskId: string
}
const StatusThingy = ({ taskId }: StatusThingyProps) => {
    const [status, setStatus] = useState('pending')
    useEffect(() => {
        if (!taskId) return
        const eventSource = new EventSource(`/task/${taskId}`);
        console.log('Connecting to SSE server.', eventSource);

        // Handle incoming messages
        eventSource.addEventListener('task', (event) => {
            const data = JSON.parse(event.data);
            setStatus(data.status)
            if (data.status == 'error') {
                eventSource.close();
            }
            if (data.status == 'success') {
                eventSource.close();
            }
        });
        // Handle errors
        eventSource.onerror = () => {
            console.error('Error connecting to SSE server.');
            setStatus('error')
            eventSource.close();
        };
        // Cleanup on unmount
        return () => {
            eventSource.close();
        };
    }, [taskId])
    return (<>
        {status == 'pending' && <LottieWrapper src="/lottie/importing.lottie" />}
        {status == 'success' && <LottieWrapper src="/lottie/success.lottie" />}
        {status == 'error' && <LottieWrapper src="/lottie/error.lottie" />}
    </>
    )
}
const P = ({ roundId, onClose }: { roundId: string, onClose: () => void }) => {
    const [taskID, setTaskID] = useState('')
    const [importing, setImporting] = useState(false)
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
    return (
        <Dialog open={true} onClose={onClose}>
            <DialogTitle>
                Import from Commons
            </DialogTitle>
            <DialogContent>
                {taskID ? <StatusThingy taskId={taskID} /> : <Suspense fallback={<LottieWrapper src="/lottie/importing.lottie" />}>
                    <CategoryInput onSave={startImporting} alreadyIncludedCategories={[]} saving={importing} />
                </Suspense>}
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} variant="outlined" color="error" disabled={importing}>
                    {importing && <CircularProgress size={20} color="inherit" sx={{ display: importing ? 'inline-block' : 'none' }} />}
                    Close Dialog
                </Button>
            </DialogActions>
        </Dialog>
    )
}
export default P