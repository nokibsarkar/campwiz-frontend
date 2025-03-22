import { fetchAPIFromBackendListWithErrorHandling } from "@/server";

const addMyselfAsPublicJury = async (roundId: string) => {
    const resp = await fetchAPIFromBackendListWithErrorHandling(`/round/${roundId}/addMyselfAsPublicJury`, {
        method: 'POST'
    });
    return resp;
}
export default addMyselfAsPublicJury