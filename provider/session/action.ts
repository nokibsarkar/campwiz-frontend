"use server";

import fetchAPIFromBackendSingleWithErrorHandling from "@/server";
import { redirect } from "next/navigation";

type RedirectResponse = {
    redirect: string
}
export const loginInitiateAction = async (base: string, pathName: string | null) => {
    const qs = `?next=${pathName || '/'}`
    const res = await fetchAPIFromBackendSingleWithErrorHandling<RedirectResponse>('/user/login' + qs, {
        cache: 'no-cache',
        credentials: 'include',
        redirect: 'manual',
    });
    if ('detail' in res) {
        throw new Error(res.detail)
    }
    const location = res.data.redirect
    if (!location) {
        throw new Error('Location header missing')
    }
    return redirect(location)
}
export const loginCallbackAction = async (code: string, state: string) => {
    const qs = `?code=${code}&state=${state}`
    const res = await fetchAPIFromBackendSingleWithErrorHandling<RedirectResponse>('/user/callback' + qs, {
        cache: 'no-cache',
        credentials: 'include',
        redirect: 'manual',
    });
    return res
}
export default loginInitiateAction