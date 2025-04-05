"use client";
import React, { useEffect } from 'react'
import IconButton from '@mui/material/IconButton';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import StarIcon from '@mui/icons-material/Star';
import OutlinedStart from '@mui/icons-material/StarOutline';
import type { VotingInterfaceProps } from './VotingInterface';
import { Typography } from '@mui/material';

const RatingVotingInterface = ({ goNext, goPrevious, submitScore, saving, evaluation, assignmnetCount, evaluationCount, noNext, noPrevious }: VotingInterfaceProps) => {
    const [currentScore, setCurrentScore] = React.useState<number | null>(evaluation.score)
    useEffect(() => {
        setCurrentScore(evaluation.score)
    }, [evaluation]);
    return (
        <>
            <div className="flex justify-around items-start">
                <IconButton color="primary" size="large" onClick={goPrevious} disabled={saving || noPrevious} title='Previous'>
                    <SkipPreviousIcon fontSize='large' />
                </IconButton>
                {
                    [20, 40, 60, 80, 100].map((i) => (
                        <IconButton
                            color="dalgona" size="large" key={i}
                            onClick={() => { setCurrentScore(i); submitScore(i) }}
                            onMouseOver={() => !saving && setCurrentScore(i)}
                            onMouseOut={() => !saving && setCurrentScore(evaluation.score)}
                            disabled={saving}
                        >
                            {i <= (currentScore || 0) ? <StarIcon fontSize='large' /> : <OutlinedStart fontSize='large' />}
                        </IconButton>
                    )
                    )
                }

                <IconButton color="primary" size="large" onClick={goNext} disabled={saving || noNext} title='Skip'>
                    <SkipNextIcon fontSize='large' />
                </IconButton>
            </div>
            <Typography variant="subtitle1" sx={{ fontFamily: 'Lora, serif', textAlign: 'right', m: 1, display: 'block', width: '100%', px: 2 }}>
                {evaluationCount} out of {assignmnetCount} completed
            </Typography>
        </>
    )
}
export default RatingVotingInterface