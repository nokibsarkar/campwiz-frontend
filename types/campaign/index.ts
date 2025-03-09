
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
    rules: string
    startDate: string
}
