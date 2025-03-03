'use client';
import { Paper, Typography } from "@mui/material";
import ErrorIcon from '@mui/icons-material/Error';
export default function GlobalErrorPage() {
    return <Paper sx={{ padding: 2, textAlign: 'center', color: 'error', my: 2, height: '80%', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>,
        <ErrorIcon sx={{ fontSize: 100 }} color="error" />
        <Typography variant="h2">Something went wrong</Typography>
        <Typography variant="body1">
            An error occurred while trying to load this page.
            Sorry about that.
        </Typography>
    </Paper>
}