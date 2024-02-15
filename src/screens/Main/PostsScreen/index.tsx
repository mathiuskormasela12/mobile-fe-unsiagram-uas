import { Header, LatestPost, SafeAreaView } from '@src/components'
import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'
import usePostsScreen from '@src/hooks/usePostsScreen'
import { Layout } from '@src/themes'

const PostsScreen: React.FC = () => {
  const { handleMessengerPress } = usePostsScreen()

  return (
    <SafeAreaView style={styles.page}>
      <Header
        title='Unsiagram'
        onPressRightIcon={handleMessengerPress}
      />
      <LatestPost />
      <View style={styles.main}>
        <View style={Layout.container}>
          <Text style={styles.title}>Hello PostsScreen</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default PostsScreen
