import { s } from '@src/helpers'
import { ColorNeutral, Fonts } from '@src/themes'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  label: {
    fontFamily: Fonts.base,
    fontSize: s(16),
    color: ColorNeutral.neutral90,
    marginBottom: s(5)
  }
})

export default styles
