"use client";
import { Button, IconButton, useMediaQuery } from "@mui/material"
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Link from "next/link"
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import logout from "./logout";
// import IconButton from '@mui/material/IconButton';
import { useState } from "react";
import { usePathname } from "next/navigation";
export const LoginButton = () => {
    const sx = {
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
    }
    return (
        <Link href="/user/login">
            <Button
                variant="contained"
                startIcon={<LockOpenIcon />}
                sx={sx}
            >
                Login
            </Button>
        </Link>
    )
}
export const DhashboardButton = ({ projectId, canAccessOtherProject }: { projectId: string | null, canAccessOtherProject: boolean }) => {
    const isSmall = useMediaQuery('(max-width:600px)');
    const url = canAccessOtherProject ? `/project/` : `/project/${projectId}`;
    const sx = {
        bgcolor: "#006699", // Blue background color
        color: "#fff", // White text color
        borderRadius: 30,
        transition: "0.3s",
        m: 1,
        "&:hover": {
            bgcolor: "#00557d", // Darker blue background on hover
            transform: "scale(1.05)",
        },
    }
    return (
        <Link href={url}>
            {isSmall ? <IconButton
                sx={sx}
            >
                <DashboardIcon />
            </IconButton> : <Button
                variant="contained"
                startIcon={<DashboardIcon />}
                sx={sx}
            >
                {isSmall ? null : 'Dashboard'}
            </Button>
            }
        </Link>
    )
}
export const DocumentationButton = () => {
    const sx = {
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
    }
    return (
        <Link href='https://github.com/nokibsarkar/campwiz'>
            <Button
                variant="outlined"
                startIcon={<ContactSupportIcon />}
                sx={sx}
            >
                Doc
            </Button>
        </Link>
    )
}
export const LogoutButtton = ({ hiddenIn, refresh = false }: { hiddenIn?: string[], refresh?: boolean }) => {
    const isSmall = useMediaQuery('(max-width:600px)');
    const pathName = usePathname()
    const sx = {
        borderRadius: 30,
        m: 1,
    }
    const [loggingOut, setLoggingOut] = useState(false);
    const perFormLogout = async () => {
        setLoggingOut(true);
        await logout(refresh);
        setLoggingOut(false);
        console.log('Logged out', refresh);
    }
    if (hiddenIn) {
        for (const path of hiddenIn) {
            const r = new RegExp(path)
            if (r.test(pathName)) {
                return null
            }
        }
    }
    return (
        isSmall ? <IconButton
            sx={sx}
            onClick={perFormLogout}
            disabled={loggingOut}
            color="error"
            loading={loggingOut}
        >
            <PowerSettingsNewIcon />
        </IconButton> : <Button
            variant="contained"
            startIcon={<PowerSettingsNewIcon />}
            onClick={perFormLogout}
            disabled={loggingOut}
            loading={loggingOut}
            color="error"
            sx={sx}
        >
            {!isSmall && 'Logout'}
        </Button>

    )
}