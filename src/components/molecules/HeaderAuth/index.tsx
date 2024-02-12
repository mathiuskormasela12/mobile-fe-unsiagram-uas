import React, { useCallback } from 'react'
import { Pressable, Text, View } from 'react-native'
import styles from './styles'
import { Layout } from '@src/themes'
import BackButton from '@src/components/atoms/BackButton'
import { useNavigation } from '@react-navigation/native'
import { type RootStackScreenProps } from '@src/types'

const HeaderAuth: React.FC = () => {
  const navigation = useNavigation<RootStackScreenProps<'LoginScreen' | 'RegisterScreen'>['navigation']>()

  const handleGoBack = useCallback(() => {
    if (navigation.canGoBack()) {
      navigation.goBack()
    }
  }, [])

  const handleContinueAsGuest = useCallback(() => {
    navigation.navigate('MainScreen')
  }, [])

  return (
    <View style={[styles.header, Layout.shadow1]}>
      <View style={[Layout.flexRow, Layout.flexCenter, styles.container]}>
        <View style={styles.col}>
          <BackButton onPress={handleGoBack} />
        </View>
        <View style={[styles.col, Layout.flexRow, Layout.justifyEnd]}>
          <Pressable onPress={handleContinueAsGuest}>
            <Text style={styles.textButton}>Continue as guest</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default HeaderAuth
