import { type IUser } from './IUser'

export interface IComment {
  id: string
  userId: string
  postId: string
  comment: string
  createdAt: string
  user: IUser
  isLiked: boolean
}
