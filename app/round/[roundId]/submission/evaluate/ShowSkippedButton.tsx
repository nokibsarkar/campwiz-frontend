import { Button } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
const SHowSkippedButton = ({ skipCount }: { skipCount: number, roundId: string, campaignId: string }) => {
    return <Button variant="outlined" color="secondary" sx={{ m: 1 }} endIcon={<EditIcon />} onClick={() => typeof window !== "undefined" && window.location.reload()}>
        Show skipped {skipCount} submissions
    </Button>
}
export default SHowSkippedButton