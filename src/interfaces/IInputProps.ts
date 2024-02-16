import type React from 'react'
import { type TextInput, type TextInputProps } from 'react-native'

export interface IInputProps extends TextInputProps {
  message?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  isBottomSheet?: boolean
  size?: 'sm' | 'md'
  ref?: React.Ref<TextInput>
  innerRef?: React.Ref<TextInput>
}
