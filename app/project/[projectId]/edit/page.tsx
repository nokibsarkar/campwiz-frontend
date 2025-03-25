import fetchAPIFromBackendSingleWithErrorHandling from "@/server";
import UpdateProject from "./_page";
import { Project } from "@/types/project";
import fetchSession from "@/server/session";

const ProjectUpdate = async ({ params }: { params: Promise<{ projectId: string }> }) => {
    const { projectId } = await params;
    const session = await fetchSession();
    if (!session) {
        return <div>Not logged in</div>
    }
    const canAccessOtherProject = (session.permission & session.permissionMap.PermissionOtherProjectAccess) === session.permissionMap.PermissionOtherProjectAccess;
    if (!canAccessOtherProject) {
        return <div>Not allowed to update this project</div>
    }
    const projectResponse = await fetchAPIFromBackendSingleWithErrorHandling<Project>(`/project/${projectId}?includeProjectLeads=true`);
    if ('detail' in projectResponse) {
        return <div>{projectResponse.detail}</div>
    }
    const project = projectResponse.data;
    project.projectLeads = project.projectLeads || [];
    return (
        <UpdateProject initialProject={project} />
    )
}
export default ProjectUpdate