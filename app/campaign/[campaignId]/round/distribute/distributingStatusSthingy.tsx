import { Task } from "@/app/task"
import LottieWrapper from "@/components/LottieWrapper"
import Image from "next/image"
import DistributingLogo from "@/public/distributing.svg"
import { useEffect, useState } from "react"

type StatusThingyProps = {
    taskId: string
    onSuccess: (task: Task) => void
}
const DistributionStatusThingy = ({ taskId, onSuccess }: StatusThingyProps) => {
    const [status, setStatus] = useState('pending')
    useEffect(() => {
        if (!taskId) return
        const eventSource = new EventSource(`/task/${taskId}`);
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
        {status == 'pending' && <Image src={DistributingLogo.src} alt="distributing" width={200} height={200} />}
        {status == 'success' && <LottieWrapper src="/lottie/success.lottie" />}
        {status == 'error' && <LottieWrapper src="/lottie/error.lottie" />}
    </>
    )
}
export default DistributionStatusThingy