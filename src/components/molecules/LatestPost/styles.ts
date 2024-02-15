import { s } from '@src/helpers'
import { ColorNeutral, ColorPrimary, Fonts, Layout } from '@src/themes'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  imgCircleWrapper: {
    gap: s(2.5)
  },
  imgCircle: {
    position: 'relative',
    marginTop: s(12)
  },
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
  },
  imgWrapperIcon: {
    position: 'absolute',
    bottom: s(7),
    right: s(3)
  },
  imgWrapperIconContainer: {
    width: s(22),
    height: s(22),
    borderRadius: s(22),
    backgroundColor: ColorPrimary.primary50,
    ...Layout.flexCenter
  },
  latestPost: {
    backgroundColor: ColorNeutral.neutral0,
    width: '100%'
  },
  flatList: {
    flexDirection: 'row',
    gap: s(5),
    justifyContent: 'space-between',
    paddingBottom: s(15)
  },
  name: {
    color: ColorNeutral.neutral90,
    fontFamily: Fonts.base,
    fontSize: s(13),
    textAlign: 'center',
    textTransform: 'capitalize'
  }
})

export default styles
