const fetchSession = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/user/me", {
        credentials: "include"
    });
    return await res.json();
}
export default fetchSession;