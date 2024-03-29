import { s } from '@src/helpers'
import { ColorError, ColorNeutral, Fonts } from '@src/themes'
import { Platform, StyleSheet } from 'react-native'

const style = StyleSheet.create({
  input: {
    width: '100%',
    backgroundColor: ColorNeutral.neutral0,
    paddingHorizontal: s(15),
    fontFamily: Fonts.base,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: ColorNeutral.neutral30,
    borderWidth: s(0.8),
    borderStyle: 'solid'
  },
  wrapperMessage: {
    flexDirection: 'row',
    marginTop: s(7),
    gap: s(6)
  },
  messageLeftCol: {
    width: 'auto'
  },
  messageRightCol: {
    flex: 1
  },
  message: {
    color: ColorError.error50,
    fontFamily: Fonts.base,
    fontSize: s(13),
    textAlign: 'justify',
    lineHeight: s(17)
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
  },
  md: {
    height: Platform.select({ ios: s(54), android: s(52) }),
    fontSize: s(15),
    borderRadius: s(10)
  },
  sm: {
    height: Platform.select({ ios: s(45), android: s(45) }),
    fontSize: s(15),
    borderRadius: s(10)
  },
  mdTextArea: {
    height: Platform.select({ ios: s(154), android: s(152) }),
    fontSize: s(15),
    borderRadius: s(10),
    alignItems: 'flex-start',
    paddingTop: s(12)
  },
  smTextArea: {
    height: Platform.select({ ios: s(145), android: s(145) }),
    fontSize: s(15),
    borderRadius: s(10),
    alignItems: 'flex-start',
    paddingTop: s(12)
  }
})

export default style
