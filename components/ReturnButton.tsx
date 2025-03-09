import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import LeftArrowIcon from "@mui/icons-material/ArrowBackIosNew";
const ReturnButton = ({ disabled = false, sx = {} }: { disabled?: boolean, sx?: { [k: string]: unknown } }) => {
    const router = useRouter();
    return (
        <Button disabled={disabled} onClick={() => router.back()} variant="outlined" color="error" sx={{ m: 2, p: 1, ...sx }} startIcon={<LeftArrowIcon />}>
            Return
        </Button>
    );
}
export default ReturnButton