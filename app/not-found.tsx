"use client";
import { Paper, Typography } from "@mui/material";
import ErrorIcon from '@/public/molumen-red-square-error-warning-icon.svg';
import Image from "next/image";
export default function NotFound() {
    return <Paper sx={{ padding: 2, textAlign: 'center', color: 'error', my: 2, height: '80%', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', pt: 5 }
    }>
        <Image
            src={ErrorIcon.src}
            alt="Error"
            width={200}
            height={200}
            priority
            style={{
                width: "200px",
                height: "auto",
                margin: "auto",
                position: "relative",
                marginTop: '20px',
                // top: "50%",
                // left: "50%",
                // transform: "translate(-50%, -50%)",
            }}
        />
        <Typography variant="h2">Not Found</Typography>
        <Typography variant="body1">
            The Page you were looking for was not found.
            Sorry about that.
        </Typography>
    </Paper >
}