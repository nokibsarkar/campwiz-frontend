import Link from "next/link";
import AddIcon from '@mui/icons-material/Add';
import { Button } from "@mui/material";
import Logo from "@/components/Logo";
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

        <Logo />
        <div className="flex flex-row justify-between p-5">
            <h1 className="text-2xl font-bold">Project Dashboard</h1>
            <NewProjectButton />
        </div>
    </div>
)
export default ProjectDashboard;