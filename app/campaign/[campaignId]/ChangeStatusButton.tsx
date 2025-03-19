import { Round } from "@/types/round"
import { RoundStatus } from "@/types/round/status"
import React from "react"
import { updateroundStatus } from "./updateStatus"
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, LinearProgress, Typography } from "@mui/material"

type ChangeStatusButtonProps = {
    status: RoundStatus
    label: string
    color: 'success' | 'error'
    icon: React.ReactNode
    description: string
    onClick?: (round: Round) => void
    roundId: string
    refresh: () => void
}
const ChangeStatusButton = ({ roundId, onClick, status, label, color, description, icon, refresh }: ChangeStatusButtonProps) => {
    const [showDialog, setShowDialog] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const finalize = async () => {
        try {
            setLoading(true)
            const res = await updateroundStatus(roundId, status)
            if (res) {
                console.log('Round status updated')
            }
            if ('detail' in res) {
                console.error(res.detail)
                throw new Error(res.detail)
            }
            setShowDialog(false)
            refresh()
            if (onClick) {
                onClick(res.data)
            }
        } catch (e) {
            console.error(e)
        } finally {
            setLoading(false)
        }
    }
    return <>
        <Button
            startIcon={icon}
            variant="contained"
            color={color}
            onClick={() => setShowDialog(true)}
            sx={{ m: 1, px: 3 }}
            loading={loading}
            disabled={showDialog}
        >
            {label}
        </Button>
        <React.Suspense fallback={<LinearProgress />}>
            {showDialog && <Dialog open={showDialog} onClose={() => setShowDialog(false)}>
                <DialogTitle>{label}</DialogTitle>
                <DialogContent>
                    <Typography>Are you sure you want to mark this round as {status}?</Typography>
                    <Typography>{description}</Typography>
                    {loading && <LinearProgress />}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setShowDialog(false)} variant="outlined" color="error" disabled={loading}>No</Button>
                    <Button onClick={finalize} variant="contained" color="success" disabled={loading} loading={loading}>Yes</Button>
                </DialogActions>
            </Dialog>}
        </React.Suspense>
    </>
}
export default ChangeStatusButton