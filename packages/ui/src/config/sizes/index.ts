import { SideOption } from '../utils'

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

export type SizeOption = `${Size}`

export type SizesConfig = {
  [key in Size]: string
}

export type SideSizeOptions = {
  [key in SideOption]?: Size
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
