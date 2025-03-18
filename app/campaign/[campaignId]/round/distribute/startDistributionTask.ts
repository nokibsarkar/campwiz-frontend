import { Task } from "@/app/task";
import fetchAPIFromBackendSingleWithErrorHandling from "@/server";
import { WikimediaUsername } from "@/types";

const startDistributionTask = async (roundId: string, juries: WikimediaUsername[]) => {
    const data = { juries }
    const task = await fetchAPIFromBackendSingleWithErrorHandling<Task>(`/round/distribute/${roundId}`, {
        method: 'POST',
        body: JSON.stringify(data)
    });
    return task
}
export default startDistributionTask