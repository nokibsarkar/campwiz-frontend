import LoginBackground from "@/public/red-hill.svg";
import CreateProject from "./_page";
import fetchSession from "@/server/session";

const ProjectCreate = async () => {
    const session = await fetchSession();
    if (!session) {
        return <div>Not logged in</div>
    }
    if ((session.permission & session.permissionMap.PermissionOtherProjectAccess) !== session.permissionMap.PermissionOtherProjectAccess) {
        return <div>Not allowed to create a project</div>
    }
    return (
        <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex',
            justifyContent: 'center', alignItems: 'center',
            backgroundImage: `url(${LoginBackground.src})`,
            backgroundSize: 'cover',
        }}>
            <div style={{
                position: 'relative', width: '100%', height: '100%', display: 'flex',
                backgroundColor: 'rgba(255,255,255,0.4)',
                justifyContent: 'center', alignItems: 'center'
            }}>
                <CreateProject />
            </div>
        </div>
    )
}
export default ProjectCreate