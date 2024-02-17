import { type BottomSheetModal } from '@gorhom/bottom-sheet'
import { yupResolver } from '@hookform/resolvers/yup'
import { launchCamera, launchImagePicker, settingsModalRef } from '@src/helpers'
import { type IPhoto, type IAddPost } from '@src/interfaces'
import { addPostSchema } from '@src/schemas'
import { type AddPostScreenHook } from '@src/types'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { type FlatList } from 'react-native'

export const useAddPostScreen: AddPostScreenHook = () => {
  const snapPoints = useMemo(() => ['30%', '30%'], [])
  const bottomSheetModalRef = useRef<BottomSheetModal>(null)
  const [photos, setPhotos] = useState<IPhoto[]>([{ id: Date.now().toString(), uri: null }])
  const [isError, setIsError] = useState<boolean>(false)
  const flatListRef = useRef<FlatList>(null)

  const {
    control,
    formState: {
      errors
    },
    handleSubmit
  } = useForm({
    resolver: yupResolver(addPostSchema)
  })

  const handleCloseModal = useCallback(() => {
    bottomSheetModalRef?.current?.close()
  }, [])

  const handleOpenModal = useCallback(() => {
    bottomSheetModalRef?.current?.present()
  }, [])

  const handleAddPost: SubmitHandler<Omit<IAddPost, 'photos'>> = useCallback((data) => {
    if (photos?.some(item => item?.uri && item?.uri?.length > 0)) {
      setIsError(() => false)
      console.log(data, photos)
    } else {
      setIsError(() => true)
    }
  }, [photos, setIsError])

  const handleSetPhotos = useCallback((value: string) => {
    setPhotos((currentPhotos) => ([
      { uri: value, id: Date.now().toString() },
      ...currentPhotos
    ]))
  }, [])

  const handleChoosePhotoFromGalery = useCallback(async () => {
    const photo = await launchImagePicker()
    if (photo) {
      handleCloseModal()
      handleSetPhotos(photo)
    }
  }, [])

  const handleChoosePhotoByCamera = useCallback(async () => {
    const photo = await launchCamera()
    if (photo) {
      handleCloseModal()
      handleSetPhotos(photo)
    }
  }, [])

  useEffect(() => {
    flatListRef?.current?.scrollToIndex({
      animated: true,
      index: 0
    })
  }, [photos])

  const handleRemovePhoto = useCallback((id: string) => {
    setPhotos((currentPhotos) => {
      return currentPhotos?.filter(item => item.id !== id)
    })
  }, [])

  const handleOpenSettingsModal = useCallback(() => {
    settingsModalRef?.current?.present()
  }, [])

  return {
    snapPoints,
    handleCloseModal,
    handleOpenModal,
    bottomSheetModalRef,
    control,
    errors,
    handleSubmit,
    handleAddPost,
    photos,
    isError,
    handleChoosePhotoFromGalery,
    handleRemovePhoto,
    handleChoosePhotoByCamera,
    flatListRef,
    handleOpenSettingsModal
  }
}
