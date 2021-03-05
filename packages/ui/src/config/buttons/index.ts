import { BordersConfig } from '../borders'
import { Cursor } from '../cursors'
import { Font } from '../typography'
import { SideSizeOptions } from '../sizes'

export type ButtonsConfig = {
  border: BordersConfig
  cursor: Cursor
  font: Font
  padding: SideSizeOptions
}

export const defaultButtons = {
  border: {
    all: {
      width: 'tiny',
      style: 'solid',
    },
  },
  cursor: 'pointer',
  font: 'button',
  padding: {
    x: 'medium',
    y: 'small',
  },
}
