import React from 'react'
import { Text, Image, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'
import styles from './styles'
import { ColorNeutral, Layout } from '@src/themes'
import { Input, Label, Button, SafeAreaView, HeaderAuth } from '@src/components'
import { useLoginScreen } from '@src/hooks'
import { s } from '@src/helpers'
import { Controller } from 'react-hook-form'

const LoginScreen: React.FC = () => {
  const {
    handleNavigate,
    control,
    errors,
    handleSubmit,
    handleLogin
  } = useLoginScreen()

  return (
    <SafeAreaView style={styles.page}>
      <HeaderAuth />
      <View style={[Layout.container, Layout.fullPage]}>
        <KeyboardAvoidingView
          behavior={'padding'}
          style={styles.main}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            alwaysBounceVertical={false}
            contentContainerStyle={styles.scrollView}
          >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={Layout.fullPage}>
                <View style={styles.header}>
                  <Image
                    source={require('../../../../assets/img/unsia.png')}
                    style={styles.img}
                  />
                  <Text style={styles.title}>
                    Welcome back to Unsiagram
                  </Text>
                </View>
                <View style={styles.form}>
                  <View style={styles.control}>
                    <Label>Email</Label>
                    <Controller
                      control={control}
                      name='email'
                      render={({ field: { onBlur, onChange } }) => {
                        return (
                          <Input
                            leftIcon={
                              <Ionicons
                                name='mail-sharp'
                                color={ColorNeutral.neutral50}
                                size={s(16)}
                              />
                            }
                            message={errors?.email?.message ?? undefined}
                            placeholder='Type your email here...'
                            placeholderTextColor={ColorNeutral.neutral30}
                            onChangeText={onChange}
                            onBlur={onBlur}
                          />
                        )
                      }}
                    />
                  </View>
                  <View style={styles.control}>
                    <Label>Password</Label>
                    <Controller
                      control={control}
                      name='password'
                      render={({ field: { onBlur, onChange } }) => {
                        return (
                          <Input
                            leftIcon={
                              <FontAwesome5
                                name='lock'
                                color={ColorNeutral.neutral50}
                                size={s(16)}
                              />
                            }
                            onChangeText={onChange}
                            onBlur={onBlur}
                            secureTextEntry={true}
                            message={errors?.password?.message ?? undefined}
                            placeholder='Type your Password here...'
                            placeholderTextColor={ColorNeutral.neutral30}
                          />
                        )
                      }}
                    />
                  </View>
                  <View style={styles.control}>
                    <Text
                      onPress={handleNavigate.bind(this, 'RegisterScreen')}
                      style={[Layout.textRight, styles.rightText]}
                    >
                      {"Don't have any account ?"}
                    </Text>
                  </View>
                  <View style={styles.control}>
                    <Button
                      variant='primary'
                      onPress={handleSubmit(handleLogin)}
                    >
                      Login
                    </Button>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen
