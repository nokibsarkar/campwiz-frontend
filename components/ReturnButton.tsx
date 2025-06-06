"use client"
import Button, { ButtonProps } from "@mui/material/Button";
import LeftArrowIcon from "@mui/icons-material/ArrowBackIosNew";
import IconButtton from "@mui/material/IconButton";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";
type ReturnButtonProps = {
    disabled?: boolean
    sx?: ButtonProps['sx'],
    hiddenIn?: string[],
    alwaysBig?: boolean,
    to?: string
}
const B = ({ onClick, isSmall, alwaysBig, sx, disabled }: { onClick?: () => void, isSmall: boolean, alwaysBig: boolean, sx?: ButtonProps['sx'], disabled?: boolean }) => (
    !isSmall || alwaysBig ? (
        <Button
            onClick={onClick}
            variant="text"
            color="primary"
            startIcon={<LeftArrowIcon />}
            sx={sx}
            disabled={disabled}
        >
            {!isSmall && 'Return'}
        </Button>
    ) : (
        <IconButtton
            disabled={disabled}
            sx={{ m: 0.5, cursor: 'pointer', display: 'inline-block', ...(sx || {}), zIndex: 20 }}
            onClick={onClick}
            color="primary"
            className="absolute left-4 z-20 m-1"
        >
            <LeftArrowIcon />
        </IconButtton>
    )
)
const ReturnButton = ({ disabled, sx, hiddenIn, alwaysBig = false, to }: ReturnButtonProps) => {
    const pathName = usePathname()
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    if (hiddenIn) {
        for (const path of hiddenIn) {
            const r = new RegExp(path)
            if (r.test(pathName)) {
                return null
            }
        }
    }
    const onClick = () => {
        if (typeof window !== 'undefined') {
            if (to)
                window.location.replace(to)
            else
                window.history.back()
        }
    }
    return to ? <Link href={to}>
        <B isSmall={isSmall} alwaysBig={alwaysBig} sx={sx} disabled={disabled} />
    </Link> : <B onClick={onClick} isSmall={isSmall} alwaysBig={alwaysBig} sx={sx} disabled={disabled} />
}
export default ReturnButton