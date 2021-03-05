import React from 'react'

import { render } from '../../test'
import { LinkVariant } from '../../quarks'

import { LinkEmail } from '.'

describe('LinkEmail', () => {
  it('should render as default', () => {
    const { container } = render(
      <LinkEmail
        email="example@example.com"
        subject="example subject"
        body="example body"
      >
        example
      </LinkEmail>,
    )
    expect(container).toMatchSnapshot()
  })

  it('should render as a button', () => {
    const { container } = render(
      <LinkEmail
        email="example@example.com"
        subject="example subject"
        body="example body"
        variant={LinkVariant.Button}
      >
        example
      </LinkEmail>,
    )
    expect(container).toMatchSnapshot()
  })
})
