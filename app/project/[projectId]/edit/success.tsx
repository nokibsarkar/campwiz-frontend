import LottieWrapper from "@/components/LottieWrapper"
import { Project } from "@/types/project"
import { Button, Paper, Typography } from "@mui/material"
import Link from "next/link"
import ForwardIcon from '@mui/icons-material/ArrowForward';
import Image from "next/image";
const ProjectUpdateSuccess = (c: Project & { reset: () => void }) => {
    return (
        <Paper sx={{ padding: 2, textAlign: 'center', borderRadius: 7 }}>
            <Image src='/logo.svg' alt="Logo" width={100} height={100} style={{ margin: 'auto' }} />
            <LottieWrapper src='/lottie/success.lottie' marginTop="-1em" />
            <Typography variant="h6" sx={{ mb: 2, textAlign: 'center', mt: -3 }} color='success'>
                Project Updated Successfully
            </Typography>
            <Typography variant="subtitle1" sx={{ textAlign: 'center' }}>
                Project {c.name} has been created with id <b>{c.projectId}</b>
            </Typography>
            <Typography variant="subtitle1" sx={{ textAlign: 'center' }}>
                Project Leads: {c.projectLeads.map((lead, i) => <b key={i}>{lead}</b>)}
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 2, textAlign: 'center' }}>
                The project leads can create campaigns for this project.
            </Typography>
            <Link href={`/project/${c.projectId}`}>
                <Button variant="contained" color="success" endIcon={<ForwardIcon />} sx={{ borderRadius: 7, mb: 2, mt: 1 }}>
                    Go to Project
                </Button>
            </Link>
        </Paper >
    )
}
export default ProjectUpdateSuccess