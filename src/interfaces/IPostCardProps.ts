export interface IPostCardProps {
  id: string
  user: {
    firstName: string
    photo: string
  }
  photos: string[]
  caption: string
  likes: number
  isLiked: boolean
  onOpenCommentModal: () => void
}
