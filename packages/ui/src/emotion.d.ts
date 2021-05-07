import '@emotion/react'

import { Theme as HornsTheme } from '@horns/theme'

declare module '@emotion/react' {
  export interface Theme extends HornsTheme {}
}
