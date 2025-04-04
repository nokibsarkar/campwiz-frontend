
import CreateCampaign_ from "./_page";
import fetchAPIFromBackendSingleWithErrorHandling from "@/server";
import { Project } from "@/types/project";
import projectAccessDeniedReason from "../../projectAccessDeniedReason";

const CreateCampaign = async ({ params }: { params: Promise<{ projectId: string }> }) => {
    const { projectId } = await params;
    const { canAccessOtherProject, reason } = await projectAccessDeniedReason(projectId);
    if (reason) {
        return <div>{reason}</div>
    }
    if (!canAccessOtherProject) {
        return <div>You don&apos;t have access to this project</div>
    }
    const projectResponse = await fetchAPIFromBackendSingleWithErrorHandling<Project>(`/project/${projectId}?includeProjectLeads=true`);
    if (!projectResponse) {
        return <div>Failed to fetch your project</div>
    }
    if ('detail' in projectResponse) {
        return <div>{projectResponse.detail}</div>
    }
    const project = projectResponse.data;
    const projectLeads = project.projectLeads || [];
    return (
        <>
            <CreateCampaign_ projectLeads={projectLeads} />
        </>
    )
}
export default CreateCampaign