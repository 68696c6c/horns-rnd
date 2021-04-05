import React from 'react'

import { render } from '../../test'
import { ColorwayNotification } from '../../../config'

import { Label } from '.'

describe('Label', () => {
  it('should render as default', () => {
    const { container } = render(<Label>example</Label>)
    expect(container).toMatchSnapshot()
  })
  it.each(Object.values(ColorwayNotification))(
    'should render colorway %s',
    (color) => {
      const { container } = render(<Label color={color}>{color}</Label>)
      expect(container).toMatchSnapshot()
    },
  )
})
