import Link from "next/link";
import AddIcon from '@mui/icons-material/Add';
import { Button } from "@mui/material";
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
const ProjectDashboard = async () => (
    <div>
        <h1>Project Dashboard</h1>
        <NewProjectButton />
    </div>
)
export default ProjectDashboard;