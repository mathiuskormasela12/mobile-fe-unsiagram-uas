import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ForgotPasswordScreen, LoginScreen, RegisterScreen, ResetPasswordScreen } from '@src/screens'
import { type RootStackParamList } from '@src/types'
import React from 'react'
import BottomTabNavigation from './BottomTabNavigation'

const Stack = createNativeStackNavigator<RootStackParamList>()

const RootNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='LoginScreen'
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name='RegisterScreen'
          component={RegisterScreen}
        />
        <Stack.Screen
          name='LoginScreen'
          component={LoginScreen}
        />
        <Stack.Screen
          name='ForgotPasswordScreen'
          component={ForgotPasswordScreen}
        />
        <Stack.Screen
          name='ResetPasswordScreen'
          component={ResetPasswordScreen}
        />
        <Stack.Screen
          name='MainScreen'
          component={BottomTabNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigation
