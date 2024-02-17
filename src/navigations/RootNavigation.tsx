import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginScreen, RegisterScreen, ResetPasswordScreen } from '@src/screens'
import { type RootStackParamList } from '@src/types'
import React from 'react'
import BottomTabNavigation from './BottomTabNavigation'
import { useSelector } from 'react-redux'
import { type RootState } from '@src/redux/store'

const Stack = createNativeStackNavigator<RootStackParamList>()

const RootNavigation: React.FC = () => {
  const accessToken = useSelector((states: RootState) => states.authReducer.accessToken)
  const refreshToken = useSelector((states: RootState) => states.authReducer.refreshToken)

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={accessToken.length === 0 && refreshToken.length === 0 ? 'LoginScreen' : 'MainScreen'}
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
