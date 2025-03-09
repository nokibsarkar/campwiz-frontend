import LottieWrapper from "@/components/LottieWrapper"
import { Project } from "@/types/project"
import { Button, Paper, Typography } from "@mui/material"
import Link from "next/link"
import ForwardIcon from '@mui/icons-material/ArrowForward';
const ProjectCreationSuccess = (c: Project & { reset: () => void }) => {
    return (
        <Paper sx={{ padding: 2, textAlign: 'center' }}>
            <LottieWrapper src='/lottie/success.lottie' />
            <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
                Project Created Successfully
            </Typography>
            <Typography variant="subtitle1" sx={{ textAlign: 'center' }}>
                Project {c.name} has been created with id <b>{c.projectId}</b>
            </Typography>
            <Typography variant="subtitle1" sx={{ textAlign: 'center' }}>
                Project Leads: {c.projectLeads.map((lead, i) => <b key={i}>{lead}</b>)}
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 2, textAlign: 'center' }}>
                The project leads can now create campaigns for this project.
            </Typography>
            <Button variant="contained" color="primary" onClick={c.reset} sx={{ mr: 2 }}>
                Create Another Project
            </Button>
            <Link href={`/project/${c.projectId}`}>
                <Button variant="contained" color="success" endIcon={<ForwardIcon />}>
                    Go to Project
                </Button>
            </Link>
        </Paper >
    )
}
export default ProjectCreationSuccess