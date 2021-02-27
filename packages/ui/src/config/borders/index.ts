import { SizeOption } from '../sizes'

export enum BorderStyle {
  None = 'none',
  Hidden = 'hidden',
  Dotted = 'dotted',
  Dashed = 'dashed',
  Solid = 'solid',
  Double = 'double',
  Groove = 'groove',
  Ridge = 'ridge',
  Inset = 'inset',
  Outset = 'outset',
  Initial = 'initial',
  Inherit = 'inherit',
}

export type BorderStyleOption = `${BorderStyle}`

export type BorderProperties = {
  width?: SizeOption
  style?: BorderStyleOption
}

export type BordersConfig = {
  all?: BorderProperties
  x?: BorderProperties
  y?: BorderProperties
  top?: BorderProperties
  bottom?: BorderProperties
  left?: BorderProperties
  right?: BorderProperties
}
