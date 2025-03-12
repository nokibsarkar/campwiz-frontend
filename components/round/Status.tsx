import { RoundStatus } from "@/types/round/status"
import { WorkHistory } from "@mui/icons-material"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Chip, CircularProgress } from "@mui/material"

const Status = ({ status }: { status: RoundStatus }) => {
    return <Chip label={status} color={getStatusColor(status)} variant="outlined" sx={{ marginRight: 1, p: 1 }} />
}
export const getStatusColor = (status: RoundStatus) => {
    switch (status) {
        case RoundStatus.COMPLETED:
            return 'success'
        case RoundStatus.CANCELLED:
            return 'error'
        case RoundStatus.EVALUATING:
            return 'info'
        case RoundStatus.PAUSED:
            return 'warning'
        case RoundStatus.PENDING:
            return 'warning'
        case RoundStatus.ACTIVE:
            return 'success'
        default:
            return 'primary'
    }
}
export const RoundStatusIcon = ({ status }: { status: RoundStatus }) => {
    const commonProps = {
        sx: {
            display: 'inline',
            ml: -2,
            mr: 1
        },
        // fontSize: "large"
    }
    switch (status) {
        case RoundStatus.COMPLETED:
            return <CheckCircleIcon color={getStatusColor(status)} {...commonProps} />
        case RoundStatus.CANCELLED:
            return <CheckCircleIcon color={getStatusColor(status)} {...commonProps} />
        case RoundStatus.EVALUATING:
            return <CheckCircleIcon color={getStatusColor(status)} {...commonProps} />
        case RoundStatus.PAUSED:
            return <CheckCircleIcon color={getStatusColor(status)} {...commonProps} />
        case RoundStatus.PENDING:
            return <WorkHistory color={getStatusColor(status)} {...commonProps} />
        case RoundStatus.ACTIVE:
            return (
                <CircularProgress
                    size={20}
                    thickness={5}
                    {...commonProps}
                    sx={{
                        // ...commonProps.sx,
                        color: getStatusColor(status),
                        zIndex: 1,
                        position: 'relative',
                        ml: -1.5,
                        mr: 1,
                    }}
                />
            )
        default:
            return <CheckCircleIcon color={getStatusColor(status)} {...commonProps} />
    }
}
export default Status