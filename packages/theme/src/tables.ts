import { SideSizeOptions, Size } from './sizes'

export type TablesConfig = {
  padding: SideSizeOptions
}

export const defaultTables: TablesConfig = {
  padding: {
    all: Size.XSmall,
  },
}
