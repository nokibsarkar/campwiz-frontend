import fetchSession from "@/server/session";
import { Session } from "@/types/user/session";
/**
 * This function checks if the user has access to a project.
 * @param projectId The ProjectId to check access for
 * @returns string | null
 * - Returns null if the user has access to the project
 * - Returns 'Not Logged In' if the user is not logged in
 * - Returns 'Not allowed to access this project' if the user is not allowed to access the project
 */
const projectAccessDeniedReason = async (projectId: string) => {
    const result = {
        reason: null as string | null,
        session: null as Session | null,
        canAccessOtherProject: false,
    }
    const session = await fetchSession();
    result.session = session;
    if (!session) {
        result.reason = 'Not Logged In';
        return result
    }
    const canAccessOtherProject = (session.permission & session.permissionMap.PermissionOtherProjectAccess) === session.permissionMap.PermissionOtherProjectAccess;
    result.canAccessOtherProject = canAccessOtherProject;
    if (!canAccessOtherProject && session.projectId !== projectId) {
        result.reason = 'Not allowed to access this project';
        return result
    }
    return result
}
export default projectAccessDeniedReason;