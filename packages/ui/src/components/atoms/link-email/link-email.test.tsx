import React from 'react'
import { render } from '@testing-library/react'

import { theme } from '../../test'
import { LinkVariant } from '../../quarks'

import { LinkEmail } from '.'

describe('LinkEmail', () => {
  it('should render as default', () => {
    const { container } = render(
      <LinkEmail
        theme={theme}
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
        theme={theme}
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
