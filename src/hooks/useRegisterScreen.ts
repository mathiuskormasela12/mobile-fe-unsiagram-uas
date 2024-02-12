import { useNavigation } from '@react-navigation/native'
import { type RootStackParamList, type RegisterScreenHook, type RootStackScreenProps } from '@src/types'
import { useCallback } from 'react'

export const useRegisterScreen: RegisterScreenHook = () => {
  const navigation = useNavigation<RootStackScreenProps<'RegisterScreen'>['navigation']>()

  const handleNavigate = useCallback((screenName: keyof RootStackParamList): void => {
    navigation.navigate(screenName)
  }, [])

  return {
    handleNavigate
  }
}
