export enum TextSpacing {
  Min = 'min',
  Base = 'base',
  Max = 'max',
}

export type TextSpacings = {
  [key in TextSpacing]: string
}

export const defaultTextSpacings: TextSpacings = {
  min: '0.67em',
  base: '',
  max: '1em',
}
