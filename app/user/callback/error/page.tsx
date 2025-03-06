
import LottieWrapper from "@/components/LottieWrapper";
import { Button, Paper } from "@mui/material";
import Link from "next/link";

const LoginError = async ({ searchParams }: { searchParams: Promise<{ error: string, state: string }> }) => {
    const { error, state = '/' } = await searchParams;
    return (
        <Paper sx={{ padding: 2 }}>
            <LottieWrapper src='/login-failed.lottie' />
            <h1 className="text-red-500 font-bold">Sorry there was an error logging you in!</h1>
            <p className="text-red-500 font-bold">{error}</p>
            <Link href={"/user/login?next=" + state}><Button
                variant="contained"
                color="error"
            >
                Try Again
            </Button>
            </Link>
        </Paper>
    )
}
export default LoginError;