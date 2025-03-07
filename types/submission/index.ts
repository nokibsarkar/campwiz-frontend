import { IDType } from "../_";
import { MediaType } from "../round";

export interface Submission {
    submissionId: IDType;
    title: string;
    campaignId: IDType;
    url: string;
    author: string;
    submittedById: IDType;
    participantId: IDType;
    currentRoundId: IDType;
    submittedAt: string;
    createdAtServer: string;
    mediatype: MediaType;
    thumburl: string;
    thumbwidth: number;
    thumbheight: number;
    license: string;
    description: string;
    creditHTML: string;
    metadata?: unknown;
    width: number;
    height: number;
    duration: number;
    bitrate: number;
    size: number;
}