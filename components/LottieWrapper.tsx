"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

const LottieWrapper = ({ src, loop = true, marginTop }: { src: string, loop?: boolean, marginTop?: string }) => (
    <div style={{ maxWidth: '500px', margin: 'auto', width: '99%', marginTop: marginTop }}>
        <DotLottieReact
            src={src}
            loop={loop}
            autoplay
            speed={0.8}

        />
    </div>
)
export default LottieWrapper