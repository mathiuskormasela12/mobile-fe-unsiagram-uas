import { type UseFormHandleSubmit, type FieldErrors, type Control, type SubmitHandler } from 'react-hook-form'
import { type RootStackParamList } from './navigation.types'
import { type IRegisterForm } from '@src/interfaces'

export type RegisterScreenHook = () => {
  handleNavigate: (screen: keyof RootStackParamList) => void
  errors: FieldErrors<IRegisterForm>
  handleSubmit: UseFormHandleSubmit<IRegisterForm>
  control: Control<IRegisterForm>
  handleRegister: SubmitHandler<IRegisterForm>
  isPending: boolean
}
