export interface IResponseSuccess<T> {
  statusCode: number
  data: T
}

export interface IResponseErrors {
  statusCode: number
  errors: Record<string, string[]>
}

export interface IResponse {
  statusCode: number
  message: string
}
