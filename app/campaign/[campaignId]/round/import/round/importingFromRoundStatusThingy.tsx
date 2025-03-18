import { Task } from "@/app/task"
import LottieWrapper from "@/components/LottieWrapper"
import { useEffect, useState } from "react"

type StatusThingyProps = {
    taskId: string
    onSuccess: (task: Task) => void
}
const StatusThingy = ({ taskId, onSuccess }: StatusThingyProps) => {
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
                console.log('Task completed', data);
                eventSource.close();
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
    </>
    )
}
export default StatusThingy