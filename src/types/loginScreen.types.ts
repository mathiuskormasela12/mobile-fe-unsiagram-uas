import { type UseFormHandleSubmit, type FieldErrors, type Control, type SubmitHandler } from 'react-hook-form'
import { type RootStackParamList } from './navigation.types'
import { type ILoginForm } from '@src/interfaces'

export type LoginScreenHook = () => {
  handleNavigate: (screen: keyof RootStackParamList) => void
  errors: FieldErrors<ILoginForm>
  handleSubmit: UseFormHandleSubmit<ILoginForm>
  control: Control<ILoginForm>
  handleLogin: SubmitHandler<ILoginForm>
}
