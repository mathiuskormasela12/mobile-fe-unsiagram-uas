import { useNavigation } from '@react-navigation/native'
import { type RootStackParamList, type RootStackScreenProps, type LoginScreenHook } from '@src/types'
import { useCallback } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from '@src/schemas'
import { type ILoginForm } from '@src/interfaces'
import { useMutation } from '@tanstack/react-query'
import { loginAccount } from '@src/api/POST_LoginAccount'
import Toast from 'react-native-toast-message'
import { useDispatch } from 'react-redux'
import { type AppDispatch } from '@src/redux/store'
import { setToken } from '@src/redux/slices/authSlice'

export const useLoginScreen: LoginScreenHook = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigation = useNavigation<RootStackScreenProps<'RegisterScreen'>['navigation']>()
  const { mutateAsync: handleLoginAccount } = useMutation({
    mutationFn: loginAccount,
    onSuccess (data) {
      dispatch(setToken({
        accessToken: data.data.accessToken,
        refreshToken: data.data.refreshToken
      }))
      navigation.navigate('MainScreen')
    }
  })

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

  const handleLogin: SubmitHandler<ILoginForm> = useCallback(async (data) => {
    try {
      await handleLoginAccount(data)
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
    handleLogin,
    control,
    handleSubmit,
    errors
  }
}
