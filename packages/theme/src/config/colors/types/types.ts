import { HoverState, StatusState } from '../../utils'

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
  Selected = 'selected',
  Background = 'background',
  BackgroundAlt = 'backgroundAlt',
  Typography = 'typography',
}

export enum ColorwayNotification {
  Success = 'success',
  Info = 'info',
  Warning = 'warning',
  Danger = 'danger',
  Background = 'background',
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
  [HoverState.Base]: ColorSwatches
  [HoverState.Hover]: ColorSwatches
  [HoverState.Active]: ColorSwatches
  [StatusState.Inactive]: ColorSwatches
}

export type ColorSwatches = {
  [key in Swatch]: string
}
