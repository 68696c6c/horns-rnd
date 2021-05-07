export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>
}

export enum Side {
  All = 'all',
  X = 'x',
  Y = 'y',
  Top = 'top',
  Right = 'right',
  Bottom = 'bottom',
  Left = 'left',
}

export enum Corner {
  All = 'all',
  TopLeft = 'topLeft',
  TopRight = 'topRight',
  BottomLeft = 'bottomLeft',
  BottomRight = 'bottomRight',
}

export enum HoverState {
  Base = 'base',
  Hover = 'hover',
  Active = 'active',
}

export enum StatusState {
  Inactive = 'inactive',
  Visited = 'visited',
  Selected = 'selected',
}

export type UiState = HoverState | StatusState.Inactive

export enum InputType {
  Color = 'color',
  Currency = 'currency',
  Date = 'date',
  DatetimeLocal = 'datetime-local',
  Email = 'email',
  Hidden = 'hidden',
  Month = 'month',
  Number = 'number',
  Password = 'password',
  Percentage = 'percentage',
  Range = 'range',
  Search = 'search',
  Tel = 'tel',
  Text = 'text',
  Time = 'time',
  Url = 'url',
  Week = 'week',
}

export enum ToggleType {
  Checkbox = 'checkbox',
  Radio = 'radio',
}

export enum OverflowOption {
  Visible = 'visible',
  Hidden = 'hidden',
  Scroll = 'scroll',
  Auto = 'auto',
}

export interface ControlOption {
  label: string
  value: string | number
}
