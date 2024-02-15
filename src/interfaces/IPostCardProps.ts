import { type IComment } from './IComment'

export interface IPostCardProps {
  id: string
  user: {
    firstName: string
    photo: string
  }
  photos: string[]
  caption: string
  likes: number
  comments: IComment[]
}
