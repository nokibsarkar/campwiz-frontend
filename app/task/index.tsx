export interface Task {
    campaignId: string
    createdAt: string
    createdById: string
    data: number[]
    failedCount: number
    failedIds: string[]
    remainingCount: number
    roundId: string
    status: string
    successCount: number
    taskId: string
    type: string
    updatedAt: string
    userId: string
}