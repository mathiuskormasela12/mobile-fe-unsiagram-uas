import { type BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types'
import { useNavigation } from '@react-navigation/native'
import { type ICommentModalRef } from '@src/interfaces'
import { type MyAccountScreenHook } from '@src/types'
import { useCallback, useRef, useState } from 'react'

export const useMyAccountScreen: MyAccountScreenHook = () => {
  const [isFollowed, setIsFollowed] = useState(false)
  const navigation = useNavigation()
  const commentRef = useRef<ICommentModalRef>({
    handleClose: () => {},
    handleOpen: () => {}
  })
  const settingsModalRef = useRef<BottomSheetModalMethods>(null)

  const handleGoBack = useCallback(() => {
    navigation.goBack()
  }, [])

  const handleFollowed = useCallback(() => {
    setIsFollowed((currentIsFollowed) => !currentIsFollowed)
  }, [])

  const handleOpenSetting = useCallback(() => {
    settingsModalRef?.current?.present()
  }, [])

  return {
    isFollowed,
    handleFollowed,
    handleGoBack,
    commentRef,
    settingsModalRef,
    handleOpenSetting
  }
}
