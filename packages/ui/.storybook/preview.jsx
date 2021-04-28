import React from 'react'
import { ThemeProvider } from '@storybook/theming'

import { makeTheme } from '../src/config'
import { LinkProvider } from '../src'

// eslint-disable-next-line react/prop-types
export const StorybookLink = ({ href, children, ...others }) => (
  <a href={href} {...others}>
    {children}
  </a>
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
  actions: { argTypesRegex: '^on[A-Z].*' },
}
