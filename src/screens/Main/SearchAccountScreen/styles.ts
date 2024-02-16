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
    backgroundColor: ColorNeutral.neutral0,
    width: '100%'
  },
  flatList: {
    width: '100%'
  },
  main: {
    width: '100%'
  },
  emptyStateTitle: {
    fontFamily: Fonts.base,
    fontSize: s(16),
    textAlign: 'center',
    color: ColorNeutral.neutral80,
    marginTop: s(15)
  }
})

export default styles
