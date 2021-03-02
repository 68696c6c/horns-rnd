export enum TextSpacing {
  Min = 'min',
  Max = 'max',
}

export type TextSpacings = {
  [key in TextSpacing]: string
}

export const defaultTextSpacings: TextSpacings = {
  min: '0.67em',
  max: '1em',
}
