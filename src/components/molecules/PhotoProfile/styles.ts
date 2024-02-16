import { StyleSheet } from 'react-native'
import { ColorPrimary } from '@src/themes'
import { s } from '@src/helpers'

const styles = StyleSheet.create({
  imgCircleContainer: {
    height: s(85),
    width: s(85),
    borderRadius: s(85),
    borderWidth: s(4),
    borderColor: ColorPrimary.primary40,
    borderStyle: 'solid',
    overflow: 'hidden'
  },
  img: {
    width: '100%',
    height: '100%'
  }
})

export default styles
