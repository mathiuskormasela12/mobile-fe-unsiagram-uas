import { useNavigation } from '@react-navigation/native'
import { type RootStackParamList, type RegisterScreenHook, type RootStackScreenProps } from '@src/types'
import { useCallback } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { registerSchema } from '@src/schemas'
import { type IRegisterForm } from '@src/interfaces'
import { useMutation } from '@tanstack/react-query'
import { registerAccount } from '@src/api'
import Toast from 'react-native-toast-message'

export const useRegisterScreen: RegisterScreenHook = () => {
  const navigation = useNavigation<RootStackScreenProps<'RegisterScreen'>['navigation']>()
  const { mutateAsync: handleRegisterAccount, isPending } = useMutation({
    mutationFn: registerAccount,
    onSuccess (data) {
      reset({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        repeatPassword: ''
      })
      Toast.show({
        type: 'success',
        text1: data?.message
      })
      setTimeout(() => {
        navigation.navigate('LoginScreen')
      }, 1000)
    }
  })

  const {
    handleSubmit,
    formState: {
      errors
    },
    control,
    reset
  } = useForm({
    resolver: yupResolver(registerSchema)
  })

  const handleNavigate = useCallback((screenName: keyof RootStackParamList): void => {
    navigation.navigate(screenName)
  }, [])

  const handleRegister: SubmitHandler<IRegisterForm> = useCallback(async (data) => {
    try {
      await handleRegisterAccount(data)
    } catch (err) {
      const { message } = err as Error
      Toast.show({
        type: 'error',
        text1: message
      })
    }
  }, [])

  return {
    handleNavigate,
    handleRegister,
    control,
    handleSubmit,
    errors,
    isPending
  }
}
