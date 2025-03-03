import type { CampaignCreate } from "@/types/campaign/create";
import { Autocomplete, Box, Checkbox, TextField, Typography } from "@mui/material";
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
                    sx={{ m: 1, width: '80%' }}
                    onChange={(e) => dispatch({ description: e.target.value })}
                    value={campaign.description}
                    multiline
                />
                <Autocomplete
                    options={[
                        'bn', 'en', 'es', 'fr', 'de', 'hi', 'it', 'ja', 'ko', 'pt', 'ru', 'zh'
                    ]}
                    renderInput={(params) => <TextField {...params} label="Language" variant="outlined" />}
                    sx={{ m: 1, width: '10%', display: 'inline-block' }}
                    value={campaign.language}
                    onChange={(e, value) => dispatch({ language: value as string })}
                />
            </Box>
            <Box component='fieldset' sx={{ m: 2, border: 1, p: 2 }}>
                <Typography component="legend">Associated People</Typography>


            </Box>
            <Box component='fieldset' sx={{ m: 2, border: 1, p: 2 }}>
                <Typography component="legend">Restrictions</Typography>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Checkbox value={campaign.allowCreations} onChange={(e) => dispatch({ allowCreations: e.target.checked })} />
                    <Typography>Allow Creations</Typography>
                </div>
            </Box>

        </LocalizationProvider>
    );
}
export default CampaignEditForm;
