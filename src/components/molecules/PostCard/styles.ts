import { s } from '@src/helpers'
import { ColorNeutral, Fonts } from '@src/themes'
import { Dimensions, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 'auto',
    backgroundColor: ColorNeutral.neutral0
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(5),
    paddingVertical: s(12),
    paddingHorizontal: s(15)
  },
  cardHeaderImg: {
    width: s(35),
    height: s(35),
    borderRadius: s(35),
    resizeMode: 'contain',
    objectFit: 'cover'
  },
  cardHeaderTitle: {
    fontFamily: Fonts.base,
    fontSize: s(16),
    color: ColorNeutral.neutral90
  },
  cardContent: {
    width: '100%'
  },
  cardContentPictures: {
    width: '100%'
  },
  cardContentPicture: {
    width: Dimensions.get('window').width,
    height: s(255),
    objectFit: 'cover',
    resizeMode: 'cover'
  },
  cardFooter: {
    paddingVertical: s(10),
    paddingHorizontal: s(15)
  },
  cardFooterIcons: {
    flexDirection: 'row',
    gap: s(15)
  },
  cardFooterIcon: {
    flexDirection: 'row',
    gap: s(7),
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardFooterText: {
    fontSize: s(15),
    color: ColorNeutral.neutral90,
    fontFamily: Fonts.base,
    lineHeight: s(22)
  },
  cardFooterCaption: {
    marginTop: s(10)
  },
  cardFooterCaptionFirstName: {
    fontSize: s(15),
    color: ColorNeutral.neutral90,
    fontFamily: Fonts.semiBold,
    textAlign: 'justify',
    lineHeight: s(22)
  }
})

export default styles
