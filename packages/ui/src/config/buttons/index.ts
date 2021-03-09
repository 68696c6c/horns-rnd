import { BordersConfig } from '../borders'
import { CornerSizeOptions, SideSizeOptions, Size } from '../sizes'

export type ButtonsConfig = {
  border: BordersConfig
  padding: SideSizeOptions
  radius: CornerSizeOptions
}

export const defaultButtons: ButtonsConfig = {
  border: {
    all: {
      width: Size.Tiny,
      style: 'solid',
    },
  },
  padding: {
    x: Size.Medium,
    y: Size.Small,
  },
  radius: {
    all: Size.Tiny,
  },
}
