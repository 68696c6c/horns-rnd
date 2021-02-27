import React, { FC, ReactNode } from 'react'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'

import { Theme, Config } from '../config'

interface ThemeProviderProps {
  children: ReactNode
  theme: Partial<Config>
}

const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  theme,
}: ThemeProviderProps) => (
  <EmotionThemeProvider theme={new Theme(theme)}>
    {children}
  </EmotionThemeProvider>
)

export default ThemeProvider
