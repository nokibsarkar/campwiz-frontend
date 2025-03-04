import { Round } from "@/types/round"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import { Button, Paper, Typography } from "@mui/material"
import Link from "next/link"
import FprwardIcon from '@mui/icons-material/ArrowForwardSharp';

const RoundCreationSuccess = (c: Round) => {
    return (
        <Paper sx={{ padding: 2, textAlign: 'center' }}>
            {/* <CheckCircleIcon sx={{ fontSize: 80, color: 'success', textAlign: 'center' }} color="success" /> */}
            <div style={{ maxWidth: '500px', margin: 'auto', width: '99%' }}>
                <DotLottieReact
                    src='/success.lottie'
                    autoplay
                    loop
                // speed={1.5}
                />
            </div>
            <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
                Round Created Successfully
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 2, textAlign: 'center' }}>
                Round {c.name} has been created with id <b>{c.roundId}</b>
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 2, textAlign: 'center' }}>
                Now, would you like to create a round for this round?
                Your organizers can create rounds for this round, too.
                Please Let them know the details.
            </Typography>
            <Link href={`/round/${c.roundId}/round/new`}>
                <Button variant="contained" color="success" endIcon={<FprwardIcon />}>
                    Create Round for Round
                </Button>
            </Link>
        </Paper>
    )
}
export default RoundCreationSuccess