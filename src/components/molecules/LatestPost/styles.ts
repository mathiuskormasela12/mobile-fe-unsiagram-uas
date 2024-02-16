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
    width: '100%',
    borderBottomColor: ColorNeutral.neutral30,
    borderBottomWidth: s(0.5),
    borderStyle: 'solid'
  },
  flatList: {
    flexDirection: 'row',
    gap: s(10),
    justifyContent: 'space-between',
    paddingBottom: s(15)
  },
  name: {
    color: ColorNeutral.neutral90,
    fontFamily: Fonts.base,
    fontSize: s(13),
    textAlign: 'center',
    textTransform: 'capitalize'
  },
  flatListItemFirst: {
    paddingLeft: s(7)
  },
  flatListItemLast: {
    paddingRight: s(7)
  }
})

export default styles
