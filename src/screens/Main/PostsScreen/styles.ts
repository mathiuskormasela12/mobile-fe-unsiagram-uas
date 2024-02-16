import { s } from '@src/helpers'
import { ColorNeutral, Fonts } from '@src/themes'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  title: {
    fontSize: s(16),
    color: 'red',
    fontFamily: Fonts.base
  },
  page: {
    flex: 1,
    backgroundColor: ColorNeutral.neutral0
  },
  main: {
    flex: 1,
    width: '100%',
    backgroundColor: ColorNeutral.neutral0,
    borderTopColor: ColorNeutral.neutral30,
    borderTopWidth: s(0.5)
  }
})

export default styles
