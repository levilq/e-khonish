export interface ApiError {
  httpStatus: number
  message?: string
  status?: boolean
  comment?: string
  data?: any
  [key: string]: any
}

export interface PageMeta {
  current_page: number
  last_page: number
  per_page: number
  total: number
}

export interface Envelope<T> {
  success: boolean
  message: string
  data?: T
}

export interface ListData<T, M = PageMeta> {
  data: T[]
  meta: M
}

export type ListResponse<T, M = PageMeta> = Envelope<ListData<T, M>>
export type ItemResponse<T> = Envelope<T>

export type ApiResponse<T> =
  | { success: true; data: T }
  | { success: false; error: ApiError }

export type ID = number | string

export type JsonBody = Record<string, any> | undefined
