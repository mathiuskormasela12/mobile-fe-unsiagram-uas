import { type RootScreenHook } from '@src/types'
import { useCallback, useEffect, useState } from 'react'
import { loadAsync } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

export const useRootScreen: RootScreenHook = () => {
  const [isAppReady, setIsAppReady] = useState <boolean>(false)

  useEffect(() => {
    const prepare = async (): Promise<void> => {
      try {
        await loadAsync({
          base: require('../../assets/fonts/Rubik-Regular.ttf'),
          bold: require('../../assets/fonts/Rubik-Bold.ttf'),
          medium: require('../../assets/fonts/Rubik-Medium.ttf'),
          semiBold: require('../../assets/fonts/Rubik-SemiBold.ttf')
        })
      } catch (err) {
        console.error(err)
      } finally {
        setIsAppReady(() => true)
      }
    }

    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (isAppReady) {
      await SplashScreen.hideAsync()
    }
  }, [isAppReady])

  return {
    onLayoutRootView,
    isAppReady
  }
}
