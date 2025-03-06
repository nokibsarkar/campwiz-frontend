"use server"
import { ResponseError, ResponseSingle } from "../types/_";
import { cookies } from 'next/headers'
const baseURL = process.env.NEXT_BASE_URL || ''
const API_PATH = '/api/v2';
export const fetchFromBackend = async (path: string, options?: RequestInit): Promise<Response> => {
    const cookieStore = await cookies()
    if (options === undefined) {
        options = {}
    }
    if (options.headers === undefined) {
        options.headers = new Headers()
    } else {
        options.headers = new Headers(options.headers)
    }
    options.headers.append('Cookie', cookieStore.toString())
    const res = await fetch(`${baseURL}${path}`, options)
    // Set the cookies
    for (const [key, value] of res.headers.entries()) {
        if (key.toLowerCase() === 'set-cookie') {
            const cookieName = value.split('=')[0]
            console.log('Setting cookie', cookieName, value)
            cookieStore.set(cookieName, value)
        }
    }
    return res
}

async function fetchAPIFromBackendSingleWithErrorHandling<T>(path: string, req?: RequestInit): Promise<ResponseSingle<T> | ResponseError> {
    try {
        const res = await fetchFromBackend(`${API_PATH}${path}`, req)
        const r = await res.json();
        if (res.ok) {
            return r
        } else {
            return {
                detail: r.detail
            }
        }
    } catch (e) {
        return {
            detail: (e as Error).message
        }
    }

}
export default fetchAPIFromBackendSingleWithErrorHandling;
