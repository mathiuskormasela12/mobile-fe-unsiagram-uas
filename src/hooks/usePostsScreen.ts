import { useNavigation } from '@react-navigation/native'
import { type RootStackScreenProps, type PostsScreenHook } from '@src/types'
import { useCallback } from 'react'

export const usePostsScreen: PostsScreenHook = () => {
  const navigation = useNavigation<RootStackScreenProps<'MainScreen'>['navigation']>()
  const handleMessengerPress = useCallback(() => {
    navigation.navigate('ChatListScreen')
  }, [])

  return {
    handleMessengerPress
  }
}

export default usePostsScreen
