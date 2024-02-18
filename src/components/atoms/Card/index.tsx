import React from 'react'
import { Pressable, Text, View } from 'react-native'
import styles from './styles'
import PhotoProfile from '@src/components/molecules/PhotoProfile'
import { type ICard } from '@src/interfaces'
import { s } from '@src/helpers'
import { Layout } from '@src/themes'

const Card: React.FC<ICard> = ({ title, subtitle, photo, secondSubtitle = null, onPress }) => {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [Layout.flexRow, styles.card, pressed && styles.isPressed]}>
      <View style={styles.leftCard}>
        <PhotoProfile size={s(65)} uri={photo} />
      </View>
      <View style={styles.rightCard}>
        <Text style={styles.title}>
          {title}
        </Text>
        <Text style={styles.subtitle}>
          {subtitle}
        </Text>
        {secondSubtitle && (
          <Text style={styles.subtitle}>
            {secondSubtitle}
          </Text>
        )}
      </View>
    </Pressable>
  )
}

export default React.memo(Card)
