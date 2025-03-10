import { Campaign } from "@/types"
import { Button, Card, CardActions, CardContent, CardHeader, Chip, Typography } from "@mui/material"
import Link from "next/link"
import RightArrowIcon from '@mui/icons-material/ArrowRight';
// import Image from "next/image";

type SingleCampaignChipProps = {
    campaign: Campaign
}
const SingleCampaignChip = ({ campaign }: SingleCampaignChipProps) => {
    return (

        <Card sx={{
            cursor: 'pointer',
            boxShadow: 1, margin: 1, p: 2,
            display: 'inline-block',
            borderRadius: 8,
            '&:hover': {
                boxShadow: 3
            },
            width: {
                xs: 'calc(95% - 4px)',
                sm: 'calc(50% - 4px)',
                md: 'calc(33.33% - 4px)',
                lg: 'calc(30% - 4px)',
                xl: 'calc(28% - 4px)',
            },
            mx: 2,
            backgroundColor: 'rgba(255,255,255,0.9)',
        }}>
            <CardHeader
                title={<Typography variant="h6">{campaign.name}</Typography>}
                subheader={
                    <Typography variant="body2">
                        {new Date(campaign.startDate).toUTCString()} - {new Date(campaign.endDate).toUTCString()}
                    </Typography>
                }
            />
            <CardContent>
                <Typography variant="body1">
                    {campaign.description}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-between' }}>
                <Chip label={'Running'} color="success" variant="outlined" sx={{ marginRight: 1, p: 1 }} />
                <Link href={`/campaign/${campaign.campaignId}`} style={{}}>
                    <Button color="primary" endIcon={<RightArrowIcon />} variant="outlined" sx={{ borderRadius: 8, px: 2 }}>
                        Learn More
                    </Button>

                </Link>
            </CardActions>
        </Card>
    )
}
export default SingleCampaignChip