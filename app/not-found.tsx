"use client";
import { Paper, Typography } from "@mui/material";
import LottieWrapper from "@/components/LottieWrapper";
export default function NotFound() {
    return <Paper sx={{ padding: 2, textAlign: 'center', color: 'error', my: 2, height: '80%', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }
    }>,
        <LottieWrapper src='/lottie/not-found.lottie' />
        <Typography variant="h2">Not Found</Typography>
        <Typography variant="body1">
            The Page you were looking for was not found.
            Sorry about that.
        </Typography>
    </Paper >
}