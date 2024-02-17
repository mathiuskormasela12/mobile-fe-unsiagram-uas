import { AddPhoto, BottomSheetHeader, Button, ConfirmationModal, CustomBackdrop, ErrorMessage, Header, Input, SafeAreaView, SettingsModal } from '@src/components'
import React from 'react'
import { FlatList, Keyboard, KeyboardAvoidingView, ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native'
import styles from './styles'
import { ColorNeutral, ColorPrimary, Layout } from '@src/themes'
import { useAddPostScreen } from '@src/hooks'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { Ionicons } from '@expo/vector-icons'
import { s } from '@src/helpers'
import { Controller } from 'react-hook-form'

const AddPostScreen: React.FC = () => {
  const {
    snapPoints,
    handleCloseModal,
    handleOpenModal,
    bottomSheetModalRef,
    control,
    handleAddPost,
    handleSubmit,
    errors,
    photos,
    isError,
    handleChoosePhotoFromGalery,
    handleRemovePhoto,
    handleChoosePhotoByCamera,
    flatListRef,
    handleOpenSettingsModal
  } = useAddPostScreen()

  return (
    <BottomSheetModalProvider>
      <SafeAreaView style={styles.page}>
        <Header
          title='Unsiagram'
          onPressRightIcon={handleOpenSettingsModal}
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
                      <Controller
                        control={control}
                        name='caption'
                        render={({ field: { onBlur, onChange, value } }) => (
                          <Input
                            multiline
                            placeholder='Type your caption here...'
                            placeholderTextColor={ColorNeutral.neutral60}
                            size='sm'
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            message={errors?.caption?.message ?? undefined}
                          />
                        )}
                      />
                    </View>
                  </View>
                  <View style={styles.control}>
                    <Text style={styles.label}>
                      Photos
                    </Text>
                    <View style={[Layout.flexRow, styles.field]}>
                      <FlatList
                        data={photos}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        alwaysBounceHorizontal={false}
                        keyExtractor={(photo) => photo.id}
                        renderItem={({ item }) => (
                          <AddPhoto
                            onAddPhoto={handleOpenModal}
                            onRemovePhoto={handleRemovePhoto.bind(this, item.id as string)}
                            uri={item.uri}
                          />
                        )}
                        contentContainerStyle={styles.photoContainer}
                        ref={flatListRef}
                      />
                    </View>
                    {(isError) && (
                      <ErrorMessage>
                        Please choose at least one photo
                      </ErrorMessage>
                    )}
                  </View>
                  <View style={styles.control}>
                    <Button onPress={handleSubmit(handleAddPost)}>
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
                onPress={handleChoosePhotoFromGalery}
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
                onPress={handleChoosePhotoByCamera}
              >
                Camera
              </Button>
            </View>
          </View>
        </View>
      </BottomSheetModal>
      <SettingsModal />
      <ConfirmationModal title='Logout' subtitle='Are you sure to logout ?' onLeftButtonPress={() => {}} onRightButtonPress={() => {}} />
    </BottomSheetModalProvider>
  )
}

export default AddPostScreen
