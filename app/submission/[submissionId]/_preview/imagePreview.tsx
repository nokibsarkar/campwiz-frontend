import { Submission } from "@/types/submission";
import Image from "next/image";
import SubmissionDetails from "./Details";

const ImagePreview = ({ submission }: { submission: Submission }) => {
    return (
        <div>
            <Image
                src={submission.url}
                alt={submission.title}
                width={submission.thumbwidth}
                height={submission.thumbheight}
            />
            <SubmissionDetails submission={submission} />
        </div>
    );
}
export default ImagePreview;