import Link from "next/link";
import AddIcon from '@mui/icons-material/Add';
import { Button } from "@mui/material";
import SinglProjectChip from "@/components/project/SingleProjectChip";
import { Suspense } from "react";
import fetchSession from "@/server/session";
import fetchAPIFromBackendSingleWithErrorHandling, { fetchAPIFromBackendListWithErrorHandling } from "@/server";
import { Project } from "@/types/project";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
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
    const canAccessOtherProject = (session.permission & session.permissionMap.PermissionOtherProjectAccess) === session.permissionMap.PermissionOtherProjectAccess;

    let myProject = projects.find(project => project.projectId === projectId);
    if (!myProject && projectId !== null) {
        const myProjectResponse = await fetchAPIFromBackendSingleWithErrorHandling<Project>(`/project/${projectId}?includeRoles=true`);
        if (!myProjectResponse) {
            return <div>Failed to fetch your project</div>
        }
        if ('detail' in myProjectResponse) {
            return <div>{myProjectResponse.detail}</div>
        }
        myProject = myProjectResponse.data;
    }
    const otherProjects = projects.filter(project => project.projectId !== projectId) || [];
    return <>
        <Header returnTo="/" />
        <div>
            <div className="flex flex-row justify-between ">
                <h1 className="text-2xl font-bold">Project Dashboard</h1>
                {canAccessOtherProject && <NewProjectButton />}
            </div>
            {myProject && <div className="
            flex flex-row flex-wrap
            gap-4
            p-5
            bg-transparent
            rounded-lg
            shadow-sm
        ">
                <h2 className="text-xl font-bold">My Project</h2>
                <Suspense fallback={<div>Loading...</div>}>
                    <SinglProjectChip
                        project={myProject}
                    />
                </Suspense>
            </div>
            }
            {otherProjects.length > 0 && <>
                <h2 className="text-2xl font-bold block p-2 pl-4 text-center">Other Projects</h2>
                <div className="
            flex flex-row flex-wrap
            gap-4
            p-5
            bg-transparent
            rounded-lg
            shadow-lg
        ">
                    {otherProjects.map(project => (
                        <SinglProjectChip
                            key={project.projectId}
                            project={project}
                        />
                    ))}
                    {/* </div> */}
                </div>

            </>
            }
        </div>
        <Footer />
    </>
}
export default ProjectDashboard;