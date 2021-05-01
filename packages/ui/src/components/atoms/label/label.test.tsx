import React from 'react'

import { render } from '../../test'

import { Default, Props } from './stories'

describe('Label', () => {
  it('should render as default', () => {
    const { container } = render(<Default>example</Default>)
    expect(container).toMatchSnapshot()
  })
  it('should support trait props', () => {
    const { container } = render(<Props {...Props.args}>example</Props>)
    expect(container).toMatchSnapshot()
  })
})
