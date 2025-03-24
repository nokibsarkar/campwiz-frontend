"use client";
import { Button, Paper, Typography } from "@mui/material"
import { lazy, useReducer, useState } from "react";
import ProjectEditForm from "@/components/project/ProjectEditForm";
import ReturnButton from "@/components/ReturnButton";
import { Project, projectUpdateReducer } from "@/types/project";
import useSWRMutation from "swr/mutation";
import LoadingPopup from "@/components/LoadingPopup";
import LoginBackground from "@/public/red-hill.svg";
import Logo from "@/components/Logo";
import SaveIcon from '@mui/icons-material/Save';
import updateProject from "./action";
const ProjectUpdateSuccess = lazy(() => import('@/app/project/[projectId]/edit/success'));

const UpdateProject = ({ initialProject }: { initialProject: Project }) => {
    const [error, setError] = useState<Error | null>(null);
    const [project, projectDispatch] = useReducer(projectUpdateReducer, initialProject);
    const url = `/project/${initialProject.projectId}`;
    const { data: createdProject = null, trigger, isMutating: loading, reset: resetMutation } = useSWRMutation<Project | undefined>(url, updateProject.bind(null, project), {
        onError: setError,
    });
    const reset = () => {
        projectDispatch(initialProject);
        resetMutation();
    }
    return (
        <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex',
            justifyContent: 'center', alignItems: 'center',
            backgroundImage: `url(${LoginBackground.src})`,
            backgroundSize: 'cover',
        }}>
            <div style={{
                position: 'relative', width: '100%', height: '100%', display: 'flex',
                backgroundColor: 'rgba(255,255,255,0.4)',
                justifyContent: 'center', alignItems: 'center'
            }}>
                {createdProject ? <ProjectUpdateSuccess {...createdProject} reset={reset} /> :
                    <Paper sx={{
                        padding: 2, px: 3, width: '100%', maxWidth: 800, position: 'absolute',
                        top: '50%', left: '50%',
                        transform: 'translate(-50%,-50%)',
                        borderRadius: 6,
                        backgroundColor: 'rgba(255,255,255,0.8)',
                    }}>
                        <Logo />
                        <Typography variant="h3" sx={{ mb: 4, textAlign: 'center', fontSize: { xs: 24, sm: 48 } }}>
                            Update Project
                        </Typography>
                        {loading && <LoadingPopup src="/lottie/creating.lottie" />}
                        <ProjectEditForm {...project} loading={loading} dispatch={projectDispatch} disbaleId autoSuggestId={false} />
                        {error && <Typography variant="body1" color="error" sx={{ mb: 1 }}>{error.message}</Typography>}
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                            <ReturnButton disabled={loading} sx={{ m: 0, borderRadius: 10, px: 2 }} />
                            <Button
                                onClick={() => trigger().catch(setError)}
                                variant="contained"
                                color="success"
                                disabled={loading}
                                sx={{ borderRadius: 10 }}
                                loading={loading}
                                startIcon={<SaveIcon />}
                            >
                                Update Project
                            </Button>
                        </div>
                    </Paper>}
            </div>
        </div>
    )
}
export default UpdateProject