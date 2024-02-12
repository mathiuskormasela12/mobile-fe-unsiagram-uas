import { useNavigation } from '@react-navigation/native'
import { type RootStackParamList, type RootStackScreenProps, type LoginScreenHook } from '@src/types'
import { useCallback } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from '@src/schemas'
import { type ILoginForm } from '@src/interfaces'

export const useLoginScreen: LoginScreenHook = () => {
  const navigation = useNavigation<RootStackScreenProps<'RegisterScreen'>['navigation']>()

  const {
    handleSubmit,
    formState: {
      errors
    },
    control
  } = useForm({
    resolver: yupResolver(loginSchema)
  })

  const handleNavigate = useCallback((screenName: keyof RootStackParamList): void => {
    navigation.navigate(screenName)
  }, [])

  const handleLogin: SubmitHandler<ILoginForm> = useCallback((data) => {
    console.log(data)
  }, [])

  return {
    handleNavigate,
    handleLogin,
    control,
    handleSubmit,
    errors
  }
}
