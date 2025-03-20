import Logo from "@/components/Logo"
import { Typography } from "@mui/material"
import { Session } from "@/types/user/session";
import { DocumentationButton, LoginButton, LogoutButtton, ProjectDashboard } from "./Buttons";
type HeroBannerProps = {
    session: Session | null
}

const HeroBanner = ({ session }: HeroBannerProps) => {
    const showProjectDashboardLink = session !== null && (session.permission & session.permissionMap.PermissionOtherProjectAccess) === session.permissionMap.PermissionOtherProjectAccess;
    const showLoginButton = session === null;
    const showLogout = session !== null;
    return (
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
                {showLogout && <LogoutButtton />}
                {showProjectDashboardLink && <ProjectDashboard />}
                <DocumentationButton />

            </div>
        </div>
    )
}
export default HeroBanner