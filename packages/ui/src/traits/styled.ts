import { ReactNode } from 'react'

import { Theme } from '../config'

export interface Styled {
  theme: Theme
}

export interface Parent {
  children: ReactNode
}
