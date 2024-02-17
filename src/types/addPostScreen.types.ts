import { type BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types'
import type React from 'react'

export type AddPostScreenHook = () => {
  snapPoints: string[]
  handleCloseModal: () => void
  handleOpenModal: () => void
  bottomSheetModalRef: React.RefObject<BottomSheetModalMethods>
}
