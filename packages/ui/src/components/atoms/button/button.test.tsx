import React from 'react'

import { render } from '../../test'

import { Button } from '.'

describe('Button', () => {
  it('should render as default', () => {
    const { container } = render(<Button>example</Button>)
    expect(container).toMatchSnapshot()
  })
})
