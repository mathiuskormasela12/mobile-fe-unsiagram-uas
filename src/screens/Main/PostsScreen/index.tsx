import { SafeAreaView } from '@src/components'
import React from 'react'
import { Text } from 'react-native'
import styles from './styles'

const PostsScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.page}>
      <Text style={styles.title}>Hello PostsScreen</Text>
    </SafeAreaView>
  )
}

export default PostsScreen
