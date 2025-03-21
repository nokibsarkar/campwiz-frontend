"use client";
import React from 'react'
import IconButton from '@mui/material/IconButton';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import StarIcon from '@mui/icons-material/Star';
import OutlinedStart from '@mui/icons-material/StarOutline';
import type { VotingInterfaceProps } from './VotingInterface';

const RatingVotingInterface = ({ score = 0, goNext, goPrevious, submitScore }: VotingInterfaceProps) => {
    const [currentScore, setCurrentScore] = React.useState(score)
    return (
        <div className="flex justify-center">
            <IconButton color="primary" size="large" onClick={goPrevious}>
                <SkipPreviousIcon />
            </IconButton>
            {
                [20, 40, 60, 80, 100].map((i) => {
                    return (
                        <IconButton color="dalgona" size="large" key={i} onClick={() => submitScore(i)} onMouseOver={() => setCurrentScore(i)} onMouseOut={() => setCurrentScore(score)}>
                            {i <= (currentScore || 0) ? <StarIcon /> : <OutlinedStart />}
                        </IconButton>
                    )
                })
            }

            <IconButton color="primary" size="large" onClick={goNext}>
                <SkipNextIcon />
            </IconButton>
        </div>
    )
}
export default RatingVotingInterface