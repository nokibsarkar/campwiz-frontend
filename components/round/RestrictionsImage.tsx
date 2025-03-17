import { RoundCreate } from "@/types/round";
import { TextField, Typography } from "@mui/material";
import { ActionDispatch } from "react";

const ImageRestrictions = ({ dispatch, loading, disabled = false, ...round }: RoundCreate & { dispatch: ActionDispatch<[Partial<RoundCreate>]>, loading: boolean, disabled?: boolean }) => {
    return (
        <>
            <Typography variant="h6" component='legend'>Restrictions on Images</Typography>
            <TextField
                label="Minimum Image Resolution"
                variant="outlined"
                sx={{
                    m: 1,
                    display: 'inline-block'
                }}
                onChange={(e) => dispatch({ imageMinimumResolution: parseInt(e.target.value) })}
                value={round.imageMinimumResolution}
                disabled={loading || disabled}
            />
            <TextField
                label="Minimum Image Size (Bytes)"
                variant="outlined"
                sx={{
                    m: 1,
                    display: 'inline-block'
                }}
                onChange={(e) => dispatch({ imageMinimumSizeBytes: parseInt(e.target.value) })}
                value={round.imageMinimumSizeBytes}
                disabled={loading || disabled}
            />
        </>
    );
}
export default ImageRestrictions