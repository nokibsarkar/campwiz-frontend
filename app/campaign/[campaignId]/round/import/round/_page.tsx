
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material"
import { useState } from "react"
import ImportWidget from "./importFromRoundWidget"
import { Round } from "@/types/round"

const ImportFromRoundDialog = ({ round, onClose }: { round: Round, onClose: () => void }) => {
    const [importing, setImporting] = useState(false)
    return (
        <Dialog open={true} onClose={onClose}>
            <DialogTitle>
                Import from the previous round
            </DialogTitle>
            <DialogContent>
                <ImportWidget currentRound={round} importing={importing} setImporting={setImporting} afterImport={onClose} />
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