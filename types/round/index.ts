import { CommonFilter, IDType, WikimediaUsername } from "@/types/_";
import { Role } from "../role";

export enum MediaType {
    ARTICLE = 'ARTICLE',
    AUDIO = 'AUDIO',
    BITMAP = 'BITMAP',
    VIDEO = 'VIDEO',
}
type MediaTypeSet = MediaType[];
export enum EvaluationType {
    BINARY = 'binary',
    SCORE = 'score',
    RANKING = 'ranking',
}
// These are the restrictions that are applied to the articles that are submitted to the campaign
export type RoundCommonRestrictions = {
    allowJuryToParticipate: boolean;
    allowMultipleJudgement: boolean;
};


export enum RoundStatus {
    PENDING = "PENDING",
    IMPORTING = "IMPORTING",
    DISTRIBUTING = "DISTRIBUTING",
    EVALUATING = "EVALUATING",
    REJECTED = "REJECTED",
    CANCELLED = "CANCELLED",
    PAUSED = "PAUSED",
    SCHEDULED = "SCHEDULED",
    ACTIVE = "ACTIVE",
    COMPLETED = "COMPLETED",
}
// These are the restrictions that are applied to the audio and video that are submitted to the campaign
export type RoundAudioVideoRestrictions = {
    minimumDurationMilliseconds: number;
};

// These are the restrictions that are applied to the images that are submitted to the campaign
export type RoundImageRestrictions = {
    minimumHeight: number;
    minimumWidth: number;
    minimumResolution: number;
};

export type RoundArticleRestrictions = {
    maximumSubmissionOfSameArticle: number;
    allowExpansions: boolean;
    allowCreations: boolean;
    minimumTotalBytes: number;
    minimumTotalWords: number;
    minimumAddedBytes: number;
    minimumAddedWords: number;
    secretBallot: boolean;
    blacklist: string;
};

export type RoundMediaRestrictions = RoundImageRestrictions & RoundAudioVideoRestrictions;

// These are the restrictions that are applied to the campaign
export type RoundRestrictions = RoundCommonRestrictions & RoundMediaRestrictions & RoundArticleRestrictions & {
    allowedMediaTypes: MediaTypeSet;
};

export type RoundWritable = {
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    isOpen: boolean;
    isPublic: boolean;
    dependsOnRoundId?: string;
    dependsOnRound?: Round;
    serial: number;
    type: EvaluationType;
} & RoundRestrictions;

export type Round = {
    roundId: IDType;
    campaignId: IDType;
    createdAt?: string;
    createdById: IDType;
    totalSubmissions: number;
    status: RoundStatus;
    latestDistributionTaskId?: IDType;
} & RoundWritable & {
    roles: Role[];
};
export type RoundCreate = {
    campaignId: IDType;
    createdById?: IDType;
    jury: WikimediaUsername[];
} & RoundWritable;

export type RoundFilter = {
    campaignId: IDType;
    status: RoundStatus;
} & CommonFilter;
