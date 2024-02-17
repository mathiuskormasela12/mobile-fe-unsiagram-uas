import React, { useCallback, useImperativeHandle, useState } from 'react'
import { Modal as RnModal, Text, View } from 'react-native'
import styles from './styles'
import { type IConfirmationModalRef, type IConfirmationModalProps } from '@src/interfaces'
import Button from '../Button'

const ConfirmationModal = ({
  title,
  subtitle,
  onOk,
  onCancel
}: IConfirmationModalProps,
ref: React.Ref<IConfirmationModalRef>): React.ReactNode => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const handleOpenConfirmationModal = useCallback(() => {
    setIsVisible(() => true)
  }, [])

  const handleCloseConfirmationModal = useCallback(() => {
    setIsVisible(() => false)
  }, [])

  useImperativeHandle(ref, () => ({
    handleOpenConfirmationModal,
    handleCloseConfirmationModal
  }))

  return (
    <RnModal
      animationType='fade'
      visible={isVisible}
      transparent
      statusBarTranslucent
    >
      <View style={styles.page}>
        <View style={styles.box}>
          <View style={styles.header}>
            <Text style={styles.title}>
              {title}
            </Text>
            <Text style={styles.subtitle}>
              {subtitle}
            </Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.footerCol}>
              <Button variant='danger' outline onPress={onCancel}>
                Cancel
              </Button>
            </View>
            <View style={styles.footerCol}>
              <Button variant='primary' onPress={onOk}>
                Ok
              </Button>
            </View>
          </View>
        </View>
      </View>
    </RnModal>
  )
}

export default React.forwardRef(ConfirmationModal)
