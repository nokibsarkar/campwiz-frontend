'use client';
import Button from "@mui/material/Button"
import loginInitiateAction from "@/provider/session/action";
import { Paper, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";
// import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
// import SuccessImage from '@/public/success.lottie';

import Link from "next/link";
import LottieWrapper from "@/components/LottieWrapper";
const LoginPage = ({ }) => {
    "use client";
    const searchParams = useSearchParams()
    const next = searchParams.get('next');
    const baseURI = location.origin;
    return (
        <Paper sx={{
            padding: 2,
            mx: 'auto', my: 2,
            maxWidth: 500,
            textAlign: 'center',
            minHeight: '80%',
            position: 'fixed',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
            <LottieWrapper src='/login.lottie' />
            <Typography variant="h3" sx={{ mb: 2 }}>
                Login
            </Typography>
            <Typography variant="subtitle1">
                When you click on the Login Button Below, you will be redirected to the Login Page
                located at Meta Wiki. Once you have logged in there and Authorize the Application,
                you will be redirected back here. No worries, we do not store any of your personal
                information unless it is required for the application to function. For more information
                on how we handle your data, please refer to our <Link href="/policy/privacy">Privacy Policy</Link>.
            </Typography>
            <Button
                onClick={() => loginInitiateAction(baseURI, next)}
                variant="contained"
                color="success"
                sx={{
                    mt: 2,
                }}
            >
                Login with Wikimedia
            </Button>
            <Typography variant="body1" sx={{ mt: 2 }}>
                By clicking the button above, you agree to the <Link href="/policy/terms">Terms of Service</Link> and <Link href="/policy/privacy">Privacy Policy</Link>.
            </Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
                After this process, you will be redirected back to the following page:
            </Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
                {next}
            </Typography>
        </Paper>
    )
}
export default LoginPage