/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { matchers } from '@emotion/jest'
import { render as rtlRender } from '@testing-library/react'

import { makeTheme } from '../../config'

expect.extend(matchers)

const Wrapper = ({ children }: React.PropsWithChildren<any>) => (
  <ThemeProvider theme={makeTheme()}>{children}</ThemeProvider>
)

export const render = (ui: any, options?: any) =>
  rtlRender(ui, { wrapper: Wrapper, ...options })

export { screen } from '@testing-library/react'

// Assertion helpers

export const assertStateStyles = (
  result: HTMLElement,
  target: string,
  props: Record<string, string>,
) => {
  Object.keys(props).forEach((propName) => {
    expect(result).toHaveStyleRule(
      propName,
      props[propName],
      target !== '' ? { target } : {},
    )
  })
}

// Asserts that the provided styles only appear on the provided element below the specified width.
export const assertResponsiveStyles = (
  result: HTMLElement,
  minWidth: string,
  props: Record<string, string>,
) => {
  // Assert that the styles are applied when within the breakpoint.
  Object.keys(props).forEach((propName) => {
    expect(result).toHaveStyleRule(propName, props[propName], {
      media: `(min-width: ${minWidth})`,
    })
  })
  // Assert that the styles are NOT applied when above the breakpoint.
  Object.keys(props).forEach((propName) => {
    expect(result).not.toHaveStyleRule(propName, props[propName])
  })
}

// Asserts that the provided styles never appear on the provided element, even when within the specified width.
export const assertNoResponsiveStyles = (
  result: HTMLElement,
  minWidth: string,
  props: Record<string, string>,
) => {
  // Assert that the styles are NOT applied when within the breakpoint.
  Object.keys(props).forEach((propName) => {
    expect(result).not.toHaveStyleRule(propName, props[propName], {
      media: `(min-width: ${minWidth})`,
    })
  })
  // Assert that the styles are NOT applied when above the breakpoint.
  Object.keys(props).forEach((propName) => {
    expect(result).not.toHaveStyleRule(propName, props[propName])
  })
}
