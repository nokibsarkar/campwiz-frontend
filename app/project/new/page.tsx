"use client";
import { Button, CircularProgress, Paper, Typography } from "@mui/material"
import createProject from "@/app/project/new/action";
import { lazy, useReducer, useState } from "react";
import ProjectEditForm from "@/components/project/ProjectEditForm";
import ReturnButton from "@/components/ReturnButton";
import { Project } from "@/types/project";
import useSWRMutation from "swr/mutation";
import LoadingPopup from "@/components/LoadingPopup";
import AddIcon from '@mui/icons-material/Add';
import LoginBackground from "@/public/red-hill.svg";
import { initialProjectCreate, projectCreateReducer } from "@/types/project";
import Logo from "@/components/Logo";
const ProjectCreationSuccess = lazy(() => import('@/app/project/new/success'));

const CreateProject = () => {
    const [error, setError] = useState<Error | null>(null);
    const [project, projectDispatch] = useReducer(projectCreateReducer, initialProjectCreate);
    const { data: createdProject = null, trigger, isMutating: loading, reset: resetMutation } = useSWRMutation<Project | undefined>('/api/project', createProject.bind(null, project), {
        onError: setError,
    });
    const reset = () => {
        projectDispatch(initialProjectCreate);
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
                {createdProject ? <ProjectCreationSuccess {...createdProject} reset={reset} /> :
                    <Paper sx={{
                        padding: 2, px: 3, width: '100%', maxWidth: 800, position: 'absolute',
                        top: '50%', left: '50%',
                        transform: 'translate(-50%,-50%)',
                        borderRadius: 6,
                        backgroundColor: 'rgba(255,255,255,0.8)',
                    }}>
                        <Logo />
                        <Typography variant="h3" sx={{ mb: 4, textAlign: 'center', fontSize: { xs: 24, sm: 48 } }}>
                            Create Project
                        </Typography>
                        {loading && <LoadingPopup src="/lottie/creating.lottie" />}
                        <ProjectEditForm {...project} loading={loading} dispatch={projectDispatch} />
                        {error && <Typography variant="body1" color="error" sx={{ mb: 1 }}>{error.message}</Typography>}
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                            <ReturnButton disabled={loading} sx={{ m: 0, borderRadius: 10, px: 2 }} />
                            <Button
                                onClick={() => trigger().catch(setError)}
                                variant="contained"
                                color="success"
                                disabled={loading}
                                sx={{ borderRadius: 10 }}
                                startIcon={<AddIcon />}
                            >
                                <CircularProgress size={24} color="inherit" sx={{ display: loading ? 'inline-block' : 'none', mr: 1 }} />
                                Create Project
                            </Button>
                        </div>
                    </Paper>}
            </div>
        </div>
    )
}
export default CreateProject