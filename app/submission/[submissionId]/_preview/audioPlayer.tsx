"use client";
import React, { createRef, useEffect } from 'react';
import type H5AudioPlayer from 'react-h5-audio-player';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS
import AudioSpectrum from 'react-audio-spectrum';
type AudioAppProps = {
    src: string;
    title: string;
}
const windowWidth = window.innerWidth;

const AudioApp = ({ src }: AudioAppProps) => {
    const audioRef = createRef<H5AudioPlayer>();
    const [audio, setAudio] = React.useState<HTMLAudioElement | null>(null);
    useEffect(() => {
        const audio = audioRef.current?.audio.current;
        if (!audio) {
            return;
        }
        setAudio(audio);
    }, [audioRef, src]);
    return (<> {audio && <AudioSpectrum
        id="audio-canvas4"
        height={200}
        width={windowWidth}
        audioEle={audio}
        meterWidth={10}

        capColor={'green'}
        capHeight={2}
        meterCount={128}
        meterColor={[
            { stop: 0, color: '#0f0' },
            { stop: 0.5, color: '#0CD7FD' },
            { stop: 1, color: 'red' }
        ]}
        gap={4}
    />}
        <AudioPlayer
            src={src}
            ref={audioRef}
            crossOrigin='anonymous'
            showJumpControls={false}
            showSkipControls={false}
        />
    </>);
}
export default AudioApp;
