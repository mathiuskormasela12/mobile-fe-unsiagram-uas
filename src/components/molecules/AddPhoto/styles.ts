import { s } from '@src/helpers'
import { ColorNeutral, ColorPrimary, Fonts, Layout } from '@src/themes'
import { Dimensions, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  card: {
    backgroundColor: ColorNeutral.neutral0,
    width: 85 / 100 * Dimensions.get('window').width,
    height: s(185),
    borderWidth: s(1),
    borderStyle: 'dashed',
    borderColor: ColorPrimary.primary40,
    borderRadius: s(10),
    overflow: 'hidden'
  },
  text: {
    fontFamily: Fonts.semiBold,
    fontSize: s(14),
    color: ColorPrimary.primary40
  },
  container: {
    width: '100%',
    height: '100%',
    gap: s(6),
    overflow: 'hidden',
    ...Layout.flexCenter
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    objectFit: 'cover'
  },
  borderNone: {
    borderWidth: 0
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 1
  },
  closeBtn: {
    zIndex: 2,
    position: 'absolute',
    right: s(7),
    top: s(7)
  }
})

export default styles
