import { WikimediaUsername } from "@/types/_"
import { RoundStatus } from "../round/status"

export interface CampaignCreate {
    coordinators: WikimediaUsername[]
    description: string
    endDate: string
    image: string
    language: string
    name: string
    rules: string
    startDate: string
    isPublic: boolean
    status: RoundStatus
}
export const initialCampaignCreate: CampaignCreate = {
    coordinators: [],
    description: "",
    endDate: (new Date()).toISOString(),
    image: "",
    language: "",
    name: "",
    rules: "",
    startDate: (new Date()).toISOString(),
    isPublic: false,
    status: RoundStatus.PENDING
}
export const campaignCreateReducer = (state: CampaignCreate, action: Partial<CampaignCreate>) => {
    return {
        ...state,
        ...action
    }
}
export type CampaignCreateAction = Partial<CampaignCreate>
export type CampaignCreateDispatch = (action: CampaignCreateAction) => void