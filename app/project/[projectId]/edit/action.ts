// "use server";

import fetchAPIFromBackendSingleWithErrorHandling from "@/server";
import { Project, ProjectUpdate } from "@/types/project";

const updateProject = async (project: ProjectUpdate) => {
    if (project.name === '') {
        throw new Error('Project name cannot be empty')
    }
    if (project.logoUrl === '') {
        throw new Error('Project logo cannot be empty')
    }
    if (project.url === '') {
        throw new Error('Project website cannot be empty')
    }
    if (project.projectId === '') {
        throw new Error('Project code cannot be empty')
    }
    if (project.projectLeads.length === 0) {
        throw new Error('At least one coordinator is required')
    }
    const res = await fetchAPIFromBackendSingleWithErrorHandling<Project>(`/project/${project.projectId}?includeProjectLeads=true`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(project),
    })
    if ('detail' in res) {
        throw new Error(res.detail)
    }
    return res.data
}
export default updateProject