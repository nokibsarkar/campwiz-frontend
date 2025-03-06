import dayjs from "dayjs"
import { EvaluationType, MediaType, RoundCreate } from "."

export const initialRoundCreate: RoundCreate = {
    allowedMediaTypes: [
        MediaType.IMAGE
    ],
    type: EvaluationType.BINARY,
    startDate: dayjs().toISOString(),
    endDate: dayjs().toISOString(),
    name: "",
    description: "",
    isPublic: false,
    allowJuryToParticipate: false,
    campaignId: "", // Add appropriate initial value
    jury: [], // Add appropriate initial value
    isOpen: false,
    serial: 0,
    allowMultipleJudgement: true,
    secretBallot: true,
    blacklist: "",
    audioMinimumDurationMilliseconds: 0,
    audioMinimumSizeBytes: 0,
    videoMinimumDurationMilliseconds: 0,
    videoMinimumSizeBytes: 0,
    videoMinimumResolution: 0,
    imageMinimumResolution: 0,
    imageMinimumSizeBytes: 0,
    maximumSubmissionOfSameArticle: 1,
    articleAllowExpansions: true,
    articleAllowCreations: true,
    articleMinimumTotalBytes: 0,
    articleMinimumTotalWords: 0,
    articleMinimumAddedBytes: 0,
    articleMinimumAddedWords: 0
}

export const roundCreateReducer = (state: RoundCreate, action: Partial<RoundCreate>) => {
    return {
        ...state,
        ...action
    }
}
export type RoundCreateAction = Partial<RoundCreate>
export type RoundCreateDispatch = (action: RoundCreateAction) => void