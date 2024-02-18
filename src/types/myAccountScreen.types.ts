import { type BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types'
import { type ICommentModalRef } from '@src/interfaces'

export type MyAccountScreenHook = () => {
  isFollowed: boolean
  handleFollowed: () => void
  handleGoBack: () => void
  commentRef: React.MutableRefObject<ICommentModalRef>
  settingsModalRef: React.RefObject<BottomSheetModalMethods>
  handleOpenSetting: () => void
}
