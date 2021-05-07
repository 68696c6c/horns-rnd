/* eslint-disable react/prop-types,no-console */
import React from 'react'
import { ThemeProvider } from '@storybook/theming'
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

// eslint-disable-next-line import/no-unresolved
import { makeTheme } from '@horns/theme'

import { LinkProvider } from '../src'

export const StorybookLink = ({
  href,
  children,
  onClick,
  current,
  ...others
}) => (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus
  <span
    {...others}
    role="link"
    onClick={() => {
      console.log('link clicked: ', href)
      if (typeof onClick !== 'undefined') {
        onClick()
      }
    }}
  >
    {children}
  </span>
)

export const decorators = [
  (Story) => (
    <ThemeProvider theme={makeTheme()}>
      <LinkProvider Component={StorybookLink}>
        <Story />
      </LinkProvider>
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
