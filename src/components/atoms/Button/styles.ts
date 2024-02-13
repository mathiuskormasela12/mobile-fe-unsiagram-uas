import { s } from '@src/helpers'
import { ColorNeutral, ColorPrimary, Fonts } from '@src/themes'
import { type DimensionValue, StyleSheet, Platform } from 'react-native'

const buttonHeight = Platform.select({ ios: s(54), android: s(52) })
const buttonWidth: DimensionValue = '100%'

const styles = StyleSheet.create({
  button: {
    width: buttonWidth,
    height: buttonHeight,
    overflow: 'hidden',
    borderRadius: s(8)
  },
  container: {
    width: buttonWidth,
    height: buttonHeight,
    justifyContent: 'center',
    alignItems: 'center'
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
    backgroundColor: ColorPrimary.primary50
  },
  secondary: {
    backgroundColor: ColorPrimary.primary60
  },
  danger: {
    backgroundColor: ColorPrimary.primary60
  },
  disabled: {
    backgroundColor: ColorNeutral.neutral10
  },
  textDisabled: {
    color: ColorNeutral.neutral30
  }
})

export default styles
