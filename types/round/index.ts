import { CommonFilter, IDType, WikimediaUsername } from "../_";
import { Role } from "../role";

// These are the restrictions that are applied to the articles that are submitted to the campaign
type RoundCommonRestrictions = {
    allowJuryToParticipate: boolean;
    allowMultipleJudgement: boolean;
    secretBallot: boolean;
    blacklist: string;
};

enum RoundStatus {
    PENDING = 'PENDING',
    IMPORTING = 'IMPORTING',
    DISTRIBUTING = 'DISTRIBUTING',
    EVALUATING = 'EVALUATING',
    REJECTED = 'REJECTED',
    CANCELLED = 'CANCELLED',
    PAUSED = 'PAUSED',
    SCHEDULED = 'SCHEDULED',
    ACTIVE = 'ACTIVE',
    COMPLETED = 'COMPLETED'
}
export enum MediaType {
    AUDIO = 'AUDIO',
    VIDEO = 'VIDEO',
    IMAGE = 'BITMAP',
    ARTICLE = 'ARTICLE'
}
export enum EvaluationType {
    BINARY = 'binary',
    RANKING = 'ranking',
    SCORE = 'score',
}
type MediaTypeSet = MediaType[]


// These are the restrictions that are applied to the audio and video that are submitted to the campaign
type RoundAudioRestrictions = {
    audioMinimumDurationMilliseconds: number;
    audioMinimumSizeBytes: number;
};

export type RoundVideoRestrictions = {
    videoMinimumDurationMilliseconds: number;
    videoMinimumSizeBytes: number;
    videoMinimumResolution: number;
};

// These are the restrictions that are applied to the images that are submitted to the campaign
type RoundImageRestrictions = {
    imageMinimumResolution: number;
    imageMinimumSizeBytes: number;
};

export type RoundArticleRestrictions = {
    maximumSubmissionOfSameArticle: number;
    articleAllowExpansions: boolean;
    articleAllowCreations: boolean;
    articleMinimumTotalBytes: number;
    articleMinimumTotalWords: number;
    articleMinimumAddedBytes: number;
    articleMinimumAddedWords: number;
};

export type RoundMediaRestrictions = RoundImageRestrictions & RoundAudioRestrictions & RoundVideoRestrictions;

// These are the restrictions that are applied to
type RoundRestrictions = RoundCommonRestrictions & RoundMediaRestrictions & RoundArticleRestrictions & {
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
    serial: number;
    type: EvaluationType;
} & RoundRestrictions
export type RoundCreate = {
    campaignId: IDType
    jury: WikimediaUsername[]
} & RoundWritable
export type Round = {
    roundId: IDType;
    campaignId: IDType;
    createdAt?: string;
    createdById: IDType;
    totalSubmissions: number;
    status: RoundStatus;
    latestDistributionTaskId?: IDType;
    roles: Role[] | null;
} & RoundWritable

export type RoundFilter = {
    campaignId: IDType;
    status: RoundStatus;
} & CommonFilter
