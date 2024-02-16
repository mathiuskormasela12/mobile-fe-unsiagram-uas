import { s } from '@src/helpers'
import { ColorNeutral, Layout } from '@src/themes'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: s(80),
    backgroundColor: ColorNeutral.neutral0,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
    elevation: 4
  },
  leftCol: {
    marginRight: s(8)
  },
  rightCol: {
    flex: 1
  },
  container: {
    ...Layout.container,
    width: '93%'
  }
})

export default styles
