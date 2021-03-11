import React from 'react'

import { render, screen } from '../../test'
import { BorderStyle, Colorway, Size, Font } from '../../../config'

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
  it.each(Object.values(Font))('should render font %s', (font) => {
    const { container } = render(<Button font={font}>{font}</Button>)
    expect(container).toMatchSnapshot()
  })
  describe('ui states', () => {
    it('should render hover state', () => {
      const text = 'button-hover'
      render(<Button>{text}</Button>)
      const button = screen.getByText(text)
      expect(button).toHaveStyleRule('background-color', 'rgb(247, 247, 247)', {
        target: ':hover',
      })
      expect(button).toHaveStyleRule('background-color', 'rgb(255, 255, 255)')
    })
    it('should render active state', () => {
      const text = 'button-active'
      render(<Button>{text}</Button>)
      const button = screen.getByText(text)
      expect(button).toHaveStyleRule('background-color', 'rgb(240, 240, 240)', {
        target: ':active',
      })
      expect(button).toHaveStyleRule('background-color', 'rgb(255, 255, 255)')
    })
  })
})
