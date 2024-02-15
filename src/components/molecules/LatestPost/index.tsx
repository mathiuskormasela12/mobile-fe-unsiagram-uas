import React, { useCallback } from 'react'
import { View, FlatList, Image, type ListRenderItemInfo, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import styles from './styles'
import { ColorNeutral, Layout } from '@src/themes'
import { s } from '@src/helpers'
import { type ILatestPost } from '@src/interfaces'

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
  const handleRenderItem = useCallback(({ item }: ListRenderItemInfo<ILatestPost>) => {
    return (
      <View style={styles.imgCircleWrapper}>
        <View style={styles.imgCircle}>
          <View style={styles.imgCircleContainer}>
            <Image
              source={require('../../../../assets/img/person.png')}
              style={styles.img}
            />
          </View>
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
      <View style={Layout.container}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={posts}
          keyExtractor={(item) => item.id}
          renderItem={handleRenderItem}
          contentContainerStyle={styles.flatList}
        />
      </View>
    </View>
  )
}

export default LatestPost
