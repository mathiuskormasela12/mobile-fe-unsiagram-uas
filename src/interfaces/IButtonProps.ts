import { type PropsWithChildren } from 'react'

export interface IButtonProps extends PropsWithChildren {
  onPress?: () => void
  variant?: 'primary' | 'secondary' | 'danger'
  isLoading?: boolean
  disabled?: boolean
}
