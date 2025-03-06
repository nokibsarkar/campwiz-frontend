'use client';
import { Paper, Typography } from "@mui/material";
import LottieWrapper from "@/components/LottieWrapper";
export default function GlobalErrorPage() {
    return <Paper sx={{ padding: 2, textAlign: 'center', color: 'error', my: 2, height: '80%', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>,
        <LottieWrapper src='/error.lottie' />
        <Typography variant="h2">Something went wrong</Typography>
        <Typography variant="body1">
            An error occurred while trying to load this page.
            Sorry about that.
        </Typography>
    </Paper>
}