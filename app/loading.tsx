"use client";
import AnimatedLogo from "@/public/logo-animated.svg";
import Image from "next/image";

const GlobalLoadingPage = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center backdrop-blur-[3px]">
            <Image
                src={AnimatedLogo.src}
                alt="Loading..."
                width={300}
                height={300}
                className="fixed top-1/2 left-1/2 -translate-1/2"
                priority
                style={{
                    width: "300px",
                    height: "auto",
                    // top: "50%",
                    // left: "50%",
                    // transform: "translate(-50%, -50%)",
                }}
            />
        </div>
    );
}
export default GlobalLoadingPage;