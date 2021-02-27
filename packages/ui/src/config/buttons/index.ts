import { BordersConfig } from '../borders'
import { SideSizeOptions } from '../sizes'

export type ButtonsConfig = {
  border: BordersConfig
  padding: SideSizeOptions
}

export const defaultButtons = {
  border: {
    all: {
      width: 'tiny',
      style: 'solid',
    },
  },
  padding: {
    x: 'medium',
    y: 'small',
  },
}
