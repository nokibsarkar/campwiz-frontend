"use server";

import fetchAPIFromBackendSingleWithErrorHandling from "@/server";
import { WikimediaCategoryName } from "@/types";
type Task = {
    id: string;
    status: string;
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