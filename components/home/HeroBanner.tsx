"use server"
import { Button, Typography } from "@mui/material"
import { Session } from "@/types/user/session";
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { LogoutButtton, DhashboardButton } from "./Buttons";
import Link from "next/link";
import LoginButton from "./LoginButton";
import { uTranslation } from "@/i18n";
type HeroBannerProps = {
    session: Session | null
}
export const DocumentationButton = async () => {
    const { t } = await uTranslation()
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
        <Link href='https://commons.wikimedia.org/wiki/Commons:Campwiz_NXT'>
            <Button
                variant="outlined"
                startIcon={<ContactSupportIcon />}
                sx={sx}
            >
                {t('home.doc')}
            </Button>
        </Link>
    )
}
const HeroBanner = async ({ session }: HeroBannerProps) => {
    const canAccessOtherProject = session !== null && (session.permission & session.permissionMap.PermissionOtherProjectAccess) === session.permissionMap.PermissionOtherProjectAccess;
    const accessibleProjectId = session?.projectId || null;
    const showProjectDashboardLink = session !== null && (canAccessOtherProject || accessibleProjectId !== null);
    const showLoginButton = session === null;
    const showLogout = session !== null;
    const { t } = await uTranslation()
    return (
        <div className='text-center pb-4 mb-4 h-max'>
            <Typography
                variant="h4"
                fontWeight="bold"
                sx={{
                    fontFamily: "Lora, serif",
                    m: 1,
                    color: 'primary.main',
                }}
            >
                {t('home.welcome', { name: session?.username || '' })}
            </Typography>
            <Typography variant="subtitle1" color="gray" sx={{ fontFamily: "Lora, serif" }}>
                {t('home.subtitle')}
            </Typography>
            <div className="flex justify-center mt-4">
                {showLoginButton && <LoginButton />}
                {showLogout && <LogoutButtton refresh />}
                {showProjectDashboardLink && <DhashboardButton projectId={accessibleProjectId} canAccessOtherProject={canAccessOtherProject} />}
                <DocumentationButton />

            </div>
        </div>
    )
}
export default HeroBanner