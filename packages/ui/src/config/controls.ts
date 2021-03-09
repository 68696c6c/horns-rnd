import { BordersConfig } from './borders'
import { CornerSizeOptions, SideSizeOptions, Size } from './sizes'

export type ControlsConfig = {
  border: BordersConfig
  padding: SideSizeOptions
  radius: CornerSizeOptions
}

export const defaultControls: ControlsConfig = {
  border: {
    all: {
      width: Size.Tiny,
      style: 'solid',
    },
  },
  padding: {
    all: Size.Small,
  },
  radius: {
    all: Size.Tiny,
  },
}
