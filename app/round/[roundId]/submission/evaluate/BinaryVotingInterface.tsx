import React from 'react'
import IconButton from '@mui/material/IconButton';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import CrossIcon from '@/public/cross.svg';
import OkIcon from '@/public/ok.svg';
import Image from "next/image";
import type { VotingInterfaceProps } from './VotingInterface';
const BinaryVotingInterface = ({ goNext, goPrevious, submitScore }: VotingInterfaceProps) => {
    return (
        <div className="flex justify-center">
            <IconButton color="primary" size="large" onClick={goPrevious}>
                <SkipPreviousIcon />
            </IconButton>
            <IconButton color="primary" size="large" onClick={() => submitScore(0)}>
                <Image src={CrossIcon.src} alt="cross" width={24} height={24} />
            </IconButton>
            <IconButton color="primary" size="large" onClick={() => submitScore(100)}>
                <Image src={OkIcon.src} alt="ok" width={24} height={24} />
            </IconButton>
            <IconButton color="primary" size="large" onClick={goNext}>
                <SkipNextIcon />
            </IconButton>
        </div>
    )
}
export default BinaryVotingInterface