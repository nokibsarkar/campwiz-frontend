"use client"
import Button, { ButtonProps } from "@mui/material/Button";
import LeftArrowIcon from "@mui/icons-material/ArrowBackIosNew";
import { usePathname } from "next/navigation";
type ReturnButtonProps = {
    disabled?: boolean
    sx?: ButtonProps['sx'],
    hiddenIn?: string[]
}
const ReturnButton = ({ disabled, sx, hiddenIn }: ReturnButtonProps) => {
    const pathName = usePathname()
    if (hiddenIn) {
        for (const path of hiddenIn) {
            const r = new RegExp(path)
            if (r.test(pathName)) {
                return null
            }
        }
    }
    return (
        <Button
            disabled={disabled}
            sx={{ m: 1, cursor: 'pointer', display: 'inline-block', ...(sx || {}), zIndex: 20 }}
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