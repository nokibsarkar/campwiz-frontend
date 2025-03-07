import fetchAPIFromBackendSingleWithErrorHandling from "@/server";
import { MediaType } from "@/types/round";
import { Submission } from "@/types/submission";
import ImagePreview from "./_preview/imagePreview";
import { lazy } from "react";
const VideoPreview = lazy(() => import("./_preview/videoPreview"));
const AudioPreview = lazy(() => import("./_preview/audioPreview"));

type SubmissionViewPageProps = {
    submissionId: string;
    roundId: string;
    campaignId: string;
}

const SubmissionViewPage = async ({ params }: { params: Promise<SubmissionViewPageProps> }) => {
    const { submissionId } = await params;
    const submissionResponse = await fetchAPIFromBackendSingleWithErrorHandling<Submission>(`/submission/${submissionId}`);
    if ('detail' in submissionResponse) {
        return <div>{submissionResponse.detail}</div>
    }
    const submission = submissionResponse.data;
    if (submission.mediatype === MediaType.IMAGE) {
        return <ImagePreview submission={submission} />
    } else if (submission.mediatype === MediaType.VIDEO) {
        return <VideoPreview submission={submission} />
    } else if (submission.mediatype === MediaType.AUDIO) {
        return <AudioPreview submission={submission} />
    } else if (submission.mediatype === MediaType.ARTICLE) {
        return <div>Article Preview</div>
    } else {
        return <div>Unknown Media Type</div>
    }
}
export default SubmissionViewPage