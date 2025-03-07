
import { Submission } from "@/types/submission";
import { Paper } from "@mui/material";
import { lazy, Suspense } from "react";
const AudioApp = lazy(() => import("./audioPlayer"));


const AudioPreview = ({ submission }: { submission: Submission }) => {
    return <Paper>
        <Suspense fallback={<div>Loading...</div>}>
            <AudioApp
                src={submission.url}
                title={submission.title}
            />
        </Suspense>
    </Paper>
}
export default AudioPreview;
