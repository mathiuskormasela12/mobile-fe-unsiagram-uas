import RootScreen from '@src/RootScreen'
import { ReduxWrapper } from '@src/components'
import React, { Fragment } from 'react'

export default function App (): React.ReactNode {
  return (
   <Fragment>
    <ReduxWrapper>
      <RootScreen />
    </ReduxWrapper>
   </Fragment>
  )
}
