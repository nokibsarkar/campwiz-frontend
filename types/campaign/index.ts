import { WikimediaUsername } from "../_"
import { Round } from "../round"
import { RoundStatus } from "../round/status"

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
    projectId: string
    campaignId: string
    createdAt: string
    createdById: string
    description: string
    endDate: string
    image: string
    language: string
    name: string
    roles: Role[] | null
    coordinators: WikimediaUsername[] | null
    rounds: Round[] | null
    rules: string
    startDate: string
    isPublic: boolean
    status: RoundStatus
}
