export enum Colorway {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
  Dark = 'dark',
  Neutral = 'neutral',
  Light = 'light',
  Success = 'success',
  Info = 'info',
  Warning = 'warning',
  Danger = 'danger',
  Prominent = 'prominent',
}

export enum Background {
  Primary = 'primary',
  Secondary = 'secondary',
}

export enum BaseColorState {
  Base = 'base',
  Hover = 'hover',
  Active = 'active',
}

export enum FinalColorState {
  Inactive = 'inactive',
}

export type ColorState = BaseColorState | FinalColorState

export enum BaseSwatch {
  Base = 'base',
  Border = 'border',
}

export enum FinalSwatch {
  Readable = 'readable',
}

export type Swatch = BaseSwatch | FinalSwatch

export type ColorStates = {
  [key in ColorState]: ColorSwatches
}

export type ColorSwatches = {
  [key in Swatch]: string
}
