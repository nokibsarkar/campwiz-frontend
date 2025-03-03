import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import LeftArrowIcon from "@mui/icons-material/ArrowBackIosNew";
const ReturnButton = () => {
    const router = useRouter();

    return (
        <Button onClick={() => router.back()} variant="outlined" color="secondary" sx={{ m: 2, p: 1 }} startIcon={<LeftArrowIcon />}>
            Return
        </Button>
    );
}
export default ReturnButton