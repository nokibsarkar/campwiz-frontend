"use client"
import { Button } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import addMyselfAsPublicJury from "./addMyselfAsPublicJury";
import { useState } from "react";

const AddAsJuryButton = ({ roundId, refresh }: { roundId: string, refresh: () => void }) => {
    const [adding, setAdding] = useState(false);
    const submit = async () => {
        try {
            setAdding(true);
            const resp = await addMyselfAsPublicJury(roundId);
            if (resp) {
                console.log('Added as jury')
            }
            if ('detail' in resp) {
                console.error(resp.detail)
                throw new Error(resp.detail)
            }
            refresh();
        } finally {
            setAdding(false);
        }
    }
    return (
        <Button
            startIcon={<AddIcon />}
            variant="contained"
            color="success"
            disabled={adding}
            loading={adding}
            onClick={submit}
            sx={{ m: 1, px: 3, borderRadius: 3, }}
        >
            Add myself as jury
        </Button>
    )
}
export default AddAsJuryButton