import fetchAPIFromBackendSingleWithErrorHandling from "@/server/server";
import { Session } from "@/types/user/session";

const fetchSession = async () => {
    console.log("fetching session")
    const res = await fetchAPIFromBackendSingleWithErrorHandling<Session>("/user/me2");
    if ('detail' in res) {
        return null;
    }
    return res.data;
}
export default fetchSession;