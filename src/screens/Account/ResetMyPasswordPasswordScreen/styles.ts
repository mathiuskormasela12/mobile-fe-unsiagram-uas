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
  }
})

export default styles
