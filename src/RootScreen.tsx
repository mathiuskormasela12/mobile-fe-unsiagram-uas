import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { ColorNeutral, Layout } from '@src/themes'
import RootNavigation from '@src/navigations/RootNavigation'
import { useRootScreen } from './hooks'
import { View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'

const RootScreen: React.FC = () => {
  const { onLayoutRootView, isAppReady } = useRootScreen()

  if (!isAppReady) {
    return null
  }

  return (
   <BottomSheetModalProvider>
    <StatusBar style='dark' backgroundColor={ColorNeutral.neutral0} />
      <GestureHandlerRootView style={Layout.fullPage}>
        <View onLayout={onLayoutRootView} style={Layout.fullPage}>
          <RootNavigation />
        </View>
      </GestureHandlerRootView>
   </BottomSheetModalProvider>
  )
}

export default RootScreen
