/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { render as rtlRender } from '@testing-library/react'

import { makeTheme } from '../../config'

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
