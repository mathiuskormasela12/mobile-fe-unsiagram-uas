import { type ICommentListProps } from '@src/interfaces'
import React, { useCallback, useEffect, useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import styles from './styles'
import PhotoProfile from '../PhotoProfile'
import { Ionicons } from '@expo/vector-icons'
import { inputRef, s } from '@src/helpers'
import { ColorError, Layout } from '@src/themes'

const CommentList: React.FC<ICommentListProps> = ({ comment, photo, isLiked: defaultIsLiked, username }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false)

  const handleLike = useCallback((): void => {
    setIsLiked((like) => !like)
  }, [])

  const handleComment = useCallback((): void => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    setIsLiked(() => defaultIsLiked)
  }, [defaultIsLiked])

  return (
    <View style={styles.commentList}>
      <View style={styles.commentListColLeft}>
        <PhotoProfile uri={photo} size={30} />
      </View>
      <View style={styles.commentListColRight}>
        <Text style={[styles.title, Layout.textSemiBold]}>
          @{username}
        </Text>
        <Text style={styles.commentText}>
          {comment}
        </Text>
        <View style={[Layout.flexRow, Layout.alignCenter, styles.iconContainer]}>
          <Pressable onPress={handleComment} style={[Layout.flexRow, styles.textContainer]}>
            <Ionicons
              name='chatbubbles-outline'
              size={s(20)}
              color={ColorError.error50}
            />
            <Text style={[styles.commentText]}>
              Reply
            </Text>
          </Pressable>
          <Pressable
            style={[
              Layout.flexRow,
              Layout.alignCenter,
              styles.textContainer
            ]}
            onPress={handleLike}
          >
            <Ionicons
              name={isLiked ? 'heart' : 'heart-outline'}
              size={s(20)}
              color={ColorError.error50}
            />
            <Text style={[styles.commentText, styles.textLike]}>
              Like
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default CommentList
