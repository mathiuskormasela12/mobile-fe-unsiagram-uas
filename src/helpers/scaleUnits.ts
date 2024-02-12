import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const [shortDimension, longDimension] = width < height ? [width, height] : [height, width]
const guidelineBaseWidth: number = width
const guidelineBaseHeight: number = height

const scale = (value: number): number => {
  return (shortDimension / guidelineBaseWidth) * value
}

const verticalScale = (value: number): number => {
  return (longDimension / guidelineBaseHeight) * value
}

export const s = scale
export const vs = verticalScale
