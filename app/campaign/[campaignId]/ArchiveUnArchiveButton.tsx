"use client"
import fetchAPIFromBackendSingleWithErrorHandling from "@/server";
import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ArchiveIcon from "@mui/icons-material/Archive";
import UnarchiveIcon from "@mui/icons-material/Unarchive";


const ArchiveUnArchiveButton = ({ campaignId, isArchived, campaignName }: { campaignId: string, isArchived: boolean, campaignName: string }) => {
    "use client"
    const [openArchivePrompt, setOpenArchivePrompt] = React.useState(false);
    const [saving, setSaving] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);

    const handle = async () => {
        try {
            const data = {
                isArchived: !isArchived
            }
            setSaving(true);
            const response = await fetchAPIFromBackendSingleWithErrorHandling(`/campaign/${campaignId}/status`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            if (!response) {
                return;
            }
            if ('detail' in response) {
                console.error(response.detail);
                return;
            }
            if (typeof window !== 'undefined') {
                setTimeout(() => window.location.reload(), 100);
            }
            setOpenArchivePrompt(false);
            setError(null);
        } catch (e) {
            console.error(e);
            setError('An error occurred while archiving/unarchiving the campaign.');
        } finally {
            setSaving(false);
            setOpenArchivePrompt(false);
        }

    }
    return (
        openArchivePrompt ? <Dialog open={openArchivePrompt} onClose={() => setOpenArchivePrompt(false)}>
            <DialogTitle>{isArchived ? 'Unarchive' : 'Archive'} Campaign</DialogTitle>
            <DialogContent>
                Are you sure you want to {isArchived ? 'unarchive' : 'archive'} the campaign &quot;{campaignName}&quot;?
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpenArchivePrompt(false)} color="success" disabled={saving} sx={{ m: 1, borderRadius: 1, px: 2 }} size="large" variant="contained">
                    Cancel
                </Button>
                <Button onClick={handle} color="primary" disabled={saving} loading={saving} sx={{ m: 1, borderRadius: 4, px: 2 }} size="large" variant="outlined"
                    startIcon={isArchived ? <UnarchiveIcon /> : <ArchiveIcon />} >
                    {isArchived ? 'Unarchive' : 'Archive'}
                </Button>
            </DialogActions>
        </Dialog> :
            <Button variant="outlined" color={isArchived ? 'success' : 'error'} onClick={() => setOpenArchivePrompt(true)} disabled={saving} sx={{ m: 1, borderRadius: 1, px: 2 }} loading={saving} size="large"
                startIcon={isArchived ? <UnarchiveIcon /> : <ArchiveIcon />} >
                {isArchived ? 'Unarchive' : 'Archive'}
            </Button>
    )
}
export default ArchiveUnArchiveButton
