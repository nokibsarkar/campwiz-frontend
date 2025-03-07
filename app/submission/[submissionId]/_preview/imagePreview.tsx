import { Submission } from "@/types/submission";
import Image from "next/image";

const ImagePreview = ({ submission }: { submission: Submission }) => {
    return (
        <div>
            <Image
                src={submission.url}
                alt={submission.title}
                width={submission.thumbwidth}
                height={submission.thumbheight}
            />
            <div>
                <h2>{submission.title}</h2>
                <p>{submission.description}</p>
                <p dangerouslySetInnerHTML={{ __html: submission.creditHTML }}></p>
            </div>
        </div>
    );
}
export default ImagePreview;