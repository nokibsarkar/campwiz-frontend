"use client"

import { Button, ButtonProps, IconButton, useMediaQuery } from "@mui/material"
import Link from "next/link"

type NokiberButtonProps = {
    startIcon?: React.ReactNode
    endIcon?: React.ReactNode
    smallIcon?: React.ReactNode
    label: string
    onClick?: () => void
    link?: string
    disabled?: boolean
    loading?: boolean
    size?: 'small' | 'medium' | 'large'
    variant?: 'text' | 'outlined' | 'contained'
    color?: 'primary' | 'secondary' | 'error' | 'success' | 'warning' | 'info'
    sx?: ButtonProps['sx']
    className?: string
    alwaysBig?: boolean
    hiddenIn?: string[]
}
const NokiberButton = ({ link,
    endIcon,
    startIcon,
    label,
    onClick,
    disabled = false,
    loading = false,
    size = 'medium',
    variant = 'contained',
    color = 'primary',
    sx,
    className,
    alwaysBig = false,
    smallIcon


}: NokiberButtonProps) => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    if (link) {
        return <Link href={link}>
            {alwaysBig || !isSmall ? (
                <Button
                    variant={variant}
                    color={color}
                    size={size}
                    startIcon={startIcon}
                    endIcon={endIcon}
                    onClick={onClick}
                    disabled={disabled || loading}
                    sx={{
                        ...(sx || {}),
                        cursor: loading ? 'not-allowed' : 'pointer',
                    }}
                    className={className}
                >
                    {label}
                </Button>
            ) : (
                <IconButton
                    disabled={disabled || loading}
                    sx={{
                        ...(sx || {}),
                        cursor: loading ? 'not-allowed' : 'pointer',
                    }}
                    className={className}
                    color={color}
                    onClick={onClick}
                >
                    {smallIcon || startIcon || endIcon}
                </IconButton>)}
        </Link>
    }
    return alwaysBig || !isSmall ? (
        <Button
            variant={variant}
            color={color}
            size={size}
            startIcon={startIcon}
            endIcon={endIcon}
            onClick={onClick}
            disabled={disabled || loading}
            sx={{
                ...(sx || {}),
                cursor: loading ? 'not-allowed' : 'pointer',
            }}
            className={className}
        >
            {label}
        </Button>
    ) : (
        <IconButton
            disabled={disabled || loading}
            sx={{
                ...(sx || {}),
                cursor: loading ? 'not-allowed' : 'pointer',
            }}
            className={className}
            onClick={onClick}
            color={color}
        >
            {smallIcon || startIcon || endIcon}
        </IconButton>
    )

}
export default NokiberButton