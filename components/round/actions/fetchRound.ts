"use server";
import fetchAPIFromBackendSingleWithErrorHandling from "@/server";
import { Round, RoundFilter } from "@/types/round";

const fetchListRounds = async (filter: RoundFilter) => {
    const qs = new URLSearchParams(filter as unknown as Record<string, string>).toString();
    try {
        const res = await fetchAPIFromBackendSingleWithErrorHandling<Round[]>(`/round/?${qs}`);
        if ('detail' in res) {
            console.error(res.detail)
            return []
        }
        return res.data
    } catch (error) {
        console.error(error)
    }

}
export default fetchListRounds