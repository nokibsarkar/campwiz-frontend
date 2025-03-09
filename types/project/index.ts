import { WikimediaUsername } from "../_";

export interface Project {
    logoUrl: string;
    name: string;
    projectId: string;
    projectLeads: WikimediaUsername[];
    url: string;
}
export type ProjectCreate = Project;
export const initialProjectCreate: ProjectCreate = {
    logoUrl: "",
    name: "",
    projectId: "",
    projectLeads: [],
    url: ""
}
export const projectCreateReducer = (state: ProjectCreate, action: Partial<ProjectCreate>) => {
    return {
        ...state,
        ...action
    }
}