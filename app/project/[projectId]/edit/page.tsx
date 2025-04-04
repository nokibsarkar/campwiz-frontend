import fetchAPIFromBackendSingleWithErrorHandling from "@/server";
import UpdateProject from "./_page";
import { Project } from "@/types/project";
import projectAccessDeniedReason from "../../projectAccessDeniedReason";

const ProjectUpdate = async ({ params }: { params: Promise<{ projectId: string }> }) => {
    const { projectId } = await params;
    const { reason } = await projectAccessDeniedReason(projectId);
    if (reason) {
        return <div>{reason}</div>
    }
    const projectResponse = await fetchAPIFromBackendSingleWithErrorHandling<Project>(`/project/${projectId}?includeProjectLeads=true`);
    if ('detail' in projectResponse) {
        return <div>{projectResponse.detail}</div>
    }
    const project = projectResponse.data;
    project.projectLeads = project.projectLeads || [];
    return (
        <>
            <UpdateProject initialProject={project} />

        </>
    )
}
export default ProjectUpdate