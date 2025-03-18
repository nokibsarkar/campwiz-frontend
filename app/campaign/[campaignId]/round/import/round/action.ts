"use server";

import { Task } from "@/app/task";
import fetchAPIFromBackendSingleWithErrorHandling from "@/server";


const startImportTask = async (roundId: string, dependedOnRoundId: string, scores: string[]) => {
    const data = { roundId: dependedOnRoundId, scores: scores.map(score => parseFloat(score)) }
    const task = await fetchAPIFromBackendSingleWithErrorHandling<Task>(`/round/import/${roundId}/previous`, {
        method: 'POST',
        body: JSON.stringify(data)
    });
    return task
}
export default startImportTask
