import Link from "next/link";
import AddIcon from '@mui/icons-material/Add';
import { Button } from "@mui/material";
import Logo from "@/components/Logo";
import SinglProjectChip from "@/components/project/SingleProjectChip";
import { Suspense } from "react";
import fetchSession from "@/server/session";
import fetchAPIFromBackendSingleWithErrorHandling, { fetchAPIFromBackendListWithErrorHandling } from "@/server";
import { Project } from "@/types/project";
const NewProjectButton = () => (
    <Link href="/project/new">
        <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
                bgcolor: "#006699", // Blue background color
                color: "#fff", // White text color
                borderRadius: 30,
                m: 1,
                px: 2,
                transition: "0.3s",
                "&:hover": {
                    bgcolor: "#00557d", // Darker blue background on hover
                    transform: "scale(1.05)",
                },
            }}
        >
            New Project
        </Button>
    </Link>
)
const ProjectDashboard = async () => {
    const session = await fetchSession();
    if (!session) {
        return <div>Not logged in</div>
    }
    const ProjectResponse = await fetchAPIFromBackendListWithErrorHandling<Project>('/project?includeRoles=true');
    if (!ProjectResponse) {
        return <div>Failed to fetch projects</div>
    }
    if ('detail' in ProjectResponse) {
        return <div>{ProjectResponse.detail}</div>
    }
    const projects = ProjectResponse.data;
    const { projectId } = session;
    let myProject = projects.find(project => project.projectId === projectId);
    if (!myProject) {
        const myProjectResponse = await fetchAPIFromBackendSingleWithErrorHandling<Project>(`/project/${projectId}?includeRoles=true`);
        if (!myProjectResponse) {
            return <div>Failed to fetch your project</div>
        }
        if ('detail' in myProjectResponse) {
            return <div>{myProjectResponse.detail}</div>
        }
        myProject = myProjectResponse.data;
    }
    return <div>
        <Logo />
        <div className="flex flex-row justify-between p-5">
            <h1 className="text-2xl font-bold">Project Dashboard</h1>
            <NewProjectButton />
        </div>
        <div className="
            flex flex-row flex-wrap
            gap-4
            p-5
            bg-gray-100
            rounded-lg
            shadow-lg
        ">
            <h2 className="text-xl font-bold">My Project</h2>
            <Suspense fallback={<div>Loading...</div>}>
                <SinglProjectChip
                    project={myProject}
                />
            </Suspense>
        </div>
        <div className="
            flex flex-row flex-wrap
            gap-4
            p-5
            bg-gray-100
            rounded-lg
            shadow-lg
        ">
            <h2 className="text-xl font-bold">Other Projects</h2>
            {/* <div className="flex flex-row flex-wrap"> */}
            {projects.filter(project => project.projectId !== projectId).map(project => (
                <SinglProjectChip
                    key={project.projectId}
                    project={project}
                />
            ))}
            {/* </div> */}
        </div>
    </div>
}
export default ProjectDashboard;