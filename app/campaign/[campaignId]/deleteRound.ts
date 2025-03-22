"use server";
import fetchAPIFromBackendSingleWithErrorHandling from "@/server";
type RoundDeleteResponse = {
    roundId: string
}
export default async function deleteRound(roundId: string) {
    const resp = await fetchAPIFromBackendSingleWithErrorHandling<RoundDeleteResponse>(`/round/${roundId}`, {
        method: 'DELETE'
    });
    return resp;
}