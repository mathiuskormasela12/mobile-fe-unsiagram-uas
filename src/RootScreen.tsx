import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const RootScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to React Native + Expo</Text>
      <Text>App Name : {process.env.EXPO_PUBLIC_APP_NAME}</Text>
      <Text>App Version : {process.env.EXPO_PUBLIC_APP_VERSION}</Text>
      <Text>Build Number : {process.env.EXPO_PUBLIC_BUILD_NUMBER}</Text>
      <Text>API URL : {process.env.EXPO_PUBLIC_API_URL}</Text>
      <Text>APP URL : {process.env.EXPO_PUBLIC_APP_URL}</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default RootScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
