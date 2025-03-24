"use client";
import { Button, useMediaQuery } from "@mui/material"
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Link from "next/link"
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import logout from "./action";
import { useState } from "react";
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
export const ProjectDashboard = ({ projectId, canAccessOtherProject }: { projectId: string | null, canAccessOtherProject: boolean }) => {
    const isSmall = useMediaQuery('(max-width:600px)');
    const url = canAccessOtherProject ? `/project/` : `/project/${projectId}`;
    return (
        <Link href={url}>
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
                {isSmall ? null : 'Dashboard'}
            </Button>
        </Link>
    )
}
export const DocumentationButton = () => {
    const isSmall = useMediaQuery('(max-width:600px)');
    return (
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
            {isSmall ? null : 'Documentation'}
        </Button>
    )
}
export const LogoutButtton = () => {
    const isSmall = useMediaQuery('(max-width:600px)');
    const [loggingOut, setLoggingOut] = useState(false);
    const perFormLogout = async () => {
        setLoggingOut(true);
        await logout();
        setLoggingOut(false);
        if (typeof window !== 'undefined') {
            setTimeout(window.location.reload.bind(window.location), 1000);
        }
    }
    return <Button
        variant="contained"
        startIcon={<PowerSettingsNewIcon />}
        onClick={perFormLogout}
        disabled={loggingOut}
        loading={loggingOut}
        color="error"
        sx={{
            borderRadius: 30,
            m: 1,
            px: { xs: 0, sm: 2 },
            transition: "0.3s",
            "&:hover": {
                transform: "scale(1.05)",
            },
        }}
    >
        {isSmall ? null : 'Logout'}
    </Button>
}