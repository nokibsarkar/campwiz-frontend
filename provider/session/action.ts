"use server";

import { fetchFromBackend } from "@/server";
import { redirect } from "next/navigation";

const tokenUri = 'https://meta.wikimedia.org/w/rest.php/oauth2/authorize'
export const loginInitiateActionClient = async (base: string, pathName: string | null) => {
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
export const loginInitiateAction = async (base: string, pathName: string | null) => {
    const qs = `?next=${pathName || '/'}`
    const res = await fetchFromBackend('/api/v2/user/login' + qs, {
        cache: 'no-cache',
        credentials: 'include',
        redirect: 'manual',
    });
    console.log(res)
    const location = res.headers.get('Location')
    if (!location) {
        throw new Error('Location header missing')
    }
    return redirect(location)
}
export const loginCallbackAction = async (code: string, state: string) => {
    const qs = `?code=${code}&state=${state}`
    const res = await fetchFromBackend('/api/v2/user/callback' + qs, {
        cache: 'no-cache',
        credentials: 'include',
        redirect: 'manual',
    });
    return res
}
export default loginInitiateAction