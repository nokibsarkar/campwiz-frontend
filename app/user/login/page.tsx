import Button from "@mui/material/Button"
import loginInitiateAction from "@/components/providers/session/action";

const LoginPage = ({ }) => {
    return (
        <div>
            <Button
                onClick={loginInitiateAction}
            >
                Login
            </Button>
        </div>
    )
}
export default LoginPage