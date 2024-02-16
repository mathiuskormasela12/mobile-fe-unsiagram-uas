import React, { useCallback } from 'react'
import { View, FlatList, type ListRenderItemInfo, Text, type ViewStyle } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import styles from './styles'
import { ColorNeutral } from '@src/themes'
import { s } from '@src/helpers'
import { type ILatestPost } from '@src/interfaces'
import PhotoProfile from '../PhotoProfile'

const posts: ILatestPost[] = [
  {
    id: '1',
    photo: '../../../../assets/img/person.png',
    firstName: 'Your post'
  },
  {
    id: '2',
    photo: '../../../../assets/img/person.png',
    firstName: 'Maxwel'
  },
  {
    id: '3',
    photo: '../../../../assets/img/person.png',
    firstName: 'George'
  },
  {
    id: '4',
    photo: '../../../../assets/img/person.png',
    firstName: 'Dave'
  },
  {
    id: '5',
    photo: '../../../../assets/img/person.png',
    firstName: 'Ganjar'
  },
  {
    id: '6',
    photo: '../../../../assets/img/person.png',
    firstName: 'Prabowo'
  },
  {
    id: '7',
    photo: '../../../../assets/img/person.png',
    firstName: 'Gibran'
  }
]

const LatestPost: React.FC = () => {
  const handleRenderItem = useCallback(({ item, index }: ListRenderItemInfo<ILatestPost>) => {
    const additionalStyle: ViewStyle[] = []

    if (index === 0) {
      additionalStyle.push(styles.flatListItemFirst)
    }
    if (index === (posts.length - 1)) {
      additionalStyle.push(styles.flatListItemLast)
    }

    return (
      <View style={[styles.imgCircleWrapper, additionalStyle]}>
        <View style={styles.imgCircle}>
          <PhotoProfile uri='' />
          {(item.id === '1') && (
            <View style={styles.imgWrapperIcon}>
              <View style={styles.imgWrapperIconContainer}>
                <AntDesign
                  name='plus'
                  size={s(19)}
                  color={ColorNeutral.neutral0}
                />
              </View>
            </View>
          )}
        </View>
        <Text style={styles.name}>{item.firstName}</Text>
      </View>
    )
  }, [])

  return (
    <View style={styles.latestPost}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={handleRenderItem}
        contentContainerStyle={styles.flatList}
      />
    </View>
  )
}

export default LatestPost
