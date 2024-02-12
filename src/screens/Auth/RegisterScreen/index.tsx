import React from 'react'
import { Text, Image, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'
import styles from './styles'
import { ColorNeutral, Layout } from '@src/themes'
import { Input, Label, Button, SafeAreaView, HeaderAuth } from '@src/components'
import { useRegisterScreen } from '@src/hooks'
import { s } from '@src/helpers'
import { Controller } from 'react-hook-form'

const RegisterScreen: React.FC = () => {
  const {
    handleNavigate,
    control,
    errors,
    handleSubmit,
    handleRegister
  } = useRegisterScreen()

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
                    Welcome to Unsiagram
                  </Text>
                </View>
                <View style={styles.form}>
                  <View style={styles.control}>
                    <Label>First name</Label>
                    <Controller
                      name='firstName'
                      control={control}
                      render={({ field: { onBlur, onChange } }) => {
                        return (
                          <Input
                            leftIcon={
                              <Ionicons
                                name='person-sharp'
                                color={ColorNeutral.neutral50}
                                size={s(13)}
                              />
                            }
                            message={errors?.firstName?.message ?? undefined}
                            placeholder='Type your first name here...'
                            placeholderTextColor={ColorNeutral.neutral30}
                            onBlur={onBlur}
                            onChangeText={onChange}
                          />
                        )
                      }}
                    />
                  </View>
                  <View style={styles.control}>
                    <Label>Last name</Label>
                    <Controller
                      control={control}
                      name='lastName'
                      render={({ field: { onBlur, onChange } }) => {
                        return (
                          <Input
                            leftIcon={
                              <Ionicons
                                name='person-sharp'
                                color={ColorNeutral.neutral50}
                                size={s(13)}
                              />
                            }
                            message={errors?.lastName?.message ?? undefined}
                            placeholder='Type your last name here...'
                            placeholderTextColor={ColorNeutral.neutral30}
                            onChangeText={onChange}
                            onBlur={onBlur}
                          />
                        )
                      }}
                    />
                  </View>
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
                                size={s(13)}
                              />
                            }
                            message={errors?.email?.message ?? undefined}
                            placeholder='Type your last name here...'
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
                                size={s(13)}
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
                    <Label>Repeat password</Label>
                    <Controller
                      control={control}
                      name='repeatPassword'
                      render={({ field: { onBlur, onChange } }) => {
                        return (
                          <Input
                            leftIcon={
                              <FontAwesome5
                                name='lock'
                                color={ColorNeutral.neutral50}
                                size={s(13)}
                              />
                            }
                            secureTextEntry={true}
                            message={errors?.repeatPassword?.message ?? undefined}
                            placeholder='Type your repeat password here...'
                            placeholderTextColor={ColorNeutral.neutral30}
                            onChangeText={onChange}
                            onBlur={onBlur}
                          />
                        )
                      }}
                    />
                  </View>
                  <View style={styles.control}>
                    <Text onPress={handleNavigate.bind(this, 'LoginScreen')} style={[Layout.textRight, styles.rightText]}>Already have an account ?</Text>
                  </View>
                  <View style={styles.control}>
                    <Button
                      variant='primary'
                      onPress={handleSubmit(handleRegister)}
                    >
                      Create an account
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

export default RegisterScreen
