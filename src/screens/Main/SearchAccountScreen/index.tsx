import { Card, HeaderSearchAccount, SafeAreaView } from '@src/components'
import React, { useCallback } from 'react'
import { FlatList, type ListRenderItemInfo, View, Text } from 'react-native'
import styles from './styles'
import { ColorNeutral, Layout } from '@src/themes'
import { type IUser } from '@src/interfaces'
import { Ionicons } from '@expo/vector-icons'
import { s } from '@src/helpers'

const data: IUser[] = [
  {
    id: '1',
    username: 'fallingin__fall',
    firstName: 'Gaeul',
    lastName: '',
    photo: 'https://a-static.besthdwallpaper.com/gaeul-from-ive-kpop-girls-group-wallpaper-2880x1800-99911_8.jpg',
    email: 'gaeul@gmail.com'
  },
  {
    id: '2',
    firstName: 'Wonyoung',
    username: 'for_everyoung10',
    lastName: '',
    photo: 'https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/04/12/Jang-Wonyoung-1-2705046685.jpg',
    email: 'wonyoung@gmail.com'
  },
  {
    id: '3',
    username: 'fallingin__fall',
    firstName: 'Gaeul',
    lastName: '',
    photo: 'https://a-static.besthdwallpaper.com/gaeul-from-ive-kpop-girls-group-wallpaper-2880x1800-99911_8.jpg',
    email: 'gaeul@gmail.com'
  },
  {
    id: '4',
    firstName: 'Wonyoung',
    username: 'for_everyoung10',
    lastName: '',
    photo: 'https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/04/12/Jang-Wonyoung-1-2705046685.jpg',
    email: 'wonyoung@gmail.com'
  },
  {
    id: '5',
    username: 'fallingin__fall',
    firstName: 'Gaeul',
    lastName: '',
    photo: 'https://a-static.besthdwallpaper.com/gaeul-from-ive-kpop-girls-group-wallpaper-2880x1800-99911_8.jpg',
    email: 'gaeul@gmail.com'
  },
  {
    id: '6',
    firstName: 'Wonyoung',
    username: 'for_everyoung10',
    lastName: '',
    photo: 'https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/04/12/Jang-Wonyoung-1-2705046685.jpg',
    email: 'wonyoung@gmail.com'
  },
  {
    id: '7',
    username: 'fallingin__fall',
    firstName: 'Gaeul',
    lastName: '',
    photo: 'https://a-static.besthdwallpaper.com/gaeul-from-ive-kpop-girls-group-wallpaper-2880x1800-99911_8.jpg',
    email: 'gaeul@gmail.com'
  },
  {
    id: '8',
    firstName: 'Wonyoung',
    username: 'for_everyoung10',
    lastName: '',
    photo: 'https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/04/12/Jang-Wonyoung-1-2705046685.jpg',
    email: 'wonyoung@gmail.com'
  },
  {
    id: '9',
    firstName: 'Wonyoung',
    username: 'for_everyoung10',
    lastName: '',
    photo: 'https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/04/12/Jang-Wonyoung-1-2705046685.jpg',
    email: 'wonyoung@gmail.com'
  },
  {
    id: '10',
    firstName: 'Wonyoung',
    username: 'for_everyoung10',
    lastName: '',
    photo: 'https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/04/12/Jang-Wonyoung-1-2705046685.jpg',
    email: 'wonyoung@gmail.com'
  }
]

const SearchAccountScreen: React.FC = () => {
  const handleRenderItem = useCallback((item: ListRenderItemInfo<IUser>) => {
    return (
      <Card
        photo={item.item.photo}
        title={item.item.firstName}
        subtitle={`@${item.item.username}`}
        onPress={() => {}}
        secondSubtitle={'1m followers'}
      />
    )
  }, [data])

  const renderEmptyComponent = useCallback(() => {
    return (
      <View style={[Layout.fullPage, Layout.flexCenter]}>
        <Ionicons
          name='search-sharp'
          color={ColorNeutral.neutral60}
          size={s(65)}
        />
        <Text style={styles.emptyStateTitle}>
          Looking for friends ?
        </Text>
      </View>
    )
  }, [data])

  return (
    <SafeAreaView style={styles.page}>
      <HeaderSearchAccount />
      <View style={[Layout.fullPage, styles.main]}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={handleRenderItem}
          contentContainerStyle={[styles.flatList, data.length === 0 && Layout.fullPage]}
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={renderEmptyComponent}
        />
      </View>
    </SafeAreaView>
  )
}

export default SearchAccountScreen
