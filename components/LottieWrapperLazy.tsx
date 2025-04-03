"use client";
import { lazy, Suspense } from "react";
const DotLottieReact = lazy(() => import('@lottiefiles/dotlottie-react').then((module) => ({ default: module.DotLottieReact })));
const LottieWrapper = ({ src, loop = true, marginTop }: { src: string, loop?: boolean, marginTop?: string }) => (
    <div style={{ maxWidth: '500px', margin: 'auto', width: '99%', marginTop: marginTop }}>
        <Suspense fallback={<div>Loading...</div>}>
            <DotLottieReact
                src={src}
                loop={loop}
                autoplay

            />
        </Suspense>
    </div>
)
export default LottieWrapper