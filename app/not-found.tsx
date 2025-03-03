import { Paper, Typography } from "@mui/material";
import ErrorIcon from '@mui/icons-material/Error';
export default function NotFound() {
    return <Paper sx={{ padding: 2, textAlign: 'center', color: 'error', my: 2, height: '80%', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>,
        <ErrorIcon sx={{ fontSize: 100 }} color="error" />
        <Typography variant="h1">404</Typography>
        <Typography variant="h2">Not Found</Typography>
        <Typography variant="body1">
            The Page you were looking for was not found.
            Sorry about that.
        </Typography>
    </Paper>
}