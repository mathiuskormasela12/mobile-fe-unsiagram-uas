import { s } from '@src/helpers'
import { ColorNeutral, ColorPrimary, Fonts } from '@src/themes'
import { type DimensionValue, StyleSheet, Platform } from 'react-native'

const buttonHeight = Platform.select({ ios: s(54), android: s(52) })
const buttonWidth: DimensionValue = '100%'

const styles = StyleSheet.create({
  button: {
    overflow: 'hidden'
  },
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: s(8),
    borderWidth: s(1),
    borderStyle: 'solid'
  },
  isPressed: {
    opacity: 0.9
  },
  text: {
    color: ColorNeutral.neutral0,
    fontFamily: Fonts.semiBold,
    fontSize: s(16)
  },
  primary: {
    backgroundColor: ColorPrimary.primary50,
    borderColor: ColorPrimary.primary50
  },
  secondary: {
    backgroundColor: ColorPrimary.primary60,
    borderColor: ColorPrimary.primary60
  },
  danger: {
    backgroundColor: ColorPrimary.primary60,
    borderColor: ColorPrimary.primary60
  },
  disabled: {
    backgroundColor: ColorNeutral.neutral10
  },
  textDisabled: {
    color: ColorNeutral.neutral30
  },
  outline: {
    backgroundColor: 'transparent'
  },
  textPrimary: {
    color: ColorPrimary.primary50
  },
  textSecondary: {
    color: ColorPrimary.primary60
  },
  textDanger: {
    color: ColorPrimary.primary60
  },
  childContainer: {
    flexDirection: 'row',
    gap: s(5)
  },
  md: {
    width: buttonWidth,
    height: buttonHeight
  },
  sm: {
    height: Platform.select({ ios: s(44), android: s(42) }),
    width: buttonWidth
  }
})

export default styles
