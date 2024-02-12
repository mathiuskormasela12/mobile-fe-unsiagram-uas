import React, { useCallback } from 'react'
import { ActivityIndicator, Pressable, Text, View } from 'react-native'
import styles from './styles'
import { type IButtonProps } from '@src/interfaces'
import { s } from '@src/helpers'
import { ColorNeutral } from '@src/themes'

const Button: React.FC<IButtonProps> = ({ children, onPress, variant = 'primary', isLoading = false, disabled = false }) => {
  const handleStyle = useCallback(({ pressed }: { pressed: boolean }) => {
    return pressed ? [styles.container, styles.isPressed, styles[variant], disabled && styles.disabled] : [styles[variant], styles.container, disabled && styles.disabled]
  }, [disabled])

  return (
    <View style={[styles.button]}>
       <Pressable style={handleStyle} disabled={isLoading || disabled} onPress={onPress}>
        {isLoading
          ? (
            <ActivityIndicator size={s(30)} color={ColorNeutral.neutral0}/>
            )
          : (
              <Text style={[styles.text, disabled && styles.textDisabled]}>{children}</Text>
            )}

       </Pressable>
    </View>
  )
}

export default Button
