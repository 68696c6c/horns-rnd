import React, { FC, ReactNode } from 'react'
import {
  css,
  Global,
  ThemeProvider as EmotionThemeProvider,
} from '@emotion/react'

import { Theme } from '@horns/theme'

interface ThemeProviderProps {
  children: ReactNode
  theme: Theme
}

const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  theme,
}: ThemeProviderProps) => (
  <>
    <Global
      styles={css`
        body {
          margin: 0;
          padding: 0;
        }
      `}
    />
    <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
  </>
)

export default ThemeProvider
