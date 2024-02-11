import { StatusBar } from 'expo-status-bar'
import React, { useCallback } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { type AppDispatch, type RootState } from './redux/store'
import { increment } from './redux/slices/counterSlice'
import { incrementTemp } from './redux/slices/counterTempSlice'

const RootScreen: React.FC = () => {
  const disptach = useDispatch<AppDispatch>()
  const like = useSelector((states: RootState) => states.counterReducer.count)
  const dislike = useSelector((states: RootState) => states.counterTempReducer.count)

  const handleLike = useCallback(() => {
    disptach(increment({
      count: 2
    }))
  }, [])

  const handleDislike = useCallback(() => {
    disptach(incrementTemp({
      count: 2
    }))
  }, [])

  return (
    <View style={styles.container}>
      <Text>Welcome to React Native + Expo</Text>
      <Text>App Name : {process.env.EXPO_PUBLIC_APP_NAME}</Text>
      <Text>App Version : {process.env.EXPO_PUBLIC_APP_VERSION}</Text>
      <Text>Build Number : {process.env.EXPO_PUBLIC_BUILD_NUMBER}</Text>
      <Text>API URL : {process.env.EXPO_PUBLIC_API_URL}</Text>
      <Text>APP URL : {process.env.EXPO_PUBLIC_APP_URL}</Text>
      <Button title={`Like ${like}`} onPress={handleLike} />
      <Button title={`Dislike ${dislike}`} onPress={handleDislike} />
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
