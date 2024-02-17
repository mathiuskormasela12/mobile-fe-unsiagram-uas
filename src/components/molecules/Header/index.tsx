import React from 'react'
import { Pressable, Text, View, Image } from 'react-native'
import { ColorNeutral } from '@src/themes'
import { EvilIcons } from '@expo/vector-icons'
import { s } from '@src/helpers'
import styles from './styles'
import { type IHeaderProps } from '@src/interfaces'

const Header: React.FC<IHeaderProps> = ({ title, onPressRightIcon, rightIcon }) => {
  return (
    <View style={styles.header}>
     <View style={styles.row}>
      <View style={styles.col}>
        <View style={styles.imgBrand}>
          <Image
            source={require('../../../../assets/img/unsia.png')}
            style={styles.img}
          />
          <Text style={styles.title}>
            {title}
          </Text>
        </View>
      </View>
      <View style={styles.col}>
        <Pressable onPress={onPressRightIcon}>
          {rightIcon ?? (
            <EvilIcons
              name='navicon'
              color={ColorNeutral.neutral90}
              size={s(28)}
            />
          )}
        </Pressable>
      </View>
     </View>
    </View>
  )
}

export default Header
