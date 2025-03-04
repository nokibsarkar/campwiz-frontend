import dayjs from "dayjs"
import { EvaluationType, MediaType, RoundCreate } from "."

export const initialRoundCreate: RoundCreate = {
    campaignId: "",
    jury: [],
    description: "",
    endDate: dayjs().toISOString(),
    name: "",
    startDate: dayjs().toISOString(),
    isOpen: false,
    isPublic: false,
    serial: 0,
    type: EvaluationType.BINARY, // replace with appropriate EvaluationType value
    allowJuryToParticipate: false,
    allowMultipleJudgement: false,
    minimumHeight: 0,
    minimumWidth: 0,
    minimumResolution: 0,
    minimumDurationMilliseconds: 0,
    maximumSubmissionOfSameArticle: 0,
    allowExpansions: false,
    allowCreations: false,
    minimumTotalBytes: 0,
    minimumTotalWords: 0,
    minimumAddedBytes: 0,
    minimumAddedWords: 0,
    secretBallot: false,
    blacklist: "",
    allowedMediaTypes: [
        MediaType.BITMAP
    ],
}
export const roundCreateReducer = (state: RoundCreate, action: Partial<RoundCreate>) => {
    return {
        ...state,
        ...action
    }
}
export type RoundCreateAction = Partial<RoundCreate>
export type RoundCreateDispatch = (action: RoundCreateAction) => void