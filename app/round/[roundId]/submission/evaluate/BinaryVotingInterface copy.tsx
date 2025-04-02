import React, { useEffect } from 'react'
import IconButton from '@mui/material/IconButton';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import CrossIcon from '@/public/cross.svg';
import OkIcon from '@/public/ok.svg';
import OKoutlinedICON from '@/public/ok-outlined.svg';
import CrossOutlinedICON from '@/public/cross-outlined.svg';
import Image from "next/image";
import type { VotingInterfaceProps } from './VotingInterface';
const BinaryVotingInterface = ({ goNext, goPrevious, submitScore, saving, evaluation, noPrevious = false, noNext = false }: VotingInterfaceProps) => {
    const [currentScore, setCurrentScore] = React.useState<number | null>(evaluation.score)
    useEffect(() => {
        setCurrentScore(evaluation.score)
    }, [evaluation]);
    return (
        <div className="flex justify-around items-start">
            <IconButton color="primary" size="large" onClick={goPrevious} disabled={saving || noPrevious} loading={saving}>
                <SkipPreviousIcon fontSize='large' />
            </IconButton>
            <IconButton color="primary" size="large" onClick={() => { setCurrentScore(0); submitScore(0); }} disabled={saving} loading={saving}>
                <Image src={currentScore === 0 ? CrossIcon.src : CrossOutlinedICON.src} alt="no" width={30} height={30} />
            </IconButton>
            <IconButton color="primary" size="large" onClick={() => { setCurrentScore(100); submitScore(100); }} disabled={saving} loading={saving}>
                <Image src={currentScore === 100 ? OkIcon.src : OKoutlinedICON.src} alt="yes" width={30} height={30} />
            </IconButton>
            <IconButton color="primary" size="large" onClick={goNext} disabled={saving || noNext} loading={saving}>
                <SkipNextIcon fontSize='large' />
            </IconButton>
        </div>
    )
}
export default BinaryVotingInterface