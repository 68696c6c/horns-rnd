import { Size } from './sizes'

export type GridConfig = {
  gap: Size
  columnMin: string
}

export const defaultGrid: GridConfig = {
  gap: Size.Small,
  columnMin: '280px',
}
