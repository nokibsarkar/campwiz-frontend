import { MediaType, type EvaluationType, type RoundCreate } from "@/types/round";
import { Autocomplete, Checkbox, Divider, FormControlLabel, FormGroup, TextField, Typography, } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { ActionDispatch } from "react";
import AudioIcon from "@mui/icons-material/AudioFile";
import VideoIcon from "@mui/icons-material/VideoLibrary";
import ArticleIcon from "@mui/icons-material/Article";
import BitmapIcon from "@mui/icons-material/Image";
import UserInput from "../user/UserInput";
const RoundEditForm = ({ dispatch, loading, disabled = false, ...round }: RoundCreate & { dispatch: ActionDispatch<[Partial<RoundCreate>]>, loading: boolean, disabled?: boolean }) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TextField
                label="Name"
                variant="outlined"
                sx={{
                    m: 1, width: {
                        xs: '100%',
                        sm: '48%',
                    }
                }}
                onChange={(e) => dispatch({ name: e.target.value })}
                value={round.name}
                disabled={loading || disabled}
            />
            <DatePicker
                onChange={(date) => dispatch({ startDate: date?.toISOString() })}
                value={dayjs(round.startDate)}
                sx={{ m: 1, width: { xs: '100%', sm: '18%' } }}
                label="Start Date"
                disabled={loading || disabled}
            />
            <DatePicker
                onChange={(date) => dispatch({ endDate: date?.toISOString() })}
                value={dayjs(round.endDate)}
                sx={{ m: 1, width: { xs: '100%', sm: '18%' } }}
                label="End Date"
                disabled={loading || disabled}
            />
            <TextField
                label="Description"
                variant="outlined"
                sx={{
                    m: 1, width: {
                        xs: '100%',
                        sm: '48%',
                    }
                }}
                onChange={(e) => dispatch({ description: e.target.value })}
                value={round.description}
                multiline
                disabled={loading || disabled}
            />
            <UserInput
                value={round.jury}
                onChange={(jury) => dispatch({ jury })}
                label="Jury"
                disabled={loading || disabled}
                sx={{
                    m: 1, width: {
                        xs: '100%',
                        sm: '48%',
                    }, display: 'inline-block'
                }}
            />
            <Divider />
            <FormGroup sx={{ m: 1, p: 1, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>

                <FormControlLabel control={<Checkbox
                    checked={round.allowedMediaTypes.includes(MediaType.ARTICLE)}
                    onChange={(e) => dispatch({ allowedMediaTypes: e.target.checked ? [...round.allowedMediaTypes, MediaType.ARTICLE] : round.allowedMediaTypes.filter((t) => t !== MediaType.ARTICLE) })}
                    disabled={loading || disabled}
                />}
                    label={<Typography variant="body1"><ArticleIcon /> Article</Typography>}
                    sx={{ m: 1 }}
                />
                <FormControlLabel control={<Checkbox
                    checked={round.allowedMediaTypes.includes(MediaType.BITMAP)}
                    onChange={(e) => dispatch({ allowedMediaTypes: e.target.checked ? [...round.allowedMediaTypes, MediaType.BITMAP] : round.allowedMediaTypes.filter((t) => t !== MediaType.BITMAP) })}
                    disabled={loading || disabled}
                />}
                    label={<Typography variant="body1"><BitmapIcon /> Image</Typography>}
                    sx={{ m: 1 }}
                />
                <FormControlLabel control={<Checkbox
                    checked={round.allowedMediaTypes.includes(MediaType.AUDIO)}
                    onChange={(e) => dispatch({ allowedMediaTypes: e.target.checked ? [...round.allowedMediaTypes, MediaType.AUDIO] : round.allowedMediaTypes.filter((t) => t !== MediaType.AUDIO) })}
                    disabled={loading || disabled}
                />}
                    label={<Typography variant="body1"><AudioIcon /> Audio</Typography>}
                    sx={{ m: 1 }}
                />
                <FormControlLabel control={<Checkbox
                    checked={round.allowedMediaTypes.includes(MediaType.VIDEO)}
                    onChange={(e) => dispatch({ allowedMediaTypes: e.target.checked ? [...round.allowedMediaTypes, MediaType.VIDEO] : round.allowedMediaTypes.filter((t) => t !== MediaType.VIDEO) })}
                    disabled={loading || disabled}
                />}
                    label={<Typography variant="body1"><VideoIcon /> Video</Typography>}
                    sx={{ m: 1 }}
                />

            </FormGroup>
            <Autocomplete
                multiple
                id="allowedMediaTypes"
                options={[MediaType.AUDIO, MediaType.BITMAP, MediaType.VIDEO, MediaType.ARTICLE]}
                filterSelectedOptions
                value={round.allowedMediaTypes}
                onChange={(_, updatedMediaTypes) => dispatch({ allowedMediaTypes: updatedMediaTypes })}
                sx={{ m: 1, width: { xs: '100%', sm: '48%' } }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="outlined"
                        label="Allowed Media Types"
                        placeholder="Allowed Media Types"
                    />
                )}
                disabled={loading || disabled}
            />
            <TextField
                label="Type"
                variant="outlined"
                sx={{
                    m: 1, width: {
                        xs: '100%',
                        sm: '48%',
                    }
                }}
                onChange={(e) => dispatch({ type: e.target.value as EvaluationType })}
                value={round.type}
                disabled={loading || disabled}
            />

        </LocalizationProvider>
    );
}
export default RoundEditForm;
