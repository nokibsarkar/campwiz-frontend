import Logo from "@/components/Logo"
import { Button, Typography } from "@mui/material"
import Link from "next/link"
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import DashboardIcon from '@mui/icons-material/Dashboard';
type HeroBannerProps = {
    showLoginButton: boolean
    showProjectDashboardLink: boolean
}
const LoginButton = () => (
    <Link href="/login">
        <Button
            variant="contained"
            startIcon={<LockOpenIcon />}
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
            Login
        </Button>
    </Link>
)
const ProjectDashboard = () => (
    <Link href="/project">
        <Button
            variant="contained"
            startIcon={<DashboardIcon />}

            sx={{
                bgcolor: "#006699", // Blue background color
                color: "#fff", // White text color
                borderRadius: 30,
                transition: "0.3s",
                m: 1,
                "&:hover": {
                    bgcolor: "#00557d", // Darker blue background on hover
                    transform: "scale(1.05)",
                },
            }}
        >
            Project Dashboard
        </Button>
    </Link>
)
const DocumentationButton = () => (
    <Button
        variant="outlined"
        startIcon={<ContactSupportIcon />}
        sx={{
            borderColor: "#006699", // Blue border color
            color: "#006699", // Blue text color
            borderRadius: 30,
            m: 1,
            transition: "0.3s",
            "&:hover": {
                bgcolor: "#006699", // Blue background on hover
                color: "#fff", // White text on hover
                transform: "scale(1.05)",
            },
        }}
    >
        Read Documentation
    </Button>
)
const HeroBanner = ({ showLoginButton, showProjectDashboardLink }: HeroBannerProps) => (
    <div className='text-center pb-4 mb-4 h-max'>
        <Logo />
        <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
                fontFamily: "Lora, serif",
                m: 1,
                color: "#006699", // Blue color for the text
            }}
        >
            Welcome to Campwiz NXT
        </Typography>
        <Typography variant="subtitle1" color="gray" sx={{ fontFamily: "Lora, serif" }}>
            Taking jury experience to another level
        </Typography>
        <div className="flex justify-center mt-4">
            {showLoginButton && <LoginButton />}
            {showProjectDashboardLink && <ProjectDashboard />}
            <DocumentationButton />

        </div>
    </div>
)
export default HeroBanner