import { s } from '@src/helpers'
import { ColorNeutral, Fonts } from '@src/themes'
import { Platform, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  name: {
    fontSize: s(20),
    color: ColorNeutral.neutral0,
    fontFamily: Fonts.semiBold
  },
  username: {
    fontSize: s(16),
    color: ColorNeutral.neutral0,
    fontFamily: Fonts.base
  },
  text: {
    fontSize: s(16),
    color: ColorNeutral.neutral0,
    fontFamily: Fonts.base
  },
  page: {
    flex: 1,
    backgroundColor: ColorNeutral.neutral0
  },
  photo: {
    height: s(350),
    position: 'relative',
    backgroundColor: 'transparent'
  },
  backdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  },
  safeAreaView: {
    paddingTop: Platform.select({ android: s(25), ios: s(40) }),
    flex: 1
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: s(18),
    paddingHorizontal: s(12)
  },
  col: {
    flex: 1
  },
  textContent: {
    gap: s(25),
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flexWrap: 'wrap'
  },
  title: {
    fontSize: s(18),
    color: ColorNeutral.neutral90,
    fontFamily: Fonts.semiBold,
    paddingVertical: s(15)
  },
  column: {},
  love: {
    marginVertical: s(10),
    flexDirection: 'row',
    gap: s(7)
  },
  follow: {
    fontSize: s(16),
    color: ColorNeutral.neutral0,
    fontFamily: Fonts.base
  }
})

export default styles
