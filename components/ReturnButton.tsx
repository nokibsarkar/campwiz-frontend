import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import LeftArrowIcon from "@mui/icons-material/ArrowBackIosNew";
const ReturnButton = ({ disabled = false }: { disabled?: boolean }) => {
    const router = useRouter();

    return (
        <Button disabled={disabled} onClick={() => router.back()} variant="outlined" color="secondary" sx={{ m: 2, p: 1 }} startIcon={<LeftArrowIcon />}>
            Return
        </Button>
    );
}
export default ReturnButton