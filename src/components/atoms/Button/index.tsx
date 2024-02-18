import React, { useCallback } from 'react'
import { ActivityIndicator, Pressable, Text, type TextStyle, View, type ViewStyle } from 'react-native'
import styles from './styles'
import { type IButtonProps } from '@src/interfaces'
import { s } from '@src/helpers'
import { ColorNeutral } from '@src/themes'

const Button: React.FC<IButtonProps> = ({ size = 'md', leftIcon, outline, children, onPress, variant = 'primary', isLoading = false, disabled = false }) => {
  const textStyle: TextStyle[] = [styles.text]
  const buttonStyle: ViewStyle[] = [styles[variant], styles.container]

  if (disabled) {
    textStyle.push(styles.textDisabled)
    buttonStyle.push(styles.disabled)
  } else if (variant === 'primary' && outline) {
    buttonStyle.push(styles.outline)
    textStyle.push(styles.textPrimary)
  } else if (variant === 'secondary' && outline) {
    buttonStyle.push(styles.outline)
    textStyle.push(styles.textSecondary)
  } else if (variant === 'danger' && outline) {
    buttonStyle.push(styles.outline)
    textStyle.push(styles.textDanger)
  }

  const handleStyle = useCallback(({ pressed }: { pressed: boolean }) => {
    return [...buttonStyle, pressed && styles.isPressed]
  }, [disabled])

  return (
    <View style={[styles.button, styles[size]]}>
       <Pressable style={handleStyle} disabled={isLoading || disabled} onPress={onPress}>
        {isLoading
          ? (
            <ActivityIndicator size={s(30)} color={ColorNeutral.neutral0}/>
            )
          : (
              <View style={styles.childContainer}>
                {leftIcon && leftIcon}
                <Text style={textStyle}
                >
                  {children}
                </Text>
              </View>
            )}

       </Pressable>
    </View>
  )
}

export default Button
