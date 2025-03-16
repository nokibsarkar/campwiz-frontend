"use server";

import { Task } from "@/app/task";
import fetchAPIFromBackendSingleWithErrorHandling from "@/server";
import { WikimediaCategoryName, WikimediaUsername } from "@/types";

export const startDistributionTask = async (roundId: string, juries: WikimediaUsername[]) => {
    const data = { juries }
    const task = await fetchAPIFromBackendSingleWithErrorHandling<Task>(`/round/distribute/${roundId}`, {
        method: 'POST',
        body: JSON.stringify(data)
    });
    return task
}
const startImportTask = async (roundId: string, categories: WikimediaCategoryName[]) => {
    const data = { categories: categories.map((category) => category.replace(/^(?:Category:)?/, 'Category:')) }
    const task = await fetchAPIFromBackendSingleWithErrorHandling<Task>(`/round/import/${roundId}/commons`, {
        method: 'POST',
        body: JSON.stringify(data)
    });
    return task
}
export default startImportTask
