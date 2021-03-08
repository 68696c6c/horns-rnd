/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import { render } from '../../test'
import { Colorway } from '../../../config'

import { Section } from '.'

describe('Section', () => {
  it('should render as default', () => {
    const { container } = render(
      <Section>
        <h1>section</h1>
        <p>content can go anywhere</p>
        <div>a div</div>
        <div>another div</div>
      </Section>,
    )
    expect(container).toMatchSnapshot()
  })
  it.each(Object.values(Colorway))('should render colorway %s', (color) => {
    const { container } = render(
      <Section color={color}>
        <h1>{color} section</h1>
        <p>{color} content</p>
      </Section>,
    )
    expect(container).toMatchSnapshot()
  })
})
