import LottieWrapper from "@/components/LottieWrapper"
import { Campaign } from "@/types"
import { Button, Paper, Typography } from "@mui/material"
import Link from "next/link"
import ForwardIcon from '@mui/icons-material/Forward';

const CampaignCreationSuccess = (c: Campaign) => {
    return (
        <Paper sx={{ padding: 2, textAlign: 'center' }}>
            <LottieWrapper src='/lottie/success.lottie' />
            <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
                Campaign Created Successfully
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 2, textAlign: 'center' }}>
                Campaign {c.name} has been created with id <b>{c.campaignId}</b>
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 2, textAlign: 'center' }}>
                Now, would you like to create a round for this campaign?
                Your organizers can create rounds for this campaign, too.
                Please Let them know the details.
            </Typography>
            <Link href={`/campaign/${c.campaignId}/round/new`}>
                <Button variant="contained" color="success" endIcon={<ForwardIcon />}>
                    Create Round for Campaign
                </Button>
            </Link>
        </Paper>
    )
}
export default CampaignCreationSuccess