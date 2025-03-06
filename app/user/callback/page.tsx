import { loginCallbackAction } from "@/provider/session/action";
import LoginError from "./status";
import { Paper } from "@mui/material";
import LoginSuccess from "./success";
type LoginCallbackPageProps = { searchParams?: Promise<{ code: string, state: string }>; }
const LoginCallbackPage: React.FC = async ({ searchParams }: LoginCallbackPageProps) => {
    if (!searchParams) {
        throw new Error('the query parameters are not available');
    }
    const { code, state } = await searchParams;
    if (!code || !state) {
        throw new Error('the query parameters code and state are not available');
    }

    let error = null;
    try {
        const res = await loginCallbackAction(code, state);
        if (!res.ok) {
            const j = await res.json();
            error = j.detail;
        }
    }
    catch (e) {
        error = (e as Error).message;
    }
    return (
        <Paper sx={{ padding: 2 }}>
            {error ? <LoginError error={error} /> : <LoginSuccess to={state} />}
        </Paper>
    );
};
export default LoginCallbackPage;