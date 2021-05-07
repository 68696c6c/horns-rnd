import React, { FC, ReactNode } from 'react'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'

import { Theme } from '../config'

interface ThemeProviderProps {
  children: ReactNode
  theme: Theme
}

const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  theme,
}: ThemeProviderProps) => (
  <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
)

export default ThemeProvider
