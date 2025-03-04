import { WikimediaUsername } from "@/types/_"

export interface CampaignCreate {
    coordinators: WikimediaUsername[]
    description: string
    endDate: string
    image: string
    language: string
    name: string
    organizers: WikimediaUsername[]
    rules: string
    startDate: string
}
export const initialCampaignCreate: CampaignCreate = {
    coordinators: [],
    description: "",
    endDate: (new Date()).toISOString(),
    image: "",
    language: "",
    name: "",
    organizers: [],
    rules: "",
    startDate: (new Date()).toISOString()
}
export const campaignCreateReducer = (state: CampaignCreate, action: Partial<CampaignCreate>) => {
    return {
        ...state,
        ...action
    }
}
export type CampaignCreateAction = Partial<CampaignCreate>
export type CampaignCreateDispatch = (action: CampaignCreateAction) => void