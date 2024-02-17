import React, { type PropsWithChildren } from 'react'
import { Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { s } from '@src/helpers'
import { ColorError } from '@src/themes'
import styles from './styles'

const ErrorMessage: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <View style={styles.wrapperMessage}>
    <View style={styles.messageLeftCol}>
      <MaterialIcons
        name='info'
        size={s(15)}
        color={ColorError.error50}
      />
    </View>
    <View style={styles.messageRightCol}>
      <Text
        style={styles.message}
      >
        {children}
      </Text>
    </View>
  </View>
  )
}

export default ErrorMessage
