import '@emotion/react'

import { Theme as HornsTheme } from './config'

declare module '@emotion/react' {
  export interface Theme extends HornsTheme {}
}
