import { settingsModalRef } from '@src/helpers'
import { type ICommentModalRef } from '@src/interfaces'
import { type PostsScreenHook } from '@src/types'
import { useCallback, useRef } from 'react'

export const usePostsScreen: PostsScreenHook = () => {
  const commentRef = useRef<ICommentModalRef>({
    handleClose: () => {},
    handleOpen: () => {}
  })

  const handleOpenSetting = useCallback(() => {
    settingsModalRef?.current?.present()
  }, [])

  return {
    commentRef,
    handleOpenSetting
  }
}

export default usePostsScreen
