
import { Submission } from "@/types/submission";
import { lazy, Suspense } from "react";
const VideoApp = lazy(() => import("./videoplayer"));


const VideoPreview = ({ submission }: { submission: Submission }) => {
    return <Suspense fallback={<div>Loading...</div>}>
        <VideoApp poster={submission.thumburl} src={"https://upload.wikimedia.org/wikipedia/commons/6/6e/Destructions_in_Kharkiv_after_Russian_attack%2C_2024-01-23_%28003%29.webm"} />
    </Suspense>
}
export default VideoPreview;
