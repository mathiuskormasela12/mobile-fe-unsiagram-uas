import { s } from '@src/helpers'
import { ColorNeutral, Fonts, Layout } from '@src/themes'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    ...Layout.flexCenter
  },
  box: {
    backgroundColor: ColorNeutral.neutral0,
    width: s(350),
    height: 'auto',
    paddingVertical: s(25),
    paddingHorizontal: s(25),
    borderRadius: s(10),
    gap: s(15)
  },
  header: {
    paddingTop: s(10)
  },
  footer: {
    flexDirection: 'row',
    gap: s(15)
  },
  title: {
    fontSize: s(16),
    fontFamily: Fonts.semiBold,
    color: ColorNeutral.neutral90,
    textAlign: 'center',
    lineHeight: s(22)
  },
  subtitle: {
    fontSize: s(14),
    fontFamily: Fonts.base,
    color: ColorNeutral.neutral90,
    textAlign: 'center',
    lineHeight: s(22)
  },
  footerCol: {
    flex: 1,
    width: '100%'
  }
})

export default styles
