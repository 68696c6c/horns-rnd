import React from 'react'

import { render } from '../../test'
import { InputType } from '../../../config'

import { Default, Props } from './stories'

describe('Input', () => {
  it('should render as default', () => {
    const { container } = render(<Default />)
    expect(container).toMatchSnapshot()
  })
  it('should support trait props', () => {
    const { container } = render(<Props {...Props.args} />)
    expect(container).toMatchSnapshot()
  })
  it.each(Object.values(InputType))('should render type %s', (t) => {
    const { container } = render(<Default type={t} />)
    expect(container).toMatchSnapshot()
  })
})
