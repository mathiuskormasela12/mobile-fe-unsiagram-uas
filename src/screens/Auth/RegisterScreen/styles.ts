import { s } from '@src/helpers'
import { ColorNeutral, ColorPrimary, Fonts } from '@src/themes'
import { Platform, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginTop: Platform.select({ android: s(15), ios: 0 })
  },
  img: {
    width: s(140),
    height: s(125),
    resizeMode: 'contain'
  },
  main: {
    justifyContent: 'center',
    flex: 1
  },
  title: {
    fontSize: s(24),
    color: ColorNeutral.neutral90,
    fontFamily: Fonts.semiBold,
    textAlign: 'center',
    marginTop: s(7),
    fontWeight: 'bold',
    width: s(300),
    lineHeight: s(32)
  },
  page: {
    flex: 1,
    backgroundColor: ColorNeutral.neutral0,
    paddingBottom: s(15)
  },
  form: {
    marginTop: s(35)
  },
  control: {
    marginBottom: s(18)
  },
  rightText: {
    fontFamily: Fonts.base,
    fontSize: s(14),
    color: ColorPrimary.primary50,
    marginBottom: s(10)
  },
  scrollView: {
    flexGrow: 1
  }
})

export default styles
