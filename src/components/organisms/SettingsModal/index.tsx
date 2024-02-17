import { BottomSheetModal, BottomSheetScrollView } from '@gorhom/bottom-sheet'
import CustomBackdrop from '@src/components/atoms/CustomBackdrop'
import BottomSheetHeader from '@src/components/molecules/BottomSheetHeader'
import { s, settingsModalRef } from '@src/helpers'
import { ColorNeutral, Layout } from '@src/themes'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import styles from './styles'
import { useDispatch } from 'react-redux'
import { type AppDispatch } from '@src/redux/store'
import { setToken } from '@src/redux/slices/authSlice'
import { useNavigation } from '@react-navigation/native'
import { type RootStackScreenProps } from '@src/types'
import ConfirmationModal from '@src/components/atoms/ConfirmationModal'
import { type IConfirmationModalRef } from '@src/interfaces'

const SettingsModal: React.FC = () => {
  const snapPoints = useMemo(() => ['35%', '35%'], [])
  const dispatch = useDispatch<AppDispatch>()
  const navigation = useNavigation<RootStackScreenProps<'MainScreen'>['navigation']>()
  const [modal, setModal] = useState({
    title: '',
    subtitle: '',
    type: ''
  })
  const ref = useRef<IConfirmationModalRef>()

  const handleCloseConfirmationModal = useCallback(() => {
    ref?.current?.handleCloseConfirmationModal()
  }, [])

  const handleClose = useCallback(() => {
    settingsModalRef?.current?.close()
  }, [])

  const handleLogout = useCallback(() => {
    ref?.current?.handleOpenConfirmationModal()
    setModal(() => ({
      title: 'Logout',
      subtitle: 'are you sure to logout',
      type: 'LOGOUT'
    }))
  }, [])

  const handleDeleteAccount = useCallback(() => {
    ref?.current?.handleOpenConfirmationModal()
    setModal(() => ({
      title: 'Delete Account',
      subtitle: 'are you sure to delete your account ?',
      type: 'DELETE_ACCOUNT'
    }))
  }, [])

  const handleResetToken = useCallback(() => {
    ref?.current?.handleCloseConfirmationModal()
    dispatch(setToken({
      accessToken: '',
      refreshToken: ''
    }))
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'LoginScreen'
          }
        ]
      })
    }, 0)
  }, [navigation, dispatch, setToken])

  const handleOnOk = useCallback(() => {
    switch (modal.type) {
      case 'DELETE_ACCOUNT':
        break
      case 'LOGOUT' :
        handleResetToken()
        break
    }
  }, [modal.type])

  return (
    <>
      <BottomSheetModal
        backdropComponent={CustomBackdrop}
        ref={settingsModalRef}
        snapPoints={snapPoints}
        index={0}
      >
        <BottomSheetHeader
          title='Settings'
          onClose={handleClose}
        />
        <BottomSheetScrollView>
          <View style={Layout.fullPage}>
            <Pressable onPress={handleDeleteAccount} style={({ pressed }) => pressed ? [styles.card, styles.isPressed] : styles.card}>
              <View style={styles.colLeft}>
                <AntDesign
                  name='deleteuser'
                  color={ColorNeutral.neutral90}
                  size={s(24)}
                />
              </View>
              <View style={styles.colRight}>
                <Text style={styles.text}>
                  Delete Account
                </Text>
              </View>
            </Pressable>
            <Pressable style={({ pressed }) => pressed ? [styles.card, styles.isPressed] : styles.card}>
              <View style={styles.colLeft}>
                <AntDesign
                  name='user'
                  color={ColorNeutral.neutral90}
                  size={s(24)}
                />
              </View>
              <View style={styles.colRight}>
                <Text style={styles.text}>
                  Edit Profile
                </Text>
              </View>
            </Pressable>
            <Pressable onPress={handleLogout} style={({ pressed }) => pressed ? [styles.card, styles.isPressed] : styles.card}>
              <View style={styles.colLeft}>
                <AntDesign
                  name='logout'
                  color={ColorNeutral.neutral90}
                  size={s(24)}
                />
              </View>
              <View style={styles.colRight}>
                <Text style={styles.text}>
                  Logout
                </Text>
              </View>
            </Pressable>
          </View>
        </BottomSheetScrollView>
      </BottomSheetModal>
      <ConfirmationModal
        title={modal.title}
        subtitle={modal.subtitle}
        onCancel={handleCloseConfirmationModal}
        onOk={handleOnOk}
        ref={ref as never}
      />
    </>
  )
}

export default SettingsModal
