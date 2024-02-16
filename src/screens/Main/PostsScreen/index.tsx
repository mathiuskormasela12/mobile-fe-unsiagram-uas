import { CommentModal, Header, LatestPost, PostCard, SafeAreaView } from '@src/components'
import React, { useCallback } from 'react'
import { FlatList, type ListRenderItemInfo, View } from 'react-native'
import styles from './styles'
import usePostsScreen from '@src/hooks/usePostsScreen'

import { type IGetPostResponse } from '@src/interfaces'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'

const posts: IGetPostResponse[] = [
  {
    id: '1',
    user: {
      id: '1',
      username: 'fallingin__fall',
      firstName: 'Gaeul',
      lastName: '',
      photo: 'https://a-static.besthdwallpaper.com/gaeul-from-ive-kpop-girls-group-wallpaper-2880x1800-99911_8.jpg',
      email: 'gaeul@gmail.com'
    },
    photos: ['https://wallpapercave.com/wp/wp11279742.jpg', 'https://rare-gallery.com/mocahbig/1374623-ive-kpop-love-dive-gaeul-4k-pc-wallpaper.jpg'],
    likes: 200,
    caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum cum in magnam maxime? Perferendis natus, inventore rerum vero culpa molestias tempora at, consectetur voluptatem dolore dolor nulla in ullam sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum cum in magnam maxime? Perferendis natus, inventore rerum vero culpa molestias tempora at, consectetur voluptatem dolore dolor nulla in ullam sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum cum in magnam maxime? Perferendis natus, inventore rerum vero culpa molestias tempora at, consectetur voluptatem dolore dolor nulla in ullam sequi.',
    isLiked: true,
    createdAt: '2024-01-01'
  },
  {
    id: '2',
    user: {
      id: '2',
      firstName: 'Wonyoung',
      username: 'for_everyoung10',
      lastName: '',
      photo: 'https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/04/12/Jang-Wonyoung-1-2705046685.jpg',
      email: 'wonyoung@gmail.com'
    },
    photos: ['https://thumb.viva.co.id/media/frontend/thumbs3/2022/09/06/6316869926333-jang-wonyoung-ive_1265_711.jpg'],
    likes: 200,
    caption: 'Hi there 2',
    createdAt: '2024-01-01',
    isLiked: false
  }
]

const PostsScreen: React.FC = () => {
  const { handleMessengerPress, commentRef } = usePostsScreen()

  const handleOpenCommentModal = useCallback(() => {
    commentRef.current?.handleOpen()
  }, [])

  const handleRenderItem = useCallback((item: ListRenderItemInfo<IGetPostResponse>) => {
    return (
      <PostCard
        isLiked={item.item.isLiked}
        id={item.item.id}
        user={item.item.user}
        likes={item.item.likes}
        caption={item.item.caption}
        photos={item.item.photos}
        onOpenCommentModal={handleOpenCommentModal}
      />
    )
  }, [])

  return (
    <BottomSheetModalProvider>
      <SafeAreaView style={styles.page}>
        <Header
          title='Unsiagram'
          onPressRightIcon={handleMessengerPress}
        />
        <View style={styles.main}>
          <FlatList
            data={posts}
            renderItem={handleRenderItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<LatestPost />}
          />
        </View>
        <CommentModal ref={commentRef} />
      </SafeAreaView>
    </BottomSheetModalProvider>
  )
}

export default PostsScreen
