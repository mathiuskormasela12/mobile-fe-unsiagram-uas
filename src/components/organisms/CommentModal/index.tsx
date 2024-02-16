import { BottomSheetFlatList, BottomSheetModal } from '@gorhom/bottom-sheet'
import CustomBackdrop from '@src/components/atoms/CustomBackdrop'
import BottomSheetHeader from '@src/components/molecules/BottomSheetHeader'
import CommentList from '@src/components/molecules/CommentList'
import { type IComment, type ICommentModalRef } from '@src/interfaces'
import React, { useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'
import { type ListRenderItemInfo, View, Platform, Keyboard, Alert } from 'react-native'
import styles from './styles'
import Input from '@src/components/atoms/Input'
import { Ionicons } from '@expo/vector-icons'
import { inputRef, s } from '@src/helpers'
import { ColorPrimary, Layout } from '@src/themes'

const comments: IComment[] = [
  {
    id: '1',
    userId: '2',
    postId: '3',
    comment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia consectetur nisi dolore corporis architecto minus doloremque reiciendis aliquid iste neque voluptatem perferendis facilis velit non, odit ipsam consequuntur commodi veritatis?. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia consectetur nisi dolore corporis architecto minus doloremque reiciendis aliquid iste neque voluptatem perferendis facilis velit non, odit ipsam consequuntur commodi veritatis?.',
    createdAt: '2024-01-10',
    isLiked: true,
    user: {
      id: '2',
      firstName: 'Gaeul',
      username: 'fallingin__fall',
      lastName: 'Kim',
      email: 'gaul@gmail.com',
      photo: 'https://rare-gallery.com/mocahbig/1374623-ive-kpop-love-dive-gaeul-4k-pc-wallpaper.jpg'
    }
  },
  {
    id: '2',
    userId: '2',
    postId: '3',
    comment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia consectetur nisi dolore corporis architecto minus doloremque reiciendis aliquid iste neque voluptatem perferendis facilis velit non, odit ipsam consequuntur commodi veritatis?',
    createdAt: '2024-01-10',
    isLiked: false,
    user: {
      id: '2',
      firstName: 'Wonyoung',
      username: 'for_everyoung10',
      lastName: 'Jang',
      email: 'gaul@gmail.com',
      photo: 'https://rare-gallery.com/mocahbig/1374623-ive-kpop-love-dive-gaeul-4k-pc-wallpaper.jpg'
    }
  },
  {
    id: '3',
    userId: '2',
    postId: '3',
    comment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia consectetur nisi dolore corporis architecto minus doloremque reiciendis aliquid iste neque voluptatem perferendis facilis velit non, odit ipsam consequuntur commodi veritatis?',
    createdAt: '2024-01-10',
    isLiked: false,
    user: {
      id: '2',
      firstName: 'Gaeul',
      lastName: 'Lkim',
      username: 'fallingin__fall',
      email: 'gaul@gmail.com',
      photo: 'https://rare-gallery.com/mocahbig/1374623-ive-kpop-love-dive-gaeul-4k-pc-wallpaper.jpg'
    }
  },
  {
    id: '4',
    userId: '2',
    postId: '3',
    comment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia consectetur nisi dolore corporis architecto minus doloremque reiciendis aliquid iste neque voluptatem perferendis facilis velit non, odit ipsam consequuntur commodi veritatis?',
    createdAt: '2024-01-10',
    isLiked: false,
    user: {
      id: '2',
      firstName: 'Gaeul',
      lastName: 'Kim',
      username: 'fallingin__fall',
      email: 'gaul@gmail.com',
      photo: 'https://rare-gallery.com/mocahbig/1374623-ive-kpop-love-dive-gaeul-4k-pc-wallpaper.jpg'
    }
  }
]

const CommentModal = (_props: unknown, ref: React.Ref<ICommentModalRef>): React.ReactNode => {
  const bottomSheetRef = useRef<BottomSheetModal>(null)
  const snapPoints = useMemo(() => ['75%', '75%'], [])
  const [comment, setComment] = useState<string>('')

  const handleClose = useCallback(() => {
    bottomSheetRef?.current?.close()
  }, [])

  const handleOpen = useCallback(() => {
    bottomSheetRef?.current?.present(0)
  }, [])

  const handleOnChange = useCallback((value: string) => {
    setComment(() => value)
  }, [comment])

  const handleSendComment = useCallback(() => {
    Alert.alert(comment)
  }, [comment])

  useImperativeHandle(ref, () => ({
    handleClose,
    handleOpen
  }))

  useEffect(() => {
    Keyboard.addListener('keyboardWillHide', () => {
      bottomSheetRef?.current?.snapToPosition('75%')
    })
  }, [])

  const handleRenderItem = useCallback((item: ListRenderItemInfo<IComment>) => {
    return (
      <CommentList
        comment={item.item.comment}
        photo={item.item.user.photo}
        id={item.item.id}
        isLiked={item.item.isLiked}
        username={item.item.user.username}
      />
    )
  }, [])

  return (
    <>
      <BottomSheetModal
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        index={1}
        backdropComponent={CustomBackdrop}
        enablePanDownToClose={false}
      >
        <View style={Layout.fullPage}>
          <BottomSheetHeader
            title='Comments'
            onClose={handleClose}
          />
          <View style={styles.page}>
            <BottomSheetFlatList
              data={comments}
              keyExtractor={(item) => item.id}
              renderItem={handleRenderItem}
              showsVerticalScrollIndicator={false}
              alwaysBounceVertical={false}
            />
            <View style={[styles.footer]}>
              <Input
                rightIcon={
                  <Ionicons
                    name='send'
                    size={s(20)}
                    color={ColorPrimary.primary40}
                    onPress={handleSendComment}
                  />
                }
                placeholder='Comment...'
                size='sm'
                isBottomSheet={Platform.select({ ios: true, android: false })}
                onChangeText={handleOnChange}
                value={comment}
                innerRef={inputRef}
              />
            </View>
          </View>
        </View>
      </BottomSheetModal>
    </>
  )
}

export default React.forwardRef(CommentModal)
