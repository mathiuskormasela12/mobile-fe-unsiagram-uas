import { type AxiosResponse, type AxiosError } from 'axios'
import apiBaseConfig from './apiBaseConfig'
import { type IResponseErrors, type ILoginForm, type IResponseSuccess, type IAuthToken, type IResponse } from '@src/interfaces'
import { errorMessageGenerator } from '@src/helpers'

export const loginAccount = async (params: ILoginForm): Promise<IResponseSuccess<IAuthToken>> => {
  try {
    const result: AxiosResponse<IResponseSuccess<IAuthToken>> = await apiBaseConfig.post('/auth/login', params)
    return result.data
  } catch (exception) {
    const err = exception as AxiosError<IResponseErrors & IResponse>
    throw new Error(errorMessageGenerator(err?.response?.data?.errors, err?.response?.data?.message, err?.message ?? 'Failed to login'))
  }
}
