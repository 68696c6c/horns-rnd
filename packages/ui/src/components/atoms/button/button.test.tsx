import React from 'react'

import { assertStateStyles, render, screen } from '../../test'

import { Default, Props } from './stories'

describe('Button', () => {
  it('should render as default', () => {
    const { container } = render(<Default {...Default.args}>example</Default>)
    expect(container).toMatchSnapshot()
  })
  it('should support trait props', () => {
    const { container } = render(<Props {...Props.args}>example</Props>)
    expect(container).toMatchSnapshot()
  })
  describe('ui states', () => {
    it('should render default state', () => {
      render(<Default>default</Default>)
      assertStateStyles(screen.getByRole('button'), '', {
        'background-color': 'rgb(255, 255, 255)',
      })
    })
    it('should render hover state', () => {
      render(<Default>hover</Default>)
      assertStateStyles(screen.getByRole('button'), ':hover', {
        'background-color': 'rgb(247, 247, 247)',
      })
    })
    it('should render active state', () => {
      render(<Default>active</Default>)
      assertStateStyles(screen.getByRole('button'), ':active', {
        'background-color': 'rgb(240, 240, 240)',
      })
    })
  })
})
