import { RoundCreate } from "@/types/round";
import { TextField, Typography } from "@mui/material";
import { ActionDispatch } from "react";

const VideoRestrictions = ({ dispatch, loading, disabled = false, ...round }: RoundCreate & { dispatch: ActionDispatch<[Partial<RoundCreate>]>, loading: boolean, disabled?: boolean }) => {
    return (
        <>
            <Typography variant="h6" component='legend'>Restrictions on Videos</Typography>
            <TextField
                label="Minimum Video Resolution"
                variant="outlined"
                sx={{
                    m: 1,
                    display: 'inline-block'
                }}
                onChange={(e) => dispatch({ videoMinimumResolution: parseInt(e.target.value) })}
                value={round.videoMinimumResolution}
                disabled={loading || disabled}
            />
            <TextField
                label="Minimum Video Size (Bytes)"
                variant="outlined"
                sx={{
                    m: 1,
                    display: 'inline-block'
                }}
                onChange={(e) => dispatch({ videoMinimumSizeBytes: parseInt(e.target.value) })}
                value={round.videoMinimumSizeBytes}
                disabled={loading || disabled}
            />
            <TextField
                label="Minimum Video Duration (Milliseconds)"
                variant="outlined"
                sx={{
                    m: 1,
                    display: 'inline-block'
                }}
                onChange={(e) => dispatch({ videoMinimumDurationMilliseconds: parseInt(e.target.value) })}
                value={round.videoMinimumDurationMilliseconds}
                disabled={loading || disabled}
            />
        </>
    );
}
export default VideoRestrictions