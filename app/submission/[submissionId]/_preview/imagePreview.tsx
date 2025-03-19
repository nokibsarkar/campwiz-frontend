import { Submission } from "@/types/submission";
import Image from "next/image";
import SubmissionDetails from "./Details";
import blurDataURL from "./blurDataURL";
import React from "react";

const ImagePreview = ({ submission, votingComponent }: { submission: Submission, votingComponent: React.ReactNode }) => {
    return (
        <div>
            <Image
                src={submission.url}
                alt={submission.title}
                width={Math.min(submission.thumbwidth, 400)}
                height={Math.min(submission.thumbheight, 400)}
                placeholder="blur"
                unoptimized
                blurDataURL={blurDataURL}
            />
            {votingComponent}
            <SubmissionDetails submission={submission} />
        </div>
    );
}
export default ImagePreview;