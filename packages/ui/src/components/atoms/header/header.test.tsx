import React from 'react'

import { render } from '../../test'
import { Colorway, Size } from '../../../config'

import { Header } from '.'

describe('Header', () => {
  it('should render as default', () => {
    const { container } = render(
      <Header>
        <h1>header</h1>
      </Header>,
    )
    expect(container).toMatchSnapshot()
  })
  it.each(Object.values(Colorway))('should render colorway %s', (color) => {
    const { container } = render(
      <Header color={color}>
        <h1>{color}</h1>
      </Header>,
    )
    expect(container).toMatchSnapshot()
  })
  it.each(Object.values(Size))('should render padding %s', (size) => {
    const { container } = render(<Header padding={size}>{size}</Header>)
    expect(container).toMatchSnapshot()
  })
})
