
import CreateCampaign_ from "./_page";
import fetchAPIFromBackendSingleWithErrorHandling from "@/server";
import { Project } from "@/types/project";

const CreateCampaign = async ({ params }: { params: Promise<{ projectId: string }> }) => {
    const { projectId } = await params;
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
        <CreateCampaign_ projectLeads={projectLeads} />
    )
}
export default CreateCampaign