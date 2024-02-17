import React, { useCallback } from 'react'
import { Pressable, Text, View } from 'react-native'
import styles from './styles'
import { Layout } from '@src/themes'
import BackButton from '@src/components/atoms/BackButton'
import { useNavigation, useRoute } from '@react-navigation/native'
import { type RootStackParamList, type RootStackScreenProps } from '@src/types'

const HeaderAuth: React.FC = () => {
  const navigation = useNavigation<RootStackScreenProps<'LoginScreen' | 'RegisterScreen'>['navigation']>()
  const route = useRoute<RootStackScreenProps<'LoginScreen' | 'RegisterScreen'>['route']>()

  const handleGoBack = useCallback(() => {
    if (navigation.canGoBack()) {
      navigation.goBack()
    }
  }, [])

  const handleContinueToAuthPage = useCallback((screenName: keyof RootStackParamList) => {
    navigation.navigate(screenName)
  }, [])

  return (
    <View style={[styles.header, Layout.shadow1]}>
      <View style={[Layout.flexRow, Layout.flexCenter, styles.container]}>
        <View style={styles.col}>
          <BackButton onPress={handleGoBack} />
        </View>
        <View style={[styles.col, Layout.flexRow, Layout.justifyEnd]}>
          {route?.name === 'LoginScreen'
            ? (
             <Pressable onPress={handleContinueToAuthPage.bind(this, 'RegisterScreen')}>
              <Text style={styles.textButton}>Create Account</Text>
            </Pressable>
              )
            : route?.name === 'RegisterScreen'
              ? (
            <Pressable onPress={handleContinueToAuthPage.bind(this, 'LoginScreen')}>
              <Text style={styles.textButton}>Sign In Now</Text>
            </Pressable>
                )
              : <></>}
        </View>
      </View>
    </View>
  )
}

export default HeaderAuth
