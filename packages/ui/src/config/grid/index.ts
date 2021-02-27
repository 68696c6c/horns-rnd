import { SizeOption } from '../sizes'

export type GridConfig = {
  gap: SizeOption
  columnMin: string
}

export const defaultGrid: GridConfig = {
  gap: 'small',
  columnMin: '280px',
}
