import RootScreen from '@src/RootScreen'
import { ReduxWrapper } from '@src/components'
import React, { useEffect } from 'react'
import JailMonkey from 'jail-monkey'
import { Alert, BackHandler } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Layout } from '@src/themes'

export default function App (): React.ReactNode {
  const handleExitApp = (): void => {
    BackHandler.exitApp()
  }

  useEffect(() => {
    if (JailMonkey.isJailBroken()) {
      Alert.alert('Warning', "Careful, we've detected that your device has been jailbroken/rooted", [
        {
          text: 'Ok',
          style: 'destructive',
          onPress: handleExitApp
        }
      ])
    }
  }, [])

  return (
   <SafeAreaProvider style={Layout.fullPage}>
    <ReduxWrapper>
      <RootScreen />
    </ReduxWrapper>
   </SafeAreaProvider>
  )
}
