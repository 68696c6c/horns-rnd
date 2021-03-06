import React from 'react'

import { render } from '../../test'

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
})
