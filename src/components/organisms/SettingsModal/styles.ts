import { s } from '@src/helpers'
import { ColorNeutral, Fonts, Layout } from '@src/themes'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  card: {
    ...Layout.flexRow,
    paddingHorizontal: s(20),
    gap: s(10),
    height: s(55),
    ...Layout.alignCenter
  },
  colLeft: {},
  colRight: {},
  text: {
    fontFamily: Fonts.base,
    fontSize: s(16),
    color: ColorNeutral.neutral90
  },
  isPressed: {
    opacity: 0.5
  }
})

export default styles
