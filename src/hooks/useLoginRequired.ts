import { useNavigation } from '@react-navigation/native'
import { type RootState } from '@src/redux/store'
import { type LoginRequired, type RootStackScreenProps } from '@src/types'
import { useSelector } from 'react-redux'

export const useLoginRequired = (): LoginRequired => {
  const navigation = useNavigation<RootStackScreenProps<'MainScreen'>['navigation']>()
  const accessToken = useSelector((states: RootState) => states.authReducer.accessToken)
  const refreshToken = useSelector((states: RootState) => states.authReducer.refreshToken)

  return (callback) => {
    if (accessToken.length > 0 && refreshToken.length > 0) {
      callback()
    } else {
      navigation.navigate('LoginScreen')
    }
  }
}
