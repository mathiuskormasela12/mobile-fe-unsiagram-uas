import { s } from '@src/helpers'
import { ColorNeutral, Fonts, Layout } from '@src/themes'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  card: {
    width: '100%',
    gap: s(7),
    height: 'auto',
    paddingVertical: s(20),
    backgroundColor: ColorNeutral.neutral0,
    paddingHorizontal: s(10)
  },
  leftCard: {
    ...Layout.flexCenter,
    width: s(70),
    justifyContent: 'flex-start'
  },
  rightCard: {
    gap: s(5),
    flex: 1
  },
  isPressed: {
    opacity: 0.5
  },
  title: {
    fontSize: s(16),
    fontFamily: Fonts.semiBold,
    lineHeight: s(18)
  },
  subtitle: {
    fontSize: s(15),
    fontFamily: Fonts.base,
    lineHeight: s(18)
  }
})

export default styles
