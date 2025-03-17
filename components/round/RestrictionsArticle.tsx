import { RoundCreate } from "@/types/round";
import { Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import { ActionDispatch } from "react";

const ArticleRestrictions = ({ dispatch, loading, disabled = false, ...round }: RoundCreate & { dispatch: ActionDispatch<[Partial<RoundCreate>]>, loading: boolean, disabled?: boolean }) => {
    return (
        <>
            <Typography variant="h6" component='legend'>Restrictions on Article Submissions</Typography>
            <FormControlLabel control={<Checkbox
                checked={round.articleAllowCreations}
                onChange={(e) => dispatch({ articleAllowCreations: e.target.checked })}
                disabled={loading || disabled}
            />}
                label={
                    <Typography>Allow articles that were <b>newly created</b>. (It means, the articles that were created <b>after</b> this round started)</Typography>
                }
                sx={{ m: 1 }}
            />
            <FormControlLabel control={<Checkbox
                checked={round.articleAllowExpansions}
                onChange={(e) => dispatch({ articleAllowExpansions: e.target.checked })}
                disabled={loading || disabled}

            />}
                label={
                    <Typography>Allow articles that were <b>expanded</b>. (It means, the articles that were created <b>before</b> this round started)</Typography>
                }
                sx={{ m: 1 }}
            />
            <br />
            {/* <TextField
                label="Maximum Submission of Same Article"
                variant="outlined"
                sx={{
                    m: 1, width: {
                        xs: '100%',
                        sm: '45%',
                    },
                    display: 'inline-block'
                }}
                onChange={(e) => dispatch({ maximumSubmissionOfSameArticle: parseInt(e.target.value) })}
                value={round.maximumSubmissionOfSameArticle}
                disabled={loading || disabled}
            /> */}

            <TextField
                label="Minimum Total Bytes"
                variant="outlined"
                sx={{
                    m: 1,
                    display: 'inline-block'
                }}
                onChange={(e) => dispatch({ articleMinimumTotalBytes: parseInt(e.target.value) })}
                value={round.articleMinimumTotalBytes}
                disabled={loading || disabled}
            />
            <TextField
                label="Minimum Total Words"
                variant="outlined"
                sx={{
                    m: 1,
                    display: 'inline-block'
                }}
                onChange={(e) => dispatch({ articleMinimumTotalWords: parseInt(e.target.value) })}
                value={round.articleMinimumTotalWords}
                disabled={loading || disabled}
            />
            <TextField
                label="Minimum Added Bytes"
                variant="outlined"
                sx={{
                    m: 1,
                    display: 'inline-block'
                }}
                onChange={(e) => dispatch({ articleMinimumAddedBytes: parseInt(e.target.value) })}
                value={round.articleMinimumAddedBytes}
                disabled={loading || disabled}
            />
            <TextField
                label="Minimum Added Words"
                variant="outlined"
                sx={{
                    m: 1,
                    display: 'inline-block'
                }}
                onChange={(e) => dispatch({ articleMinimumAddedWords: parseInt(e.target.value) })}
                value={round.articleMinimumAddedWords}
                disabled={loading || disabled}
            />
        </>
    );
}
export default ArticleRestrictions