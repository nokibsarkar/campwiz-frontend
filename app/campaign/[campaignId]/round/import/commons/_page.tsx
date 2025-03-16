
import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material"
import { useState } from "react"
import ImportWidget from "./importWidget"

const P = ({ roundId, onClose }: { roundId: string, onClose: () => void }) => {
    const [importing, setImporting] = useState(false)

    return (
        <Dialog open={true} onClose={onClose}>
            <DialogTitle>
                Import from Commons
            </DialogTitle>
            <DialogContent>
                <ImportWidget roundId={roundId} importing={importing} setImporting={setImporting} afterImport={onClose} />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} variant="outlined" color="error" disabled={importing}>
                    {importing && <CircularProgress size={20} color="inherit" sx={{ display: importing ? 'inline-block' : 'none' }} />}
                    Close Dialog
                </Button>
            </DialogActions>
        </Dialog>
    )
}
export default P