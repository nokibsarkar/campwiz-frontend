import { WikimediaUsername } from "../_"

export interface Role {
    campaignId: string
    isAllowed: boolean
    roleId: string
    roundId: string
    totalAssigned: number
    totalEvaluated: number
    totalScore: number
    type: string
    userId: string
}
export interface Campaign {
    campaignId: string
    createdAt: string
    createdById: string
    description: string
    endDate: string
    image: string
    language: string
    name: string
    roles: Role[] | null
    rules: string
    startDate: string
}
export interface CampaignCreate {
    allowCreations: boolean
    allowExpansions: boolean
    allowJuryToParticipate: boolean
    allowMultipleJudgement: boolean
    allowedMediaTypes: string[]
    blacklist: string
    coordinators: WikimediaUsername[]
    description: string
    endDate: string
    image: string
    language: string
    maximumSubmissionOfSameArticle: number
    minimumAddedBytes: number
    minimumAddedWords: number
    minimumDurationMilliseconds: number
    minimumHeight: number
    minimumResolution: number
    minimumTotalBytes: number
    minimumTotalWords: number
    minimumWidth: number
    name: string
    organizers: WikimediaUsername[]
    rules: string
    secretBallot: boolean
    startDate: string
}