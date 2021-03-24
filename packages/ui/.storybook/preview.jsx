import React from 'react'
import { ThemeProvider } from '@storybook/theming'

import { makeTheme } from '../src/config'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={makeTheme()}>
      <Story />
    </ThemeProvider>
  ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}
