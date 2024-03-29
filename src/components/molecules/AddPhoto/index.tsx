import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { Fontisto } from '@expo/vector-icons'
import styles from './styles'
import { ColorNeutral, ColorPrimary } from '@src/themes'
import { s } from '@src/helpers'
import { type IAddPhotoProps } from '@src/interfaces'
import CloseButton from '@src/components/atoms/CloseButton'

const AddPhoto: React.FC<IAddPhotoProps> = ({ onAddPhoto, onRemovePhoto, uri = null }) => {
  return (
    <>
      <View style={[styles.card, uri ? styles.borderNone : null]}>
        {uri
          ? (
              <>
                <Image
                  source={{ uri }}
                  style={styles.img}
                />
                <View style={styles.backdrop} />
                <View style={styles.closeBtn}>
                  <CloseButton size='sm'
                    bgIconColor={ColorNeutral.neutral0}
                    iconColor={ColorPrimary.primary40}
                    onPress={onRemovePhoto}
                    rounded
                  />
                </View>
              </>
            )
          : (
              <Pressable
                style={styles.container}
                onPress={onAddPhoto}
              >
                <Fontisto
                  name='photograph'
                  color={ColorPrimary.primary40}
                  size={s(26)}
                />
                <Text style={styles.text}>
                  Add Photo
                </Text>
              </Pressable>
            )
        }
      </View>
    </>
  )
}

export default AddPhoto
