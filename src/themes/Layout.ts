import { StyleSheet } from 'react-native'
import { ColorNeutral } from './Colors'
import { Fonts } from './Fonts'

export const Layout = StyleSheet.create({
  fullPage: {
    flex: 1
  },
  flexRow: {
    flexDirection: 'row'
  },
  justifyEnd: {
    justifyContent: 'flex-end'
  },
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    width: '85%',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  textLeft: {
    textAlign: 'left'
  },
  textCenter: {
    textAlign: 'center'
  },
  textRight: {
    textAlign: 'right'
  },
  textJustify: {
    textAlign: 'justify'
  },
  shadow1: {
    shadowColor: ColorNeutral.neutral50,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.1,
    shadowRadius: 0.8
  },
  textSemiBold: {
    fontFamily: Fonts.semiBold
  },
  alignEnd: {
    alignItems: 'flex-end'
  },
  alignStart: {
    alignItems: 'flex-start'
  },
  alignCenter: {
    alignItems: 'center'
  }
})
