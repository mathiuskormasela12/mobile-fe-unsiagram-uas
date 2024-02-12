import { SafeAreaView } from '@src/components'
import React from 'react'
import { Text } from 'react-native'
import styles from './styles'

const MyAccountScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.page}>
      <Text style={styles.title}>Hello MyAccountScreen</Text>
    </SafeAreaView>
  )
}

export default MyAccountScreen
