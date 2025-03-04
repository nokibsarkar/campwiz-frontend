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
        if ('detail' in res) {
            console.error(res.detail)
            throw new Error(res.detail)
        } else {
            console.log(res)
        }
        return res.data
    } catch (error) {
        console.error(error)
    }
}
export default createRound