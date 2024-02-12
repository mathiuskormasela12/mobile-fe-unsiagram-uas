import React from 'react'
import { Text, Image, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'
import styles from './styles'
import { ColorNeutral, Layout } from '@src/themes'
import { Input, Label, Button, SafeAreaView, HeaderAuth } from '@src/components'
import { useRegisterScreen } from '@src/hooks'
import { s } from '@src/helpers'

const RegisterScreen: React.FC = () => {
  const { handleNavigate } = useRegisterScreen()

  return (
    <SafeAreaView style={styles.page}>
      <HeaderAuth />
      <View style={[Layout.container, Layout.fullPage]}>
        <KeyboardAvoidingView behavior='position' style={styles.main}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={Layout.fullPage}>
                <View style={styles.header}>
                  <Image
                    source={require('../../../../assets/img/unsia.png')}
                    style={styles.img}
                  />
                  <Text style={styles.title}>Welcome to Unsiagram</Text>
                </View>
                <View style={styles.form}>
                  <View style={styles.control}>
                    <Label>First name</Label>
                    <Input
                      leftIcon={
                        <Ionicons
                          name='person-sharp'
                          color={ColorNeutral.neutral50}
                          size={s(13)}
                        />
                      }
                      message='hello'
                      placeholder='Type your first name here...'
                      placeholderTextColor={ColorNeutral.neutral30}
                    />
                  </View>
                  <View style={styles.control}>
                    <Label>Last name</Label>
                    <Input
                      leftIcon={
                        <Ionicons
                          name='person-sharp'
                          color={ColorNeutral.neutral50}
                          size={s(13)}
                        />
                      }
                      message='hello' placeholder='Type your last name here...'
                      placeholderTextColor={ColorNeutral.neutral30}
                    />
                  </View>
                  <View style={styles.control}>
                    <Label>Password</Label>
                    <Input
                      leftIcon={
                        <FontAwesome5
                          name='lock'
                          color={ColorNeutral.neutral50}
                          size={s(13)}
                        />
                      }
                      secureTextEntry={true}
                      message='hello'
                      placeholder='Type your Password here...'
                      placeholderTextColor={ColorNeutral.neutral30}
                    />
                  </View>
                  <View style={styles.control}>
                    <Label>Repeat password</Label>
                    <Input
                      leftIcon={
                        <FontAwesome5
                          name='lock'
                          color={ColorNeutral.neutral50}
                          size={s(13)}
                        />
                      }
                      secureTextEntry={true}
                      message='hello'
                      placeholder='Type your repeat password here...'
                      placeholderTextColor={ColorNeutral.neutral30}
                    />
                  </View>
                  <View style={styles.control}>
                    <Text onPress={handleNavigate.bind(this, 'LoginScreen')} style={[Layout.textRight, styles.rightText]}>Already have an account ?</Text>
                  </View>
                  <View style={styles.control}>
                    <Button disabled variant='primary' onPress={() => { console.log('Register') }}>
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
