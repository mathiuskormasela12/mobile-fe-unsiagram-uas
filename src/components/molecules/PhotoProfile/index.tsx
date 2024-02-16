import React from 'react'
import { Image, View, type ViewStyle } from 'react-native'
import styles from './styles'
import { type IPhotoProfileProps } from '@src/interfaces'
import { s } from '@src/helpers'

const PhotoProfile: React.FC<IPhotoProfileProps> = ({ uri, size }) => {
  const containerStyles: ViewStyle[] = [styles.imgCircleContainer]

  if (size) {
    containerStyles.push({
      width: s(size),
      height: s(size),
      borderRadius: s(size)
    })
  }

  return (
    <View style={containerStyles}>
      <Image
        source={uri !== '' ? { uri } : require('../../../../assets/img/person.png')}
        style={styles.img}
      />
    </View>
  )
}

export default PhotoProfile
