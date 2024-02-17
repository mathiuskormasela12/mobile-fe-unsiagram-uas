import { type BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types'
import { type IPhoto, type IAddPost } from '@src/interfaces'
import type React from 'react'
import { type FieldErrors, type Control, type UseFormHandleSubmit, type SubmitHandler } from 'react-hook-form'
import { type FlatList } from 'react-native'

export type AddPostScreenHook = () => {
  snapPoints: string[]
  handleCloseModal: () => void
  handleOpenModal: () => void
  bottomSheetModalRef: React.RefObject<BottomSheetModalMethods>
  control: Control<Omit<IAddPost, 'photos'>>
  errors: FieldErrors<Omit<IAddPost, 'photos'>>
  handleSubmit: UseFormHandleSubmit<Omit<IAddPost, 'photos'>>
  handleAddPost: SubmitHandler<Omit<IAddPost, 'photos'>>
  photos: IPhoto[]
  isError: boolean
  handleChoosePhotoFromGalery: () => Promise<void>
  handleChoosePhotoByCamera: () => Promise<void>
  handleRemovePhoto: (id: string) => void
  flatListRef: React.RefObject<FlatList<any>>
  handleOpenSettingsModal: () => void
}
