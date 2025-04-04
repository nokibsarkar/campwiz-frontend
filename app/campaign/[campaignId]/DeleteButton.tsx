
import React from "react"
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, LinearProgress, Typography } from "@mui/material"
import deleteRound from "./deleteRound"

type DeleteButtonProps = {
    roundId: string
    refresh: () => void
}
const DeleteButton = ({ roundId, refresh }: DeleteButtonProps) => {
    const [showDialog, setShowDialog] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const finalize = async () => {
        try {
            setLoading(true)
            const res = await deleteRound(roundId)
            if (res) {
                console.log('Round status updated')
            }
            if ('detail' in res) {
                console.error(res.detail)
                throw new Error(res.detail)
            }
            setShowDialog(false)
            refresh()
        } catch (e) {
            console.error(e)
        } finally {
            setLoading(false)
        }
    }
    return <>
        <Button
            startIcon={<DeleteIcon />}
            variant="outlined"
            color={'error'}
            onClick={() => setShowDialog(true)}
            sx={{ m: 1, px: 3, borderRadius: 7 }}
            loading={loading}
            disabled={showDialog}
        >
            Delete
        </Button>
        <React.Suspense fallback={<LinearProgress />}>
            {showDialog && <Dialog open={showDialog} onClose={() => setShowDialog(false)}>
                <DialogTitle>Delete Round</DialogTitle>
                <DialogContent>
                    <Typography>Are you sure you want to delete this round?</Typography>
                    <Typography>
                        Deleting this round will remove all the data associated with it.
                        This includes all the submissions, evaluations, jury members and other data.
                        This action is irreversible. So, please make sure you want to delete this round.
                    </Typography>
                    {loading && <LinearProgress />}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setShowDialog(false)} variant="contained" color="success" disabled={loading}>No</Button>
                    <Button onClick={finalize} variant="outlined" color="error" disabled={loading} loading={loading}>Yes</Button>
                </DialogActions>
            </Dialog>}
        </React.Suspense>
    </>
}
export default DeleteButton