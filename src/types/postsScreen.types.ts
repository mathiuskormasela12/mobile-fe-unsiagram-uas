import { type ICommentModalRef } from '@src/interfaces'

export type PostsScreenHook = () => {
  handleOpenSetting: () => void
  commentRef: React.MutableRefObject<ICommentModalRef>
}
