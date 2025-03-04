import type { CampaignCreate } from "@/types/campaign/create";
import { Autocomplete, TextField, } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { ActionDispatch } from "react";
import UserInput from "../user/UserInput";
const CampaignEditForm = ({ dispatch, ...campaign }: CampaignCreate & { dispatch: ActionDispatch<[Partial<CampaignCreate>]> }) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TextField
                label="Name"
                variant="outlined"
                sx={{ m: 1, width: '50%' }}
                onChange={(e) => dispatch({ name: e.target.value })}
                value={campaign.name}
            />
            <DatePicker
                onChange={(date) => dispatch({ startDate: date?.toISOString() })}
                value={dayjs(campaign.startDate)}
                sx={{ m: 1, width: '18%' }}
                label="Start Date"
            />
            <DatePicker
                onChange={(date) => dispatch({ endDate: date?.toISOString() })}
                value={dayjs(campaign.endDate)}
                sx={{ m: 1, width: '18%' }}
                label="End Date"
            />
            <TextField
                label="Description"
                variant="outlined"
                sx={{ m: 1, width: '48%' }}
                onChange={(e) => dispatch({ description: e.target.value })}
                value={campaign.description}
                multiline
                minRows={4}
            />
            <TextField
                label="Rules"
                variant="outlined"
                sx={{ m: 1, width: '48%' }}
                onChange={(e) => dispatch({ rules: e.target.value })}
                value={campaign.rules}
                multiline
                minRows={4}
            />
            <br />
            <Autocomplete
                options={[
                    'bn', 'en', 'es', 'fr', 'de', 'hi', 'it', 'ja', 'ko', 'pt', 'ru'
                ]}
                renderInput={(params) => <TextField {...params} label="Language" variant="outlined" />}
                sx={{ m: 1, width: '10%', display: 'inline-block' }}
                value={campaign.language}
                onChange={(e, value) => dispatch({ language: value as string })}
            />
            <UserInput
                value={campaign.organizers}
                onChange={(organizers) => dispatch({ organizers })}
                label="Organizers"
            />
            <UserInput
                value={campaign.coordinators}
                onChange={(coordinators) => dispatch({ coordinators })}
                label="Coordinators"

            />
            {/* <Box component='fieldset' sx={{ m: 2, border: 1, p: 2 }}>
                <Typography component="legend">Restrictions</Typography>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Checkbox value={campaign.allowCreations} onChange={(e) => dispatch({ allowCreations: e.target.checked })} />
                    <Typography>Allow Creations</Typography>
                </div>
            </Box> */}

        </LocalizationProvider>
    );
}
export default CampaignEditForm;
