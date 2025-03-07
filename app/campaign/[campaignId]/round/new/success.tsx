import { Round } from "@/types/round"
import { Button, Paper, Typography } from "@mui/material"
import Link from "next/link"
import Backward from '@mui/icons-material/ArrowBackIosNew';
import AddIcon from '@mui/icons-material/Add';
import RightArrowIcon from '@mui/icons-material/ArrowForward';
import RoundDetails from "@/components/round/RoundDetails";
import LottieWrapper from "@/components/LottieWrapper";

const RoundCreationSuccess = ({ clearCreatedRound, ...c }: Round & { clearCreatedRound: () => void }) => {
    return (
        <Paper sx={{ padding: 2, textAlign: 'center' }}>
            <LottieWrapper src='/lottie/success.lottie' />
            <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>
                Round Created Successfully
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 2, textAlign: 'center' }}>
                Round {c.name} has been created with id <b>{c.roundId}</b>
            </Typography>
            <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
                Details of the round are as follows:
            </Typography>
            <RoundDetails round={c} />
            <br />
            <Link href={`/campaign/${c.campaignId}`}>
                <Button variant="outlined" color="info" startIcon={<Backward />} sx={{ m: 1 }}>
                    Go to Campaign Page
                </Button>
            </Link>
            <Button variant="outlined" color="success" sx={{ m: 1 }} endIcon={<AddIcon />} onClick={clearCreatedRound}>
                Create Another Round
            </Button>
            <Link href={`/round/${c.roundId}`}>
                <Button variant="contained" color="success" endIcon={<RightArrowIcon />} sx={{ m: 1 }}>
                    Go to Round Page
                </Button>
            </Link>
        </Paper>
    )
}
export default RoundCreationSuccess