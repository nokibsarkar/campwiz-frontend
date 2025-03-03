import type { CampaignCreate } from "@/types/campaign/create";
import { TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { ActionDispatch } from "react";
const CampaignEditForm = ({ dispatch, ...campaign }: CampaignCreate & { dispatch: ActionDispatch<[Partial<CampaignCreate>]> }) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TextField
                label="Name"
                variant="outlined"
                sx={{ m: 2, width: '50%' }}
                onChange={(e) => dispatch({ name: e.target.value })}
                value={campaign.name}
            />
            <DatePicker
                onChange={(date) => dispatch({ startDate: date?.toISOString() })}
                value={dayjs(campaign.startDate)}
                sx={{ m: 2, width: '18%' }}
            />
            <DatePicker
                onChange={(date) => dispatch({ startDate: date?.toISOString() })}
                value={dayjs(campaign.startDate)}
                sx={{ m: 2, width: '18%' }}
            />
        </LocalizationProvider>
    );
}
export default CampaignEditForm;
