
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material"
import { useState } from "react"
import ImportWidget from "./importWidget"

const ImportFromCommonsDialog = ({ roundId, onClose }: { roundId: string, onClose: () => void }) => {
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
                <Button onClick={onClose} variant="outlined" color="error" disabled={importing} loading={importing}>
                    Close Dialog
                </Button>
            </DialogActions>
        </Dialog>
    )
}
export default ImportFromCommonsDialog