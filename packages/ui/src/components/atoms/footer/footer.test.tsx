import React from 'react'

import {
  render,
  screen,
  assertResponsiveStyles,
  assertNoResponsiveStyles,
} from '../../test'

import { Default, Props } from './stories'

describe('Footer', () => {
  it('should render as default', () => {
    const { container } = render(<Default>example</Default>)
    expect(container).toMatchSnapshot()
  })
  it('should support trait props', () => {
    const { container } = render(<Props {...Props.args}>example</Props>)
    expect(container).toMatchSnapshot()
  })
  describe('responsive behavior', () => {
    it('should have container padding below the max breakpoint', () => {
      render(<Default>example</Default>)
      assertResponsiveStyles(screen.getByText('example'), '1200px', {
        'padding-left': 'calc(((100vw - 1200px) / 2))',
        'padding-right': 'calc(((100vw - 1200px) / 2))',
      })
    })
    it('should not have container padding below the max breakpoint when fluid', () => {
      render(<Default fluid>example</Default>)
      assertNoResponsiveStyles(screen.getByText('example'), '1200px', {
        'padding-left': 'calc(((100vw - 1200px) / 2))',
        'padding-right': 'calc(((100vw - 1200px) / 2))',
      })
    })
  })
})
