"use client";
import EditIcon from '@mui/icons-material/Edit';
import NokiberButton from "@/components/NokiberButton";


const EditButton = ({ campaignId }: { campaignId: string }) => (
    <NokiberButton
        label="Edit"
        link={`/campaign/${campaignId}/edit`}
        startIcon={<EditIcon />}
        variant="outlined"
        color="primary"
        sx={{
            borderRadius: 3,
        }}
    />
)
export default EditButton;