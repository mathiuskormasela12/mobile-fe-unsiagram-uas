import { type BottomSheetModal } from '@gorhom/bottom-sheet'
import { type AddPostScreenHook } from '@src/types'
import { useCallback, useMemo, useRef } from 'react'

export const useAddPostScreen: AddPostScreenHook = () => {
  const snapPoints = useMemo(() => ['30%', '30%'], [])
  const bottomSheetModalRef = useRef<BottomSheetModal>(null)

  const handleCloseModal = useCallback(() => {
    bottomSheetModalRef?.current?.close()
  }, [])

  const handleOpenModal = useCallback(() => {
    bottomSheetModalRef?.current?.present()
  }, [])

  return {
    snapPoints,
    handleCloseModal,
    handleOpenModal,
    bottomSheetModalRef
  }
}
