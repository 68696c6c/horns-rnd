import { UiState } from '../../utils'

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
  Background = 'background',
  BackgroundAlt = 'backgroundAlt',
  Typography = 'typography',
}

export enum BaseSwatch {
  Base = 'base',
  Border = 'border',
}

export enum FinalSwatch {
  Readable = 'readable',
}

export type Swatch = BaseSwatch | FinalSwatch

export type ColorStates = {
  [key in UiState]: ColorSwatches
}

export type ColorSwatches = {
  [key in Swatch]: string
}
