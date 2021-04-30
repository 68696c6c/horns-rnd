import { Side, Corner } from './utils'

export enum Size {
  Min = 'min',
  Tiny = 'tiny',
  XXSmall = 'xxSmall',
  XSmall = 'xSmall',
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  XLarge = 'xLarge',
  XXLarge = 'xxLarge',
  Giant = 'giant',
  Max = 'max',
}

export type SideSizeOptions = {
  [key in Side]?: Size
}

export type CornerSizeOptions = {
  [key in Corner]?: Size
}

export type SizesConfig = {
  [key in Size]: string
}

export const defaultSizes: SizesConfig = {
  min: '0px',
  tiny: '2px',
  xxSmall: '4px',
  xSmall: '8px',
  small: '12px',
  medium: '16px',
  large: '24px',
  xLarge: '32px',
  xxLarge: '48px',
  giant: '64px',
  max: '88px',
}

export const isSize = (
  tbd?: CornerSizeOptions | SideSizeOptions | Size,
): tbd is Size =>
  typeof tbd !== 'undefined' && typeof (tbd as Size) === 'string'
