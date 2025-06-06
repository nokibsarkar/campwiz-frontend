import LottieWrapper from "@/components/LottieWrapper"
import { Campaign } from "@/types"
import { Button, Paper, Typography } from "@mui/material"
import Link from "next/link"
// import BackWardIcon from '@mui/icons-material/ArrowBack';
import ReturnButton from "@/components/ReturnButton";
import Logo from "@/components/Logo";
import ArrowForward from "@mui/icons-material/ArrowForward";
const CampaignCreationSuccess = (c: Campaign) => {
    return (
        <Paper sx={{ padding: 2, textAlign: 'center', borderRadius: 7, maxWidth: 800 }}>
            <Logo />
            <LottieWrapper src='/lottie/success.lottie' marginTop="-1em" />
            <Typography variant="h6" sx={{ mb: 2, textAlign: 'center', mt: -3 }} color='success'>
                Campaign Created Successfully
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 2, textAlign: 'center' }}>
                Campaign {c.name} has been created with id <Typography variant="body1" component="b" color='primary' sx={{ fontWeight: 'bold' }}>{c.campaignId}</Typography>
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 2, textAlign: 'center' }}>
                Now, would you like to create a round for this campaign?
                Your organizers can create rounds for this campaign, too.
                Please Let them know the details.
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                <ReturnButton sx={{ borderRadius: 7, px: 2 }} />
                <Link href={`/campaign/${c.campaignId}`}>
                    <Button variant="contained" color="primary" endIcon={<ArrowForward />} sx={{ borderRadius: 7, mb: 2, mt: 1, mr: 2, px: 2, py: 1 }}>
                        Go to Campaign
                    </Button>
                </Link>
                {/* <Link href={`/campaign/${c.campaignId}/round/new`}>
                <Button variant="contained" color="success" startIcon={<AddIcon />} sx={{ borderRadius: 7, mb: 2, mt: 1 }}>
                    Create Round for Campaign
                </Button>
            </Link> */}
            </div>
        </Paper>
    )
}
export default CampaignCreationSuccess