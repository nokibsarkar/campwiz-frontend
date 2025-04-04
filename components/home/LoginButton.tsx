
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Button from '@mui/material/Button';
import Link from 'next/link';
const LoginButton = () => {
    const sx = {
        bgcolor: "#006699", // Blue background color
        color: "#fff", // White text color
        borderRadius: 30,
        m: 1,
        px: 2,
        transition: "0.3s",
        "&:hover": {
            bgcolor: "#00557d", // Darker blue background on hover
            transform: "scale(1.05)",
        },
    }
    return (
        <Link href="/user/login">
            <Button
                variant="contained"
                startIcon={<LockOpenIcon />}
                sx={sx}
            >
                Login
            </Button>
        </Link>
    )
}
export default LoginButton