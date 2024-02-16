import React from 'react'
import styles from './styles'
import { BottomSheetBackdrop, type BottomSheetBackdropProps } from '@gorhom/bottom-sheet'

const CustomBackdrop: React.FC<BottomSheetBackdropProps> = (props) => {
  return (
    <BottomSheetBackdrop
      {...props}
      appearsOnIndex={0}
      disappearsOnIndex={-1}
      enableTouchThrough={false}
      style={[styles.backdrop]}
      opacity={0.7}
      pressBehavior={'none'}
    />
  )
}

export default CustomBackdrop
