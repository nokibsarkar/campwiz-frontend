import { Round, RoundFilter } from "@/types/round";
import useSWR from "swr";
import fetchListRounds from "./actions/fetchRound";
import { CircularProgress, MenuItem, TextField, Typography } from "@mui/material";
import { IDType } from "@/types";
type RoundInputProps = {
    filter: Partial<RoundFilter>
    onChange: (round: IDType) => void
    label: string
    disabled?: boolean
    sx?: { [key: string]: unknown }
    value: IDType
}
const RoundInput = ({ filter, value, onChange, label, sx, disabled }: RoundInputProps) => {
    const { data: rounds, isLoading, error } = useSWR(filter, fetchListRounds);
    if (isLoading) return <Typography color="info" sx={{ m: 1, p: 1 }}><CircularProgress size={24} />Loading Round List</Typography>
    if (error) return <Typography color="error">Failed to load rounds</Typography>
    return (
        <TextField
            select
            label={label}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            helperText="Please select a round"
            disabled={isLoading || !rounds || disabled}
            sx={{ ...(sx || {}), m: 1 }}
        >
            {rounds?.map((round: Round) => (
                <MenuItem key={round.roundId} value={round.roundId}>
                    {round.name} (#{round.roundId})
                </MenuItem>
            ))}
        </TextField>
    )
};
export default RoundInput