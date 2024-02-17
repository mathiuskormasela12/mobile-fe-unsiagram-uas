import { s } from '@src/helpers'
import { ColorError, Fonts } from '@src/themes'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
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
  }
})

export default styles
