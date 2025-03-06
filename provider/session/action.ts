"use server";

import { fetchFromBackend } from "@/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const tokenUri = 'https://meta.wikimedia.org/w/rest.php/oauth2/authorize'
export const loginInitiateAction = async (base: string, pathName: string | null) => {
    const clientId = process.env.NEXT_AUTH_CLIENT_ID;
    if (!clientId) {
        throw new Error('Missing NEXT_AUTH_CLIENT_ID')
    }
    const qs = new URLSearchParams({
        redirect_uri: base + '/user/callback',
        response_type: 'code',
        client_id: clientId,
        state: pathName || '/'
    }).toString()
    return redirect(`${tokenUri}?${qs}`)
}
export const loginCallbackAction = async (code: string, state: string) => {
    const qs = `?code=${code}&state=${state}`
    const res = await fetchFromBackend('/user/callback' + qs);
    return res
}
export default loginInitiateAction