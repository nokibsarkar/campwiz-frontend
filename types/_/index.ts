export type ResponseSingle<T> = {
    data: T
}
export type ResponseList<T> = {
    data: T[]
    next: string
    prev: string
}

export type ResponseError = {
    detail: string
}
export type WikimediaUsername = string