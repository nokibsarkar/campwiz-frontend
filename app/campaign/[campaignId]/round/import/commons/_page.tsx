
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material"
import { useState } from "react"
import ImportWidget from "./importWidget"
import { ImportDialogProps } from "../ImportDialogProps"

const ImportFromCommonsDialog = ({ round, onClose, afterImport }: ImportDialogProps) => {
    const [importing, setImporting] = useState(false);
    return (
        <Dialog open={true} onClose={onClose}>
            <DialogTitle>
                Import from Commons
            </DialogTitle>
            <DialogContent>
                <ImportWidget roundId={round.roundId} importing={importing} setImporting={setImporting} afterImport={afterImport} />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} variant="outlined" color="error" disabled={importing} loading={importing}>
                    Close Dialog
                </Button>
            </DialogActions>
        </Dialog>
    )
}
export default ImportFromCommonsDialog