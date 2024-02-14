import RootScreen from '@src/RootScreen'
import { ReduxWrapper } from '@src/components'
import React, { useEffect } from 'react'
import JailMonkey from 'jail-monkey'
import { Alert, BackHandler } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import Toast from 'react-native-toast-message'
import { Layout } from '@src/themes'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 2000
    }
  }
})

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
    <QueryClientProvider client={queryClient}>
      <ReduxWrapper>
        <RootScreen />
        <Toast position='top' />
      </ReduxWrapper>
    </QueryClientProvider>
   </SafeAreaProvider>
  )
}
