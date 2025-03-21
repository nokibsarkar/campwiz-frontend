"use client"
import Button from "@mui/material/Button";
import LeftArrowIcon from "@mui/icons-material/ArrowBackIosNew";

const ReturnButton = () => {
    return (
        <Button
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