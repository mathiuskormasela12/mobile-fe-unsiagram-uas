import { s } from '@src/helpers'
import { ColorError, ColorNeutral, Fonts } from '@src/themes'
import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  input: {
    width: '100%',
    backgroundColor: ColorNeutral.neutral10,
    borderRadius: s(8),
    height: s(55),
    paddingHorizontal: s(15),
    fontFamily: Fonts.base,
    fontSize: s(15),
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: ColorNeutral.neutral10,
    borderWidth: s(1),
    borderStyle: 'solid'
  },
  message: {
    color: ColorError.error60,
    fontFamily: Fonts.base,
    fontSize: s(14),
    marginTop: s(7)
  },
  sideCol: {
    width: s(25)
  },
  middleCol: {
    flex: 1,
    fontSize: s(16)
  },
  setToRight: {
    alignItems: 'flex-end'
  }
})

export default style
