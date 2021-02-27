import React from 'react'
import { ThemeProvider } from '@storybook/theming'

import { Theme } from '../src'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={new Theme()}>
      <Story />
    </ThemeProvider>
  ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}
