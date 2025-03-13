'use client';
import Button from "@mui/material/Button"
import loginInitiateAction from "@/provider/session/action";
import { CircularProgress, Paper, Typography, useMediaQuery } from "@mui/material";
import { useSearchParams } from "next/navigation";
import ArrowForward from '@mui/icons-material/ArrowForward';
import LoginBackground from '@/public/login-background.svg';
// import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
// import SuccessImage from '@/public/success.lottie';

import Link from "next/link";
import LottieWrapper from "@/components/LottieWrapper";
import Image from "next/image";
import { useState } from "react";
import WikipediaIcon from "@/components/WikipediaIcon";

const LoginComponent = ({ isMobile }: { isMobile: boolean }) => {
    "use client";
    const searchParams = useSearchParams()
    const next = searchParams.get('next');
    const baseURI = location.origin;
    const [clicked, setClicked] = useState(false);
    return (
        <Paper sx={{
            padding: 2,
            ml: 'auto',
            mr: 0,
            textAlign: 'center',
            height: '100%',
            position: 'fixed',
            right: 0,

            backgroundColor: isMobile ? 'rgba(255,255,255, 0.95)' : 'rgba(255,255,255, 0.9)',
            width: {
                xs: '100%',
                sm: '70%',
                md: '50%',
                lg: '40%',
                xl: '40%'
            }
            // top: '50%', left: '50%',
            // transform: 'translate(-50%, -50%)'
        }}>
            <Image src='/logo.svg' alt="Logo" width={100} height={100} style={{ margin: 'auto' }} />
            <LottieWrapper src='/lottie/login-required.lottie' loop={true} />
            <Typography variant="h5" sx={{ mb: 2 }}>
                Let&apos;s Get Started
            </Typography>
            <Button
                onClick={() => {
                    loginInitiateAction(baseURI, next)
                    setClicked(true)
                }}
                variant="contained"
                color="primary"
                sx={{
                    mt: 2,
                    borderRadius: 10,
                    p: 1,
                    px: 2,
                    mb: 3
                }}
                disabled={clicked}
                startIcon={<WikipediaIcon />}
                endIcon={!clicked && <ArrowForward />}
            >
                Login with Wikimedia

                {clicked && <CircularProgress size={24} sx={{ ml: 1 }} />}
            </Button>
            <Typography variant="body1" sx={{ mt: 2 }}>
                By clicking the button above, you agree to the <Link style={{ color: 'blue' }} href="/policy/terms">Terms of Service</Link> and <Link style={{ color: 'blue' }} href="/policy/privacy">Privacy Policy</Link>.
            </Typography>
            {next && <><Typography variant="body2" sx={{ mt: 2 }}>
                After this process, you will be redirected back to the following page:
            </Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                    {next}
                </Typography>
            </>}
        </Paper>
    )
}
const LoginPage = ({ }) => {
    const isMobile = useMediaQuery('(max-width:600px)');

    return (<Paper sx={{
        backgroundImage: `url(${LoginBackground.src})`,
        backgroundSize: 'cover',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        p: 0,
        m: 0,
        border: 0,
    }}>
        <LoginComponent isMobile={isMobile} />
    </Paper>
    )
}
export default LoginPage