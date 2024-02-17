import { s } from '@src/helpers'
import { ColorNeutral } from '@src/themes'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  button: {
    backgroundColor: ColorNeutral.neutral0,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: s(1),
    borderColor: ColorNeutral.neutral30
  },
  rounded: {
    borderRadius: s(38)
  },
  md: {
    height: s(38),
    width: s(38),
    borderRadius: s(8)
  },
  sm: {
    height: s(25),
    width: s(25),
    borderRadius: s(8)
  }
})

export default styles
