import { type PropsWithChildren } from 'react'
import { type ViewStyle } from 'react-native'

export interface ISafeAreaViewProps extends PropsWithChildren {
  style?: ViewStyle | ViewStyle[]
}
