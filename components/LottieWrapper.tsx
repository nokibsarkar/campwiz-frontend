"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

const LottieWrapper = ({ src, loop = true, }: { src: string, loop?: boolean }) => (
    <div style={{ maxWidth: '500px', margin: 'auto', width: '99%' }}>
        <DotLottieReact
            src={src}
            loop={loop}
            autoplay
        />
    </div>
)
export default LottieWrapper