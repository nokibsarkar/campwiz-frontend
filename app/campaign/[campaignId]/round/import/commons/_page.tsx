import LottieWrapper from "@/components/LottieWrapper"
import CategoryInput from "@/components/round/actions/CategoryInput"
import { Dialog, DialogContent, DialogTitle } from "@mui/material"
import { Suspense, useEffect, useState } from "react"
import startImportTask from "./action"
const StatusThingy = ({ taskId }: { taskId: string }) => {
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
    return (
        <Dialog open={true}>
            <DialogTitle>
                Importing from Commons
            </DialogTitle>
            <DialogContent>
                {status == 'pending' && <LottieWrapper src="/lottie/importing.lottie" />}
                {status == 'success' && <LottieWrapper src="/lottie/success.lottie" />}
                {status == 'error' && <LottieWrapper src="/lottie/error.lottie" />}
            </DialogContent>
        </Dialog>
    )
}
const P = ({ roundId }: { roundId: string }) => {
    const [taskID, setTaskID] = useState('')
    const startImporting = async (categories: string[]) => {
        try {
            const taskResponse = await startImportTask(roundId, categories)
            if ('detail' in taskResponse) {
                throw new Error(taskResponse.detail)
            }
            setTaskID(taskResponse.data.taskId)
        } catch (e) {
            console.error(e)
        }
    }
    return (
        <Dialog open={true}>
            <DialogTitle>
                Import from Commons
            </DialogTitle>
            <DialogContent>
                {taskID ? <StatusThingy taskId={taskID} /> : <Suspense fallback={<LottieWrapper src="/lottie/importing.lottie" />}>
                    <CategoryInput onSave={startImporting} alreadyIncludedCategories={[]} />
                </Suspense>
                }
            </DialogContent>
        </Dialog>
    )
}
export default P