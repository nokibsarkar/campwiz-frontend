import { MediaType } from "@/types/round"
import { Submission } from "@/types/submission"
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material"
import React from "react"

type DetailsProps = {
    submission: Submission
}
const KeyValue = ({ name, value }: { name: string, value: React.ReactNode }) => {
    return (
        <TableRow>
            <TableCell>
                {name}
            </TableCell>
            <TableCell>
                {value}
            </TableCell>
        </TableRow>
    )
}
const Duration = ({ duration }: { duration: number }) => {
    if (duration < 0) {
        return <>Unknown</>
    }
    if (duration < 1000) {
        return <>{duration}ms</>
    }
    if (duration < 60000) {
        return <>{Math.floor(duration / 1000)}s</>
    }
    if (duration < 3600000) {
        return <>{Math.floor(duration / 60000)}:{Math.round(duration / 1000)}s</>
    }
    if (duration < 86400000) {
        return <>{Math.floor(duration / 3600000)}:{Math.round(duration / 60000)}:{duration / 1000}s</>
    }
    return <>{Math.floor(duration / 3600000)}:{Math.round(duration / 60000)}:{duration / 1000}s</>
}
const AudioDetails = ({ submission }: DetailsProps) => {
    if (![MediaType.AUDIO, MediaType.VIDEO].includes(submission.mediatype)) {
        return null
    }

    return <>
        <KeyValue name="Duration" value={<Duration duration={submission.duration} />} />
        <KeyValue name="Bitrate" value={submission.bitrate} />
    </>
}
const VisualDetails = ({ submission }: DetailsProps) => {
    return <>
        <KeyValue name="Width" value={submission.width} />
        <KeyValue name="Height" value={submission.height} />
    </>
}
const MediaDetails = ({ submission }: DetailsProps) => {
    return <>
        <VisualDetails submission={submission} />
        <AudioDetails submission={submission} />
    </>
}
const SubmissionDetails = ({ submission }: DetailsProps) => {
    return (
        <div className="p-2">
            <Typography variant="h6">{submission.title}</Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell colSpan={2}>
                            {submission.title}
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <KeyValue name="Author" value={submission.author} />
                    <KeyValue name="Description" value={submission.description} />
                    <KeyValue name="Submitted At (on this system)" value={new Date(submission.submittedAt).toString()} />
                    <KeyValue name="Created At (on wikimedia server)" value={new Date(submission.createdAtServer).toString()} />
                    <MediaDetails submission={submission} />
                </TableBody>
            </Table>
        </div>
    )
}

export default SubmissionDetails;