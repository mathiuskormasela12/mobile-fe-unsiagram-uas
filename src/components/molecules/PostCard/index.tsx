import { type IPostCardProps } from '@src/interfaces'
import React, { useCallback, useEffect, useState } from 'react'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'
import { AntDesign, Feather } from '@expo/vector-icons'
import { ColorError, ColorNeutral, Layout } from '@src/themes'
import { s } from '@src/helpers'
import styles from './styles'

const PostCard: React.FC<IPostCardProps> = (props) => {
  const [isShowFullCaption, setIsShowFullCaption] = useState(false)

  useEffect(() => {
    if (props?.caption?.length > 100) {
      setIsShowFullCaption(() => false)
    } else {
      setIsShowFullCaption(() => true)
    }
  }, [props?.caption])

  const handleShowFullCaption = useCallback(() => {
    setIsShowFullCaption((current) => !current)
  }, [])

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Image
          source={{ uri: props?.user?.photo }}
          style={styles.cardHeaderImg}
        />
        <Text style={styles.cardHeaderTitle}>{props?.user?.firstName}</Text>
      </View>
      <View style={styles.cardContent}>
        <View style={styles.cardContentPictures}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            alwaysBounceHorizontal={false}
            horizontal
          >
            {(props?.photos ?? []).map(photo => (
              <Image key={photo}
                source={{ uri: photo }}
                style={styles.cardContentPicture}
              />
            ))}
          </ScrollView>
        </View>
      </View>
      <View style={styles.cardFooter}>
        <View style={styles.cardFooterIcons}>
          <View style={styles.cardFooterIcon}>
            <Pressable>
              <AntDesign
                name='heart'
                color={ColorError.error60}
                size={s(26)}
              />
            </Pressable>
            <Text style={styles.cardFooterText}>{props.likes}</Text>
          </View>
          <View style={styles.cardFooterIcon}>
            <Pressable>
              <Feather
                name='message-circle'
                color={ColorNeutral.neutral30}
                size={s(26)}
              />
            </Pressable>
            <Text style={styles.cardFooterText}>1M</Text>
          </View>
        </View>
        <View style={styles.cardFooterCaption}>
          {!isShowFullCaption
            ? (
              <>
                <Text style={styles.cardFooterCaptionFirstName}>
                  {props.user.firstName} {''}
                  <Text style={styles.cardFooterText}>
                    {props.caption.slice(0, 100).concat('...')}
                  </Text>
                </Text>
                <Text
                  style={[styles.cardFooterText,
                    Layout.textSemiBold
                  ]}
                  onPress={handleShowFullCaption}
                >
                  show more
                </Text>
              </>
              )
            : (
                <>
                    <Text style={styles.cardFooterCaptionFirstName}>
                    {props.user.firstName} {''}
                    <Text style={styles.cardFooterText}>
                      {props.caption}
                    </Text>
                  </Text>
                  {props?.caption?.length > 100 && (
                  <Text
                    style={[
                      styles.cardFooterText,
                      Layout.textSemiBold
                    ]}
                    onPress={handleShowFullCaption}
                  >
                    show less
                  </Text>
                  )}
                </>
              )}

        </View>
      </View>
    </View>
  )
}

export default PostCard
