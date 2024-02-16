import type React from 'react'
import { type TextInputProps } from 'react-native'

export interface IInputProps extends TextInputProps {
  message?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  isBottomSheet?: boolean
}
