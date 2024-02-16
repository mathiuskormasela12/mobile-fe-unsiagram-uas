import { s } from '@src/helpers'
import { ColorError, ColorNeutral, Fonts } from '@src/themes'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  commentList: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: s(8)
  },
  commentListColLeft: {
    width: 'auto'
  },
  commentListColRight: {
    flex: 9
  },
  commentText: {
    fontSize: s(14),
    color: ColorNeutral.neutral80,
    fontFamily: Fonts.base,
    lineHeight: s(18)
  },
  title: {
    fontSize: s(14),
    color: ColorNeutral.neutral90,
    fontFamily: Fonts.base,
    lineHeight: s(18),
    marginBottom: s(3)
  },
  textContainer: {
    gap: s(5),
    marginTop: s(10)
  },
  textLike: {
    color: ColorError.error50
  },
  iconContainer: {
    gap: s(7),
    justifyContent: 'flex-end'
  }
})

export default styles
