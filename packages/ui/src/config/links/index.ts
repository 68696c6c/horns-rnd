import { Cursor } from '../cursors'
import { Font } from '../typography'

export type LinksConfig = {
  cursor: Cursor
  font: Font
}

export const defaultLinks = {
  cursor: 'pointer',
  font: 'link',
}
