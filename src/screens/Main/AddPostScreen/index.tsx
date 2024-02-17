import { AddPhoto, BottomSheetHeader, Button, CustomBackdrop, Header, Input, SafeAreaView } from '@src/components'
import React from 'react'
import { Alert, Keyboard, KeyboardAvoidingView, ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native'
import styles from './styles'
import { ColorNeutral, ColorPrimary, Layout } from '@src/themes'
import { useAddPostScreen } from '@src/hooks'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { Ionicons } from '@expo/vector-icons'
import { s } from '@src/helpers'

const AddPostScreen: React.FC = () => {
  const { snapPoints, handleCloseModal, handleOpenModal, bottomSheetModalRef } = useAddPostScreen()

  return (
    <BottomSheetModalProvider>
      <SafeAreaView style={styles.page}>
        <Header
          title='Unsiagram'
          onPressRightIcon={() => {}}
        />
        <View style={[
          styles.hero,
          Layout.fullPage,
          Layout.flexRow,
          Layout.flexCenter
        ]}>
        <View style={Layout.container}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            alwaysBounceVertical={false}
          >
            <KeyboardAvoidingView behavior='position'>
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <>
                  <View style={styles.control}>
                    <Text style={styles.label}>
                      What are you thinking of ?
                    </Text>
                    <View style={styles.field}>
                      <Input
                        multiline
                        placeholder='Type your caption here...'
                        placeholderTextColor={ColorNeutral.neutral60}
                        size='sm'
                      />
                    </View>
                  </View>
                  <View style={styles.control}>
                    <Text style={styles.label}>
                      Photos
                    </Text>
                    <View style={[Layout.flexRow, styles.field]}>
                      <ScrollView horizontal showsHorizontalScrollIndicator={false} alwaysBounceHorizontal={false}>
                        <View style={styles.photoContainer}>
                          <AddPhoto
                            onAddPhoto={handleOpenModal}
                            onRemovePhoto={() => { Alert.alert('ok') }}
                          />
                          <AddPhoto
                            onAddPhoto={handleOpenModal}
                            onRemovePhoto={() => { Alert.alert('ok') }}
                          />
                          <AddPhoto
                            onAddPhoto={handleOpenModal}
                            onRemovePhoto={() => { Alert.alert('ok') }}
                          />
                          <AddPhoto
                            onAddPhoto={handleOpenModal}
                            onRemovePhoto={() => { Alert.alert('ok') }}
                          />
                        </View>
                      </ScrollView>
                    </View>
                  </View>
                  <View style={styles.control}>
                    <Button>
                      Submit
                    </Button>
                  </View>
                </>
              </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
        </View>
      </SafeAreaView>
      <BottomSheetModal
        snapPoints={snapPoints}
        index={0}
        ref={bottomSheetModalRef}
        enablePanDownToClose
        backdropComponent={CustomBackdrop}
      >
        <BottomSheetHeader
          title='Add Photo'
          onClose={handleCloseModal}
        />
        <View style={[Layout.fullPage, Layout.container, Layout.justifyCenter]}>
          <Text style={styles.text}>Choose an action</Text>
          <View style={styles.main}>
            <View style={styles.btnCol}>
              <Button
                outline
                leftIcon={
                  <Ionicons
                    name='image-outline'
                    color={ColorPrimary.primary60}
                    size={s(23)}
                  />
                }
              >
                Galery
              </Button>
            </View>
            <View style={styles.btnCol}>
              <Button
                outline
                leftIcon={
                  <Ionicons
                    name='camera-outline'
                    color={ColorPrimary.primary60}
                    size={s(23)}
                  />
                }
              >
                Camera
              </Button>
            </View>
          </View>
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  )
}

export default AddPostScreen
