import React from 'react'

import { render, screen, assertNoResponsiveStyles } from '../../test'

import { Default, Props } from './stories'

describe('Stack', () => {
  it('should render as default', () => {
    const { container } = render(
      <Default {...Default.args}>
        <div>one</div>
        <div>two</div>
        <div>three</div>
      </Default>,
    )
    expect(container).toMatchSnapshot()
  })
  it('should support trait props', () => {
    const { container } = render(
      <Props {...Props.args}>
        <div>one</div>
        <div>two</div>
        <div>three</div>
      </Props>,
    )
    expect(container).toMatchSnapshot()
  })
  describe('responsive behavior', () => {
    it('should have not stack items below the max breakpoint', () => {
      render(<Default>example</Default>)
      assertNoResponsiveStyles(screen.getByText('example'), '1200px', {
        display: 'grid',
      })
    })
  })
})
