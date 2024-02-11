import RootScreen from '@src/RootScreen'
import { ReduxWrapper } from '@src/components'
import React, { Fragment, useEffect } from 'react'
import JailMonkey from 'jail-monkey'
import { Alert, BackHandler } from 'react-native'

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
   <Fragment>
    <ReduxWrapper>
      <RootScreen />
    </ReduxWrapper>
   </Fragment>
  )
}
