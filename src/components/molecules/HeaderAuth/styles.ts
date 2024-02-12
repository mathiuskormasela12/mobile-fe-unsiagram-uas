import { s } from '@src/helpers'
import { ColorNeutral, ColorPrimary, Fonts, Layout } from '@src/themes'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: s(60),
    backgroundColor: ColorNeutral.neutral0,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
    elevation: 4
  },
  col: {
    flex: 1
  },
  textButton: {
    color: ColorPrimary.primary50,
    fontFamily: Fonts.semiBold
  },
  container: {
    ...Layout.container,
    width: '90%'
  }
})

export default styles
