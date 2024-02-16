import { useNavigation } from '@react-navigation/native'
import { type ICommentModalRef } from '@src/interfaces'
import { type RootStackScreenProps, type PostsScreenHook } from '@src/types'
import { useCallback, useRef } from 'react'

export const usePostsScreen: PostsScreenHook = () => {
  const navigation = useNavigation<RootStackScreenProps<'MainScreen'>['navigation']>()
  const handleMessengerPress = useCallback(() => {
    navigation.navigate('ChatListScreen')
  }, [])
  const commentRef = useRef<ICommentModalRef>({
    handleClose: () => {},
    handleOpen: () => {}
  })

  return {
    handleMessengerPress,
    commentRef
  }
}

export default usePostsScreen
