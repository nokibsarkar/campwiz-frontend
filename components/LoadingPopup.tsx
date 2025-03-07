import LottieWrapper from "./LottieWrapper";

const LoadingPopup = ({ src = '/lottie/loading.lottie', message = 'Loading' }: { src?: string, message?: string }) => (
    <div className="loading-popup fixed top-0 left-0 w-full h-full bg-transparent z-50 flex items-center justify-center flex-col backdrop-blur-[10px]">
        <LottieWrapper src={src} />
        {message && <p>{message}</p>}
    </div>
)
export default LoadingPopup;