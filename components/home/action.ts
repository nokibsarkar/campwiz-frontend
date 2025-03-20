import fetchAPIFromBackendSingleWithErrorHandling from "@/server"

const logout = async () => {
    return fetchAPIFromBackendSingleWithErrorHandling("/user/logout", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
export default logout