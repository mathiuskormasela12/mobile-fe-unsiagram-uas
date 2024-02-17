import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AddPostScreen, MyAccountScreen, PostsScreen, SearchAccountScreen } from '@src/screens'
import { type RootStackBottomTabParamList } from '@src/types'
import React from 'react'
import { Ionicons, AntDesign, MaterialIcons, Entypo } from '@expo/vector-icons'
import { ColorNeutral, ColorPrimary } from '@src/themes'
import { Platform } from 'react-native'
import { s } from '@src/helpers'
import { useLoginRequired } from '@src/hooks'

const Stack = createBottomTabNavigator<RootStackBottomTabParamList>()

const BottomTabNavigation: React.FC = () => {
  const loginRequired = useLoginRequired()

  return (
    <Stack.Navigator
      initialRouteName='PostsScreen'
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: ColorPrimary.primary40,
        tabBarInactiveTintColor: ColorNeutral.neutral30,
        tabBarStyle: {
          backgroundColor: ColorNeutral.neutral0,
          height: Platform.select({ android: s(60), ios: s(80) })
        },
        tabBarShowLabel: false
      }}
      sceneContainerStyle={{
        backgroundColor: ColorNeutral.neutral0
      }}
    >
      <Stack.Screen
        name='PostsScreen'
        component={PostsScreen}
        options={{
          title: 'Post',
          tabBarIcon: ({ color }) => {
            return <Entypo name='home' color={color} size={s(26)} />
          }
        }}
        listeners={({ navigation, route }) => {
          return {
            tabPress: (event) => {
              event.preventDefault()
              loginRequired(() => {
                navigation.navigate(route.name)
              })
            }
          }
        }}
      />
      <Stack.Screen
        name='SearchAccountScreen'
        component={SearchAccountScreen}
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => {
            return <AntDesign name='search1' color={color} size={s(26)} />
          }
        }}
        listeners={({ navigation, route }) => {
          return {
            tabPress: (event) => {
              event.preventDefault()
              loginRequired(() => {
                navigation.navigate(route.name)
              })
            }
          }
        }}
      />
      <Stack.Screen
        name='AddPostScreen'
        component={AddPostScreen}
        options={{
          title: 'Add Post',
          tabBarIcon: ({ color }) => {
            return <MaterialIcons name='add-circle' color={color} size={s(26)} />
          }
        }}
        listeners={({ navigation, route }) => {
          return {
            tabPress: (event) => {
              event.preventDefault()
              loginRequired(() => {
                navigation.navigate(route.name)
              })
            }
          }
        }}
      />
      <Stack.Screen
        name='MyAccountScreen'
        component={MyAccountScreen}
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => {
            return <Ionicons name='person-sharp' color={color} size={s(26)} />
          }
        }}
        listeners={({ navigation, route }) => {
          return {
            tabPress: (event) => {
              event.preventDefault()
              loginRequired(() => {
                navigation.navigate(route.name)
              })
            }
          }
        }}
      />
    </Stack.Navigator>
  )
}

export default BottomTabNavigation
