import React from 'react'
import { Pressable, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { ColorNeutral } from '@src/themes'
import { s } from '@src/helpers'
import styles from './styles'
import { type ISquareButtonProps } from '@src/interfaces'

const CloseButton: React.FC<ISquareButtonProps> = ({ onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.button}>
        <Ionicons
          name='close'
          color={ColorNeutral.neutral60}
          size={s(18)}
        />
      </View>
    </Pressable>
  )
}

export default CloseButton
