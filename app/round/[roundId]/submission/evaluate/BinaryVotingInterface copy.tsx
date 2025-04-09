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
import { Typography } from '@mui/material';
import Link from 'next/link';
const BinaryVotingInterface = ({ goNext, goPrevious, submitScore, saving, evaluation, noPrevious = false, noNext = false, assignmnetCount, evaluationCount, showProgress }: VotingInterfaceProps) => {
    const [currentScore, setCurrentScore] = React.useState<number | null>(evaluation.score)
    useEffect(() => {
        setCurrentScore(evaluation.score)
    }, [evaluation]);
    return (
        <>
            {/* <Typography variant="h4" sx={{ fontFamily: 'Lora, serif', color: 'primary.main', textAlign: 'left', m: 1, display: 'block', width: '100%', fontSize: { xs: 24, }, fontWeight: 'bold' }}>
                Vote
            </Typography> */}
            <div className="flex justify-around items-start ">

                <IconButton color="primary" size="large" onClick={goPrevious} disabled={saving || noPrevious} loading={saving} sx={{ fontSize: 5 }} title='Previous'>
                    <SkipPreviousIcon fontSize='large' sx={{ fontSize: 50 }} />
                </IconButton>
                <IconButton color="primary" size="large" onClick={() => { setCurrentScore(0); submitScore(0); }} disabled={saving} loading={saving} sx={{ fontSize: 5 }} title='No'>
                    <Image src={currentScore === 0 ? CrossIcon.src : CrossOutlinedICON.src} alt="no" width={50} height={50} />
                </IconButton>
                <IconButton color="primary" size="large" onClick={() => { setCurrentScore(100); submitScore(100); }} disabled={saving} loading={saving} sx={{ fontSize: 5 }} title='Yes'>
                    <Image src={currentScore === 100 ? OkIcon.src : OKoutlinedICON.src} alt="yes" width={50} height={50} />
                </IconButton>
                <IconButton color="primary" size="large" onClick={goNext} disabled={saving || noNext} loading={saving} sx={{ fontSize: 5 }} title='Skip'>
                    <SkipNextIcon fontSize='large' sx={{ fontSize: 50 }} />
                </IconButton>
            </div>
            {showProgress &&
                <Typography variant="subtitle1" sx={{ fontFamily: 'Lora, serif', textAlign: 'right', m: 1, display: 'block', width: '100%', px: 2 }}>
                    {evaluationCount} out of {assignmnetCount} completed
                    <br />
                    <Link href={`/round/${evaluation.roundId}/submission/evaluated`} className='text-blue-500 hover:underline'>
                        Modify Votes
                    </Link>
                </Typography>
            }
        </>
    )
}
export default BinaryVotingInterface