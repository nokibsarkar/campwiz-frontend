import { Task } from "@/app/task"
import LottieWrapper from "@/components/LottieWrapper"
import { Chip } from "@mui/material"
import { useEffect, useState } from "react"

type StatusThingyProps = {
    taskId: string
    onSuccess: (task: Task) => void
}
const StatusThingy = ({ taskId, onSuccess }: StatusThingyProps) => {
    const [status, setStatus] = useState('pending');
    const [successCount, setSuccessCount] = useState(0);
    const [failedCount, setFailedCount] = useState(0);
    const [failedIds, setFailedIds] = useState<{ [key: string]: string }>({});
    useEffect(() => {
        if (!taskId) return
        const eventSource = new EventSource(`/task/${taskId}`);
        console.log('Connecting to SSE server.', eventSource);

        // Handle incoming messages
        eventSource.addEventListener('task', (event) => {
            const data: Task = JSON.parse(event.data);
            setStatus(data.status);
            setSuccessCount(data.successCount);
            setFailedCount(data.failedCount);
            if (data.status == 'error') {
                eventSource.close();
                setFailedIds(data.failedIds);
            }
            if (data.status == 'success') {
                console.log('Task completed', data);
                eventSource.close();
                setFailedIds(data.failedIds);
                onSuccess(data);
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
    }, [onSuccess, taskId])
    return (<>
        {status == 'pending' && <LottieWrapper src="/lottie/importing.lottie" />}
        {status == 'success' && <LottieWrapper src="/lottie/success.lottie" />}
        {status == 'error' && <LottieWrapper src="/lottie/error.lottie" />}
        <Chip label={`Success: ${successCount}`} color="success" />
        <Chip label={`Failed: ${failedCount}`} color="error" />
        {!!failedIds && <ul>
            {Object.entries(failedIds || {}).map(([key, value]) => (
                <li key={key}>{key}: {value}</li>
            ))}
        </ul>}
    </>
    )
}
export default StatusThingy