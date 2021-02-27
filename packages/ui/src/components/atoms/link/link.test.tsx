/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { render } from '@testing-library/react'

import { theme } from '../../test'
import { LinkVariant } from '../../quarks'

import { Link } from '.'

describe('Link', () => {
  it('should render as default', () => {
    const { container } = render(
      <Link theme={theme} href="#">
        example
      </Link>,
    )
    expect(container).toMatchSnapshot()
  })

  it('should render as a button', () => {
    const { container } = render(
      <Link theme={theme} href="#" variant={LinkVariant.Button}>
        example
      </Link>,
    )
    expect(container).toMatchSnapshot()
  })
})
