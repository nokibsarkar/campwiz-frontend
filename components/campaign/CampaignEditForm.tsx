import type { CampaignCreate } from "@/types/campaign/create";
import { Autocomplete, TextField, } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { ActionDispatch } from "react";
import UserInput from "../user/UserInput";
const CampaignEditForm = ({ dispatch, loading, disabled = false, ...campaign }: CampaignCreate & { dispatch: ActionDispatch<[Partial<CampaignCreate>]>, loading: boolean, disabled?: boolean }) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TextField
                label="Name"
                variant="outlined"
                sx={{ m: 1, width: '50%' }}
                onChange={(e) => dispatch({ name: e.target.value })}
                value={campaign.name}
                disabled={loading || disabled}
            />
            <DatePicker
                onChange={(date) => dispatch({ startDate: date?.toISOString() })}
                value={dayjs(campaign.startDate)}
                sx={{ m: 1, width: { xs: '100%', sm: '18%' } }}
                label="Start Date"
                disabled={loading || disabled}
            />
            <DatePicker
                onChange={(date) => dispatch({ endDate: date?.toISOString() })}
                value={dayjs(campaign.endDate)}
                sx={{ m: 1, width: { xs: '100%', sm: '18%' } }}
                label="End Date"
                disabled={loading || disabled}
            />
            <TextField
                label="Description"
                variant="outlined"
                sx={{ m: 1, width: '48%' }}
                onChange={(e) => dispatch({ description: e.target.value })}
                value={campaign.description}
                multiline
                minRows={4}
                disabled={loading || disabled}
            />
            <TextField
                label="Rules"
                variant="outlined"
                sx={{ m: 1, width: '48%' }}
                onChange={(e) => dispatch({ rules: e.target.value })}
                value={campaign.rules}
                multiline
                minRows={4}
                disabled={loading || disabled}
            />
            <br />
            <Autocomplete
                options={[
                    'commons'
                ]}
                renderInput={(params) => <TextField {...params} label="Language" variant="outlined" />}
                sx={{ m: 1, }}
                value={campaign.language}
                onChange={(e, value) => dispatch({ language: value as string })}
                disabled={loading || disabled}
            />
            <UserInput
                value={campaign.organizers}
                onChange={(organizers) => dispatch({ organizers })}
                label="Organizers"
                disabled={loading || disabled}
            />
            <UserInput
                value={campaign.coordinators}
                onChange={(coordinators) => dispatch({ coordinators })}
                label="Coordinators"
                disabled={loading || disabled}

            />
        </LocalizationProvider>
    );
}
export default CampaignEditForm;
