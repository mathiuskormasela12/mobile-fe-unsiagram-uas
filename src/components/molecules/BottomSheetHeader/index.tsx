import CloseButton from '@src/components/atoms/CloseButton'
import { type IBottomSheetHeaderProps } from '@src/interfaces'
import { Layout } from '@src/themes'
import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

const BottomSheetHeader: React.FC<IBottomSheetHeaderProps> = ({ title, onClose }) => {
  return (
    <View style={styles.header}>
      <View style={[
        Layout.container,
        Layout.flexCenter,
        Layout.flexRow,
        styles.container]}
      >
        <View style={[styles.col]}>
          <Text style={styles.title}>
            {title}
          </Text>
        </View>
        <View style={styles.closeButton}>
          <CloseButton onPress={onClose} />
        </View>
      </View>
    </View>
  )
}

export default BottomSheetHeader
