import * as ImagePicker from 'expo-image-picker'

export const launchImagePicker = async (): Promise<string | null> => {
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1
  })

  if (!result.canceled) {
    return result.assets[0].uri
  }

  return null
}

export const launchCamera = async (): Promise<string | null> => {
  const result = await ImagePicker.launchCameraAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1
  })

  if (!result.canceled) {
    return result.assets[0].uri
  }

  return null
}
