export interface ICard {
  photo: string
  title: string
  subtitle: string
  secondSubtitle?: string
  onPress: () => void
}
