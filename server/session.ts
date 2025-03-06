'use server';
import fetchAPIFromBackendSingleWithErrorHandling from "@/server";
import { Session } from "@/types/user/session";
const fetchSession = async () => {
    const res = await fetchAPIFromBackendSingleWithErrorHandling<Session>("/user/me", {
        cache: 'force-cache'
    });
    if ('detail' in res) {
        return null;
    }
    return res.data;
}
export default fetchSession;