import React from 'react'
import { Pressable, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { ColorNeutral } from '@src/themes'
import { s } from '@src/helpers'
import styles from './styles'
import { type IBackButtonProps } from '@src/interfaces'

const BackButton: React.FC<IBackButtonProps> = ({ onPress }) => {
  return (
    <View style={styles.button}>
      <Pressable onPress={onPress}>
        <Ionicons
          name='arrow-back'
          color={ColorNeutral.neutral60}
          size={s(18)}
        />
      </Pressable>
    </View>
  )
}

export default BackButton
