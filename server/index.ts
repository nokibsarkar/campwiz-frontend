"use server"
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { ResponseError, ResponseList, ResponseSingle } from "../types/_";
import { cookies } from 'next/headers'
const baseURL = process.env.NEXT_BASE_URL || ''
const API_PATH = '/api/v2';
const parseCookieString = (cookieString: string): ResponseCookie => {
    const parts = cookieString.split(';')
    const cookie: ResponseCookie = {
        name: '',
        value: '',
    }
    for (const part of parts) {
        const [key, value] = part.split('=')
        switch (key.trim().toLowerCase()) {
            case 'path':
                cookie.path = value
                break
            case 'domain':
                cookie.domain = value
                break
            case 'expires':
                cookie.expires = value ? new Date(value) : undefined
                break
            case 'max-age':
                cookie.maxAge = parseInt(value)
                break
            case 'secure':
                cookie.secure = true
                break
            case 'httponly':
                cookie.httpOnly = true
                break
            case 'samesite':
                cookie.sameSite = value as 'strict' | 'lax' | 'none'
                break
            default:
                cookie.name = key
                cookie.value = value
        }
    }
    return cookie
}
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
    if (!options.headers.has('Content-Type')) {
        options.headers.append('Content-Type', 'application/json')
    }
    options.credentials = 'same-origin'
    const res = await fetch(`${baseURL}${path}`, options)
    for (const [key, value] of res.headers.entries()) {
        if (key.toLowerCase() === 'set-cookie') {
            const cookie = parseCookieString(value)
            cookieStore.set(cookie)

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
export async function fetchAPIFromBackendListWithErrorHandling<T>(path: string, req?: RequestInit): Promise<ResponseList<T> | ResponseError> {
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
