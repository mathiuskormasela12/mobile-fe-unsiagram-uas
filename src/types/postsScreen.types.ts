import { type ICommentModalRef } from '@src/interfaces'

export type PostsScreenHook = () => {
  handleMessengerPress: () => void
  commentRef: React.MutableRefObject<ICommentModalRef>
}
