import React from 'react'

import { render } from '../../test'
import { Background } from '../../../config'

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
  it.each(Object.values(Background))('should render background %s', (color) => {
    const { container } = render(
      <Section color={color as Background}>
        <h1>primary section</h1>
        <p>primary content</p>
      </Section>,
    )
    expect(container).toMatchSnapshot()
  })
})
