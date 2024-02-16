import React, { useCallback, useEffect, useState } from 'react'
import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import styles from './styles'
import { ColorNeutral, Layout } from '@src/themes'
import BackButton from '@src/components/atoms/BackButton'
import { useNavigation } from '@react-navigation/native'
import { type RootStackScreenProps } from '@src/types'
import Input from '@src/components/atoms/Input'
import { s } from '@src/helpers'

const HeaderSearchAccount: React.FC = () => {
  const navigation = useNavigation<RootStackScreenProps<'LoginScreen' | 'RegisterScreen'>['navigation']>()
  const [keyword, setKeyword] = useState<string>('')

  const handleGoBack = useCallback(() => {
    if (navigation.canGoBack()) {
      navigation.goBack()
    }
  }, [])

  const handleOnChange = useCallback((value: string) => {
    setKeyword(() => value)
  }, [setKeyword])

  const handleClearTextInput = useCallback(() => {
    setKeyword(() => '')
  }, [setKeyword])

  useEffect(() => {
    console.log("You're looking for", keyword)
  }, [keyword])

  return (
    <View style={[styles.header, Layout.shadow1]}>
      <View style={styles.container}>
        <View style={[Layout.flexRow, Layout.alignCenter]}>
          <View style={[styles.leftCol]}>
            <BackButton onPress={handleGoBack} />
          </View>
          <View style={[styles.rightCol, Layout.flexRow]}>
            <Input
              placeholder='Search account...'
              placeholderTextColor={ColorNeutral.neutral50}
              value={keyword}
              onChangeText={handleOnChange}
              size='sm'
              leftIcon={
                <Ionicons
                  name='search'
                  color={ColorNeutral.neutral50}
                  size={s(19)}
                />
              }
              rightIcon={
                keyword.length > 0 && (
                  <Ionicons
                    name='close'
                    color={ColorNeutral.neutral50}
                    size={s(19)}
                    onPress={handleClearTextInput}
                  />
                )
              }
            />
          </View>
        </View>
      </View>
    </View>
  )
}

export default HeaderSearchAccount
