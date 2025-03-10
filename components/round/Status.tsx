import { Chip } from "@mui/material"

const Status = ({ status }: { status: string }) => {
    return <Chip label={status} color="success" variant="outlined" sx={{ marginRight: 1, p: 1 }} />
}
export default Status