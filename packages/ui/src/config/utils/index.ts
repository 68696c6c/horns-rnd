export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>
}

export enum SideOption {
  All = 'all',
  X = 'x',
  Y = 'y',
  Top = 'top',
  Right = 'right',
  Bottom = 'bottom',
  Left = 'left',
}

export enum Side {
  Top = 'top',
  Right = 'right',
  Bottom = 'bottom',
  Left = 'left',
}
