import type React from 'react'

export interface IHeaderProps {
  title: string
  onPressRightIcon: () => void
  rightIcon?: React.ReactNode | boolean
  leftIcon?: React.ReactNode
  transparent?: boolean
}
