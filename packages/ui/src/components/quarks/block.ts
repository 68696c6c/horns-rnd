import {
  chromatic,
  Chromatic,
  contained,
  Contained,
  padded,
  Padded,
  Parent,
} from '../../traits'

export interface BlockProps extends Parent, Chromatic, Contained, Padded {}

export const blockStyles = [chromatic, contained, padded]
