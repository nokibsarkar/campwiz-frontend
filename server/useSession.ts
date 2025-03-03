import { fetchFromBackendSingleWithErrorHandling } from "@/types/server";

const fetchSession = async () => {
    const res = await fetchFromBackendSingleWithErrorHandling("/user/me");
    return res;
}
export default fetchSession;