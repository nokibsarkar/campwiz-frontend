"use client";
import { Button, useMediaQuery } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import Link from "next/link";

const EditButton = ({ campaignId }: { campaignId: string }) => {

    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        isSmall ? null : (
            <Link href={`/campaign/${campaignId}/edit`}>
                <Button variant="outlined" color="primary" startIcon={<EditIcon />}
                    sx={{
                        borderRadius: 3,
                    }}
                >Edit</Button>
            </Link>
        )
    )
}
export default EditButton;