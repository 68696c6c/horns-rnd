import React from 'react'

import { render } from '../../test'
import { Colorway, Size } from '../../../config'

import { Footer } from '.'

describe('Footer', () => {
  it('should render as default', () => {
    const { container } = render(
      <Footer>
        <h1>footer</h1>
      </Footer>,
    )
    expect(container).toMatchSnapshot()
  })
  it.each(Object.values(Colorway))('should render colorway %s', (color) => {
    const { container } = render(
      <Footer color={color}>
        <h1>{color}</h1>
      </Footer>,
    )
    expect(container).toMatchSnapshot()
  })
  it.each(Object.values(Size))('should render padding %s', (size) => {
    const { container } = render(<Footer padding={size}>{size}</Footer>)
    expect(container).toMatchSnapshot()
  })
})
