"use client";
import AnimatedLogo from "@/public/logo-animated.svg";
import Image from "next/image";

const GlobalLoadingPage = () => {
    return (
        <Image
            src={AnimatedLogo.src}
            alt="Loading..."
            width={200}
            height={200}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            priority
            style={{
                width: "200px",
                height: "200px",
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }}
        />
    );
}
export default GlobalLoadingPage;