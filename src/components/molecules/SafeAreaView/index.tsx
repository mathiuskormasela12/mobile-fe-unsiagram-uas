import { type ISafeAreaViewProps } from '@src/interfaces'
import React, { useMemo } from 'react'
import { View, type ViewStyle } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const SafeAreaView: React.FC<ISafeAreaViewProps> = ({ children, style: customStyles }) => {
  const { top, bottom } = useSafeAreaInsets()

  const style: ViewStyle = useMemo(() => {
    return {
      paddingTop: top,
      paddingBottom: bottom,
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, [top, bottom])

  return (
    <View style={[style, customStyles]}>
      {children}
    </View>
  )
}

export default SafeAreaView
