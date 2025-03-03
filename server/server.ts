
import { ResponseError, ResponseSingle } from "../types/_";
import { cookies } from 'next/headers'
const baseURL = process.env.NEXT_PUBLIC_API_URL;
const fetchFromBackend = async (path: string) => {
    const res = await fetch(`${baseURL}${path}`);
    return await res.json();
}

export async function fetchFromBackendSingleWithErrorHandling<T>(path: string): Promise<ResponseSingle<T> | ResponseError> {
    const cookieStore = await cookies()
    try {
        const headers = new Headers()
        headers.append('Cookie', cookieStore.toString())
        const res = await fetch(`${baseURL}${path}`, {
            headers: headers,
        });
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
export default fetchFromBackend;
