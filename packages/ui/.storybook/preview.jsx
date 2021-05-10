/* eslint-disable react/prop-types,no-console */
import React from 'react'
import { ThemeProvider } from '@storybook/theming'
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

// eslint-disable-next-line import/no-unresolved
import { makeTheme } from '@horns/theme'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={makeTheme()}>
      <Story />
    </ThemeProvider>
  ),
]

export const parameters = {
  // This argTypesRegex generates Storybook actions for all props that start with "on".
  // For example, onClick events will log to the Actions pane.
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { sort: 'alpha' },
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
      max: {
        name: 'Max',
        styles: {
          height: '1112px',
          width: '2000px',
        },
        type: 'desktop',
      },
    },
  },
}
