import { type RootStackParamList } from './navigation.types'

export type RegisterScreenHook = () => {
  handleNavigate: (screen: keyof RootStackParamList) => void
}
