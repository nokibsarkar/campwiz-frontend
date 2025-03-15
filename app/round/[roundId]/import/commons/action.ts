"use server";

import { WikimediaCategoryName } from "@/types";

const startImportTask = async (roundId: string, categories: WikimediaCategoryName[]) => {
    console.log(roundId, categories);
}
export default startImportTask