"use client";

import { useEffect } from "react";

type ImportTaskStatusProps = {
    taskID: string
}
const ImportTaskStatus = ({ taskID }: ImportTaskStatusProps) => {
    useEffect(() => {
        const ev = new EventSource(`/task/${taskID}`);
        console.log('Connecting to SSE server.', ev);
        ev.onmessage = (event) => {
            const data = JSON.parse(event.data);
            console.log(data);
        }
        ev.onerror = () => {
            console.error('Error connecting to SSE server.');
            ev.close();
        }
        return () => {
            ev.close();
        }
    }, [taskID])
    return (
        <div>
            <h1>Import Task Status</h1>
            <p>Task ID: {taskID}</p>
        </div>
    );
}
export default ImportTaskStatus