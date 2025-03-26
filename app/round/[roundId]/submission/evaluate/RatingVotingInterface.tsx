"use client";
import React, { useEffect } from 'react'
import IconButton from '@mui/material/IconButton';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import StarIcon from '@mui/icons-material/Star';
import OutlinedStart from '@mui/icons-material/StarOutline';
import type { VotingInterfaceProps } from './VotingInterface';

const RatingVotingInterface = ({ goNext, goPrevious, submitScore, saving, evaluation }: VotingInterfaceProps) => {
    const [currentScore, setCurrentScore] = React.useState<number | null>(evaluation.score)
    useEffect(() => {
        setCurrentScore(evaluation.score)
    }, [evaluation]);
    return (
        <div className="flex justify-center">
            <IconButton color="primary" size="large" onClick={goPrevious} disabled={saving} loading={saving}>
                <SkipPreviousIcon />
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
                        {i <= (currentScore || 0) ? <StarIcon /> : <OutlinedStart />}
                    </IconButton>
                )
                )
            }

            <IconButton color="primary" size="large" onClick={goNext}>
                <SkipNextIcon />
            </IconButton>
        </div>
    )
}
export default RatingVotingInterface