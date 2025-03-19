import { Session } from "@/types/user/session";

const ProjectList = ({ session }: { session: Session }) => {
    return (
        <div>
            <h1>Project List</h1>
            <p>Session: {session.username}</p>
        </div>
    )
};
export default ProjectList