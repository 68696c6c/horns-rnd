/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import { render } from '../../test'
import { Colorway, Size } from '../../../config'

import { Main } from '.'

describe('Main', () => {
  it('should render as default', () => {
    const { container } = render(
      <Main>
        <h1>section</h1>
        <p>content can go anywhere</p>
        <div>a div</div>
        <div>another div</div>
      </Main>,
    )
    expect(container).toMatchSnapshot()
  })
  it.each(Object.values(Colorway))('should render colorway %s', (color) => {
    const { container } = render(
      <Main color={color}>
        <h1>{color} section</h1>
        <p>{color} content</p>
      </Main>,
    )
    expect(container).toMatchSnapshot()
  })
  it.each(Object.values(Size))('should render padding %s', (size) => {
    const { container } = render(<Main padding={size}>{size}</Main>)
    expect(container).toMatchSnapshot()
  })
})
