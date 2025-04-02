"use client"
import VideoPlayer from 'next-video/player';
import Image from 'next/image';
import { useMemo } from 'react';
type VideoAppProps = {
    src: string;
    poster: string;
    height: number;
    width: number
}

const VideoApp = ({ src, poster, height, width }: VideoAppProps) => {
    "use client"
    // const parentRef = useRef<HTMLDivElement>(null)
    const calculatedWidth = useMemo(() => {
        if (width / height > 9 / 16) {
            return '100%';
        }
        let windowheight = 500, windowwidth = 641;
        if (typeof window !== 'undefined') {
            windowheight = window.innerHeight * 5 / 6 * 0.9// parseInt(c.height.replace('px', ''))
            windowwidth = window.innerWidth * 0.6 // parseInt(c.width.replace('px', ''))
        }
        let calculatedHeight = windowheight, calculatedWidth = windowwidth;
        // try to fit width first
        calculatedHeight = windowwidth * height / width
        if (calculatedHeight > windowheight) {
            calculatedHeight = windowheight
            calculatedWidth = windowheight * width / height
        }
        return calculatedWidth;

    }, [height, width])
    return (
        <div style={{ maxHeight: '90%', maxWidth: '100%', margin: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <VideoPlayer
                controls={true}
                // ref={parentRef}
                src={src}
                onError={(err) => {
                    console.error(err);
                }}
                style={{ maxHeight: '100%', maxWidth: calculatedWidth, position: 'relative', }}
                playsInline
                crossOrigin='anonymous'
            >
                <Image
                    slot="poster"
                    src={poster}
                    fill
                    // placeholder="blur"
                    alt="Some peeps doing something awesome"
                />
            </VideoPlayer>
        </div>
    );
}
export default VideoApp;