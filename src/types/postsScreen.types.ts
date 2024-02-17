import { type BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types'
import { type ICommentModalRef } from '@src/interfaces'
import type React from 'react'

export type PostsScreenHook = () => {
  handleOpenSetting: () => void
  commentRef: React.MutableRefObject<ICommentModalRef>
  settingsModalRef: React.RefObject<BottomSheetModalMethods>
}
