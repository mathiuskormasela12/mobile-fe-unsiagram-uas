import React, { useMemo } from 'react'
import { Pressable, type ViewStyle } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { ColorNeutral } from '@src/themes'
import { s } from '@src/helpers'
import styles from './styles'
import { type ISquareButtonProps } from '@src/interfaces'

const CloseButton: React.FC<ISquareButtonProps> = ({
  onPress,
  rounded = false,
  bgIconColor,
  iconColor,
  size = 'md'
}) => {
  const pressableStyle = useMemo((): ViewStyle[] => {
    return [
      styles.button,
      styles[size],
      bgIconColor
        ? {
            backgroundColor: bgIconColor
          }
        : {},
      rounded ? styles.rounded : {}
    ]
  }, [])

  return (
    <Pressable
      onPress={onPress}
      style={pressableStyle}>
      <Ionicons
        name='close'
        color={iconColor ?? ColorNeutral.neutral60}
        size={size === 'md' ? s(18) : s(14)}
      />
    </Pressable>
  )
}

export default CloseButton
