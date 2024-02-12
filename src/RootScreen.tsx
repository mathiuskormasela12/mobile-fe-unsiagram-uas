import { StatusBar } from 'expo-status-bar'
import React, { Fragment } from 'react'
import { ColorNeutral, Layout } from '@src/themes'
import RootNavigation from '@src/navigations/RootNavigation'
import { useRootScreen } from './hooks'
import { View } from 'react-native'

const RootScreen: React.FC = () => {
  const { onLayoutRootView, isAppReady } = useRootScreen()

  if (!isAppReady) {
    return null
  }

  return (
   <Fragment>
    <StatusBar style='dark' backgroundColor={ColorNeutral.neutral0} />
    <View onLayout={onLayoutRootView} style={Layout.fullPage}>
      <RootNavigation />
    </View>
   </Fragment>
  )
}

export default RootScreen
