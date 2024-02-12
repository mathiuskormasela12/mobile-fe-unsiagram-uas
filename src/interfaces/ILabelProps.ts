import { type PropsWithChildren } from 'react'
import { type TextStyle } from 'react-native'

export interface ILabelProps extends PropsWithChildren {
  style?: TextStyle | TextStyle[]
}
