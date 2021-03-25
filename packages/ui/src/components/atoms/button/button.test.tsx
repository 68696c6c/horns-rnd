import React from 'react'

import { assertStateStyles, render, screen } from '../../test'
import {
  BorderStyle,
  Colorway,
  Size,
  Font,
  HeadingLevel,
} from '../../../config'

import { Button } from '.'

describe('Button', () => {
  it('should render as default', () => {
    const { container } = render(<Button>example</Button>)
    expect(container).toMatchSnapshot()
  })
  it.each(Object.values(Colorway))('should render colorway %s', (color) => {
    const { container } = render(<Button color={color}>{color}</Button>)
    expect(container).toMatchSnapshot()
  })
  it.each(Object.values(BorderStyle))(
    'should render border style %s',
    (style) => {
      const { container } = render(
        <Button border={{ all: { style, width: Size.Small } }}>{style}</Button>,
      )
      expect(container).toMatchSnapshot()
    },
  )
  it.each(Object.values(Size))('should render border width %s', (size) => {
    const { container } = render(
      <Button border={{ all: { style: BorderStyle.Solid, width: size } }}>
        {size}
      </Button>,
    )
    expect(container).toMatchSnapshot()
  })
  it.each(Object.values(Size))('should render padding %s', (size) => {
    const { container } = render(<Button padding={size}>{size}</Button>)
    expect(container).toMatchSnapshot()
  })
  it.each(Object.values(Size))('should render radius %s', (size) => {
    const { container } = render(<Button radius={size}>{size}</Button>)
    expect(container).toMatchSnapshot()
  })
  it.each([...Object.values(Font), ...Object.values(HeadingLevel)])(
    'should render font %s',
    (font) => {
      const { container } = render(<Button font={font}>{font}</Button>)
      expect(container).toMatchSnapshot()
    },
  )
  describe('ui states', () => {
    it('should render default state', () => {
      const text = 'button-default'
      render(<Button>{text}</Button>)
      assertStateStyles(screen.getByText(text), '', {
        'background-color': 'rgb(255, 255, 255)',
      })
    })
    it('should render hover state', () => {
      const text = 'button-hover'
      render(<Button>{text}</Button>)
      assertStateStyles(screen.getByText(text), ':hover', {
        'background-color': 'rgb(247, 247, 247)',
      })
    })
    it('should render active state', () => {
      const text = 'button-active'
      render(<Button>{text}</Button>)
      assertStateStyles(screen.getByText(text), ':active', {
        'background-color': 'rgb(240, 240, 240)',
      })
    })
  })
})
