import { type IComment } from './IComment'
import { type IUser } from './IUser'

export interface IGetPostResponse {
  id: string
  caption: string
  photos: string[]
  likes: number
  createdAt: string
  comments: IComment[]
  user: IUser
  isLiked: boolean
}
