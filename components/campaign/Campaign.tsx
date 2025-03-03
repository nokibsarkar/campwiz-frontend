import type { CampaignCreate } from "@/types/campaign/create";
import { Box, TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { ActionDispatch } from "react";
const CampaignEditForm = ({ dispatch, ...campaign }: CampaignCreate & { dispatch: ActionDispatch<[Partial<CampaignCreate>]> }) => {
    console.log(campaign)
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box component='fieldset' sx={{ m: 2, border: 1, p: 1 }}>
                <Typography component="legend">Details</Typography>
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
            </Box>
            <Box component='fieldset' sx={{ m: 2, border: 1, p: 2 }}>
                <Typography component="legend">Associated People</Typography>
                <TextField
                    label="Budget"
                    variant="outlined"
                    onChange={(e) => dispatch({ budget: Number(e.target.value) })}
                    value={campaign.budget}
                />

            </Box>
            <Box component='fieldset' sx={{ m: 2, border: 1, p: 2 }}>
                <Typography component="legend">Restrictions</Typography>
                <TextField
                    label="Budget"
                    variant="outlined"
                    onChange={(e) => dispatch({ budget: Number(e.target.value) })}
                    value={campaign.budget}
                />

            </Box>
        </LocalizationProvider>
    );
}
export default CampaignEditForm;
