import { loginCallbackAction } from "@/components/providers/session/action";

const LoginCallbackPage: React.FC = async () => {
    await loginCallbackAction();
    return (
        <div>
            <h1>Login Callback Page</h1>
        </div>
    );
};
export default LoginCallbackPage;