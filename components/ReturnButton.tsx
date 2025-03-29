"use client"
import Button, { ButtonProps } from "@mui/material/Button";
import LeftArrowIcon from "@mui/icons-material/ArrowBackIosNew";
import IconButtton from "@mui/material/IconButton";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "@mui/material";
type ReturnButtonProps = {
    disabled?: boolean
    sx?: ButtonProps['sx'],
    hiddenIn?: string[],
    alwaysBig?: boolean
}
const ReturnButton = ({ disabled, sx, hiddenIn, alwaysBig = false }: ReturnButtonProps) => {
    const pathName = usePathname()
    const isSmall = useMediaQuery('(max-width:600px)');
    if (hiddenIn) {
        for (const path of hiddenIn) {
            const r = new RegExp(path)
            if (r.test(pathName)) {
                return null
            }
        }
    }
    return (
        !isSmall || alwaysBig ? (
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
        ) : (
            <IconButtton
                disabled={disabled}
                sx={{ m: 0.5, cursor: 'pointer', display: 'inline-block', ...(sx || {}), zIndex: 20 }}
                onClick={(() => typeof window !== 'undefined' && window.history.back())}
                color="primary"
                className="absolute left-4 z-20 m-1"
            >
                <LeftArrowIcon />
            </IconButtton>
        )
    )
}
export default ReturnButton