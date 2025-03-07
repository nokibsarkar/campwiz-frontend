
import { Submission } from "@/types/submission";
import { lazy, Suspense } from "react";
const VideoApp = lazy(() => import("./videoplayer"));


const VideoPreview = ({ submission }: { submission: Submission }) => {
    return <Suspense fallback={<div>Loading...</div>}>
        <VideoApp poster={submission.thumburl} src={submission.url} />
    </Suspense>
}
export default VideoPreview;
