import { DotLottieReact } from "@lottiefiles/dotlottie-react"

const LottieWrapper = ({ src }: { src: string }) => (
    <div style={{ maxWidth: '500px', margin: 'auto', width: '99%' }}>
        <DotLottieReact
            src={src}
            loop
            autoplay
        />
    </div>
)
export default LottieWrapper