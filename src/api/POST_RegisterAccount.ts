import { type AxiosResponse, type AxiosError } from 'axios'
import apiBaseConfig from './apiBaseConfig'
import { type IResponseErrors, type IResponse, type IRegisterForm } from '@src/interfaces'
import { errorMessageGenerator } from '@src/helpers'

export const registerAccount = async (params: IRegisterForm): Promise<IResponse> => {
  try {
    const result: AxiosResponse<IResponse> = await apiBaseConfig.post('/auth/register', params)
    return result.data
  } catch (exception) {
    const err = exception as AxiosError<IResponseErrors & IResponse>
    throw new Error(errorMessageGenerator(err?.response?.data?.errors, err?.response?.data?.message, err?.message ?? 'Failed to register an account'))
  }
}
