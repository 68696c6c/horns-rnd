import { ReactNode } from 'react'

import { Theme } from '@horns/theme'

export interface Styled {
  theme: Theme
}

export interface Parent {
  children: ReactNode
}
