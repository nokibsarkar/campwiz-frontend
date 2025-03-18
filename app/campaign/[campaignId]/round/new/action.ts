"use server";

import fetchAPIFromBackendSingleWithErrorHandling from "@/server";
import { Round, RoundCreate } from "@/types/round";

const createRound = async (round: RoundCreate) => {
    try {
        const res = await fetchAPIFromBackendSingleWithErrorHandling<Round>('/round/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(round),
        })
        return res
    } catch (error) {
        console.error(error)
    }
}
export const updateRound = async (roundId: string, round: RoundCreate) => {
    console.log(JSON.stringify(round))
    try {
        const res = await fetchAPIFromBackendSingleWithErrorHandling<Round>(`/round/${roundId}/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(round),
        })
        return res
    } catch (error) {
        console.error(error)
    }
}
export default createRound