import { s } from '@src/helpers'
import { ColorNeutral, Fonts } from '@src/themes'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  header: {
    backgroundColor: ColorNeutral.neutral0,
    paddingTop: s(15),
    paddingBottom: s(24),
    borderBottomWidth: s(1),
    borderBottomColor: ColorNeutral.neutral20,
    borderStyle: 'solid'
  },
  container: {
    justifyContent: 'space-between',
    position: 'relative'
  },
  col: {
    flex: 1
  },
  title: {
    fontFamily: Fonts.semiBold,
    fontSize: s(17),
    color: ColorNeutral.neutral90,
    textAlign: 'center'
  },
  closeButton: {
    position: 'absolute',
    right: 0
  }
})

export default styles
