import React, { FC, ReactNode } from 'react'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'

import { makeTheme, Config } from '../config'

interface ThemeProviderProps {
  children: ReactNode
  theme: Partial<Config>
}

const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  theme,
}: ThemeProviderProps) => (
  <EmotionThemeProvider theme={makeTheme(theme)}>
    {children}
  </EmotionThemeProvider>
)

export default ThemeProvider
