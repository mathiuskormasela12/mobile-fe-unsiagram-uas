import { s } from '@src/helpers'
import { ColorNeutral, Fonts, Layout } from '@src/themes'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: s(65),
    backgroundColor: ColorNeutral.neutral0,
    elevation: 5,
    ...Layout.shadow1,
    ...Layout.flexCenter
  },
  title: {
    fontFamily: Fonts.semiBold,
    fontSize: s(20),
    color: ColorNeutral.neutral90
  },
  imgBrand: {
    flexDirection: 'row',
    gap: s(5),
    ...Layout.flexCenter
  },
  img: {
    resizeMode: 'contain',
    width: s(50),
    height: s(50)
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  col: {
    justifyContent: 'center'
  }
})

export default styles
