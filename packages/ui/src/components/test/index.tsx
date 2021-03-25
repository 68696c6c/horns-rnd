/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { StyleRuleOptions } from '@emotion/jest'
import { render as rtlRender } from '@testing-library/react'

import { makeTheme } from '../../config'

const Wrapper = ({ children }: React.PropsWithChildren<any>) => (
  <ThemeProvider theme={makeTheme()}>{children}</ThemeProvider>
)

export const render = (ui: any, options?: any) =>
  rtlRender(ui, { wrapper: Wrapper, ...options })

export { screen } from '@testing-library/react'

// TODO: for some reason, the WebStorm is not recognizing the @types/jest definition for the toHaveStyleRule matcher in the tests
declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveStyleRule(
        property: string,
        value: any,
        options?: StyleRuleOptions,
      ): R
    }
  }
}

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
