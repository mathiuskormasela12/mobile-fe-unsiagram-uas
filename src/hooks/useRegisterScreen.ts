import { useNavigation } from '@react-navigation/native'
import { type RootStackParamList, type RegisterScreenHook, type RootStackScreenProps } from '@src/types'
import { useCallback } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { registerSchema } from '@src/schemas'
import { type IRegisterForm } from '@src/interfaces'

export const useRegisterScreen: RegisterScreenHook = () => {
  const navigation = useNavigation<RootStackScreenProps<'RegisterScreen'>['navigation']>()

  const {
    handleSubmit,
    formState: {
      errors
    },
    control
  } = useForm({
    resolver: yupResolver(registerSchema)
  })

  const handleNavigate = useCallback((screenName: keyof RootStackParamList): void => {
    navigation.navigate(screenName)
  }, [])

  const handleRegister: SubmitHandler<IRegisterForm> = useCallback((data) => {
    console.log(data)
  }, [])

  return {
    handleNavigate,
    handleRegister,
    control,
    handleSubmit,
    errors
  }
}
