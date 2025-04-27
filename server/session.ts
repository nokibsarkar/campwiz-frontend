'use server';
import fetchAPIFromBackendSingleWithErrorHandling from "@/server";
import { Session } from "@/types/user/session";
import { setUser } from "@sentry/nextjs";
const fetchSession = async () => {
    const res = await fetchAPIFromBackendSingleWithErrorHandling<Session>("/user/me", {
        cache: 'force-cache',
        next: {
            revalidate: 5 * 60 * 1000, // 5 minutes
            tags: ['user/me']
        }
    });
    if ('detail' in res) {
        return null;
    }
    const session = res.data;
    if (session) {
        setUser({
            id: session.id,
            username: session.username,
            data: {
                permission: session.permission,
                projectId: session.projectId,
                registeredAt: session.registeredAt,
            },
        })
    }
    return session;
}
export default fetchSession;