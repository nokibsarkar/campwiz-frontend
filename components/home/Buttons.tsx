"use client";
import { Button } from "@mui/material"
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Link from "next/link"
export const LoginButton = () => (
    <Link href="/user/login">
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
export const ProjectDashboard = () => (
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
export const DocumentationButton = () => (
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
export const LogoutButtton = () => (
    <Link href="/user/logout">
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
            Logout
        </Button>
    </Link>
)