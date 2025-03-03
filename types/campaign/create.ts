import { WikimediaUsername } from "@/types/_"

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
export const initialCampaignCreate: CampaignCreate = {
    allowCreations: false,
    allowExpansions: false,
    allowJuryToParticipate: false,
    allowMultipleJudgement: false,
    allowedMediaTypes: [],
    blacklist: "",
    coordinators: [],
    description: "",
    endDate: "",
    image: "",
    language: "",
    maximumSubmissionOfSameArticle: 0,
    minimumAddedBytes: 0,
    minimumAddedWords: 0,
    minimumDurationMilliseconds: 0,
    minimumHeight: 0,
    minimumResolution: 0,
    minimumTotalBytes: 0,
    minimumTotalWords: 0,
    minimumWidth: 0,
    name: "",
    organizers: [],
    rules: "",
    secretBallot: false,
    startDate: ""
}
export const campaignCreateReducer = (state: CampaignCreate, action: Partial<CampaignCreate>) => {
    return {
        ...state,
        ...action
    }
}
export type CampaignCreateAction = Partial<CampaignCreate>
export type CampaignCreateDispatch = (action: CampaignCreateAction) => void