"use client"
import Button, { ButtonProps } from "@mui/material/Button";
import LeftArrowIcon from "@mui/icons-material/ArrowBackIosNew";
type ReturnButtonProps = {
    disabled?: boolean
    sx?: ButtonProps['sx']
}
const ReturnButton = ({ disabled, sx }: ReturnButtonProps) => {
    return (
        <Button
            disabled={disabled}
            sx={sx}
            onClick={(() => typeof window !== 'undefined' && window.history.back())}
            variant="text"
            color="primary"
            startIcon={<LeftArrowIcon />}
            className="absolute left-4 z-20 m-1"
        >
            Return
        </Button>
    )
}
export default ReturnButton