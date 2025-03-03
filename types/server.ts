import { ResponseError, ResponseSingle } from "./_";
const baseURL = process.env.NEXT_PUBLI_API_URL;
const fetchFromBackend = async (path: string) => {
    const res = await fetch(`${baseURL}${path}`);
    return await res.json();
}
export async function fetchFromBackendSingleWithErrorHandling<T>(path: string): Promise<ResponseSingle<T> | ResponseError> {
    try {
        const res = await fetch(`${baseURL}${path}`);
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
