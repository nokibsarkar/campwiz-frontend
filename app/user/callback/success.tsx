import LottieWrapper from "@/components/LottieWrapper"
import { Typography } from "@mui/material";

const LoginSuccess = ({ to }: { to: string }) => {
    return (
        <>
            <LottieWrapper src='/lottie/login-success.lottie' />
            <h1 className="text-green-500 font-bold">You have successfully logged in!</h1>
            <Typography variant="body1">You will be redirected to the following page:</Typography>
            <Typography variant="body2">{to}</Typography>
        </>
    )
}
export default LoginSuccess;