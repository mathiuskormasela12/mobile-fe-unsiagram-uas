import { type BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { type NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootStackParamList = {
  RegisterScreen: undefined
  LoginScreen: undefined
  ForgotPasswordScreen: undefined
  ResetPasswordScreen: undefined
  ChatListScreen: undefined
  ChatRoomScreen: undefined
  MainScreen: undefined
}

export type RootStackBottomTabParamList = {
  PostsScreen: undefined
  SearchAccountScreen: undefined
  AddPostScreen: undefined
  MyAccountScreen: undefined
}

export type RootStackDrawerParamList = {
  EditMyAccountScreen: undefined
  ResetMyPasswordScreen: undefined
}

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>

export type RootStackBottomTabScreenProps<T extends keyof RootStackBottomTabParamList> = BottomTabScreenProps<RootStackBottomTabParamList, T>
