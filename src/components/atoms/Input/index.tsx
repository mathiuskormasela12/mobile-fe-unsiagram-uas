import { type IInputProps } from '@src/interfaces'
import React, { Fragment, useCallback, useState } from 'react'
import { Text, TextInput, View, type ViewStyle } from 'react-native'
import { Octicons, MaterialIcons } from '@expo/vector-icons'
import style from './styles'
import { ColorError, ColorNeutral } from '@src/themes'
import { s } from '@src/helpers'
import { BottomSheetTextInput } from '@gorhom/bottom-sheet'

const Input: React.FC<IInputProps> = ({
  isBottomSheet,
  message,
  leftIcon,
  rightIcon,
  size = 'md',
  ...props
}) => {
  const [visible, setVisible] = useState<boolean>(props?.secureTextEntry ?? false)
  const handleShowPassword = useCallback((): void => {
    setVisible((currentVisible) => !currentVisible)
  }, [])
  const inputStyles: ViewStyle[] = [style.input]

  switch (size) {
    case 'sm':
      inputStyles.push(props.multiline ? style.smTextArea : style.sm)
      break
    default :
      inputStyles.push(props.multiline ? style.mdTextArea : style.md)
  }

  const TextField = isBottomSheet ? BottomSheetTextInput : TextInput

  return (
    <Fragment>
      <View style={inputStyles}>
        {leftIcon !== undefined && (
          <View style={style.sideCol}>
            {leftIcon}
          </View>
        )}
        <TextField
          {...props}
          style={style.middleCol}
          secureTextEntry={visible}
          autoCapitalize='none'
          ref={(props.ref ? props.ref : props.innerRef) as any}
        />
        {typeof props?.secureTextEntry === 'boolean' &&
          (
            <View style={[style.sideCol, style.setToRight]}>
              <Octicons
                onPress={handleShowPassword}
                name={visible ? 'eye-closed' : 'eye'}
                color={ColorNeutral.neutral60}
                size={s(16)}
              />
            </View>
          )
        }
        {(rightIcon && !props?.secureTextEntry) && (
          <View style={[style.sideCol, style.setToRight]}>
            {rightIcon}
          </View>
        )}
      </View>
      {(typeof message === 'string' && message?.length > 0) && (
        <View style={style.wrapperMessage}>
          <View style={style.messageLeftCol}>
            <MaterialIcons
              name='info'
              size={s(15)}
              color={ColorError.error50}
            />
          </View>
          <View style={style.messageRightCol}>
            <Text
              style={style.message}
            >
              {message}
            </Text>
          </View>
        </View>
      )}
    </Fragment>
  )
}

export default Input
