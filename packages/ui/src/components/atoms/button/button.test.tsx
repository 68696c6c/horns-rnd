import React from 'react'
import { render } from '@testing-library/react'

import { theme } from '../../test'
import { Button } from '.'

describe('Button', () => {
  it('should render as default', () => {
    const { container } = render(<Button theme={theme}>example</Button>)
    expect(container).toMatchSnapshot()
  })
})
