import { type IUser } from './IUser'

export interface IGetPostResponse {
  id: string
  caption: string
  photos: string[]
  likes: number
  createdAt: string
  user: IUser
  isLiked: boolean
}
