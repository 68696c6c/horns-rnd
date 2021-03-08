import {
  chromatic,
  Chromatic,
  contained,
  Contained,
  padded,
  Padded,
} from '../../traits'

export interface BlockProps extends Chromatic, Contained, Padded {}

export const blockStyles = [chromatic, contained, padded]
