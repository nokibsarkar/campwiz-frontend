
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material"
import { useState } from "react"
import ImportWidget from "./importFromRoundWidget"
import { ImportDialogProps } from "../ImportDialogProps"

const ImportFromRoundDialog = ({ round, onClose, afterImport }: ImportDialogProps) => {
    const [importing, setImporting] = useState(false)
    return (
        <Dialog open={true} onClose={onClose}>
            <DialogTitle>
                Import from the previous round
            </DialogTitle>
            <DialogContent>
                <ImportWidget currentRound={round} importing={importing} setImporting={setImporting} afterImport={afterImport} />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} variant="outlined" color="error" disabled={importing} loading={importing}>
                    Close Dialog
                </Button>
            </DialogActions>
        </Dialog>
    )
}
export default ImportFromRoundDialog