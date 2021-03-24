import React from 'react'

import { render } from '../../test'
import {
  BorderStyle,
  Colorway,
  Font,
  HeadingLevel,
  Size,
} from '../../../config'

import { Input } from '.'

describe('Input', () => {
  it('should render as default', () => {
    const { container } = render(<Input />)
    expect(container).toMatchSnapshot()
  })
  it.each(Object.values(Colorway))('should render colorway %s', (color) => {
    const { container } = render(<Input color={color} />)
    expect(container).toMatchSnapshot()
  })
  it.each(Object.values(BorderStyle))(
    'should render border style %s',
    (style) => {
      const { container } = render(
        <Input border={{ all: { style, width: Size.Small } }} />,
      )
      expect(container).toMatchSnapshot()
    },
  )
  it.each(Object.values(Size))('should render border width %s', (size) => {
    const { container } = render(
      <Input border={{ all: { style: BorderStyle.Solid, width: size } }} />,
    )
    expect(container).toMatchSnapshot()
  })
  it.each(Object.values(Size))('should render padding %s', (size) => {
    const { container } = render(<Input padding={size} />)
    expect(container).toMatchSnapshot()
  })
  it.each(Object.values(Size))('should render radius %s', (size) => {
    const { container } = render(<Input radius={size} />)
    expect(container).toMatchSnapshot()
  })
  it.each([...Object.values(Font), ...Object.values(HeadingLevel)])(
    'should render font %s',
    (font) => {
      const { container } = render(<Input font={font} />)
      expect(container).toMatchSnapshot()
    },
  )
  // TODO: test ui states.
})
