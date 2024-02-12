import React from 'react'
import { Text } from 'react-native'
import styles from './styles'
import { type ILabelProps } from '@src/interfaces'

const Label: React.FC<ILabelProps> = ({ children, style: customStyle }) => {
  return (
    <Text style={[styles.label, customStyle]}>
      {children}
    </Text>
  )
}

export default Label
