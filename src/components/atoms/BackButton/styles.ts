import { s } from '@src/helpers'
import { ColorNeutral } from '@src/themes'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  button: {
    height: s(42),
    width: s(42),
    borderRadius: s(8),
    backgroundColor: ColorNeutral.neutral0,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: s(1),
    borderColor: ColorNeutral.neutral30
  }
})

export default styles
