import { s } from '@src/helpers'
import { ColorNeutral, Fonts } from '@src/themes'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  label: {
    fontSize: s(16),
    color: ColorNeutral.neutral90,
    fontFamily: Fonts.semiBold
  },
  control: {
    marginVertical: s(10)
  },
  page: {
    flex: 1,
    backgroundColor: ColorNeutral.neutral0
  },
  field: {
    marginTop: s(10)
  },
  hero: {
    paddingVertical: s(15)
  },
  photoContainer: {
    gap: s(15),
    flexDirection: 'row'
  },
  main: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: s(10)
  },
  btnCol: {
    flex: 1
  },
  text: {
    textAlign: 'left',
    fontFamily: Fonts.base,
    fontSize: s(16),
    color: ColorNeutral.neutral90,
    marginBottom: s(12)
  }
})

export default styles
