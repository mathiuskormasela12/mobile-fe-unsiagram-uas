import { type BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types'
import { type ICommentModalRef } from '@src/interfaces'
import { type PostsScreenHook } from '@src/types'
import { useCallback, useRef } from 'react'

export const usePostsScreen: PostsScreenHook = () => {
  const commentRef = useRef<ICommentModalRef>({
    handleClose: () => {},
    handleOpen: () => {}
  })
  const settingsModalRef = useRef<BottomSheetModalMethods>(null)

  const handleOpenSetting = useCallback(() => {
    settingsModalRef?.current?.present()
  }, [])

  return {
    commentRef,
    handleOpenSetting,
    settingsModalRef
  }
}

export default usePostsScreen
