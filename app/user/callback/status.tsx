
import LottieWrapper from "@/components/LottieWrapper";

const LoginError = ({ error }: { error: string }) => <>
    <LottieWrapper src='/login-failed.lottie' />
    <h1 className="text-red-500 font-bold">{error}</h1>
</>
export default LoginError;