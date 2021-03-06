import React from 'react'

import { render } from '../../test'
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
        <Button
          border={{ all: { style: style as BorderStyle, width: 'small' } }}
        >
          {style}
        </Button>,
      )
      expect(container).toMatchSnapshot()
    },
  )
  it.each(Object.values(Size))('should render border width %s', (size) => {
    const { container } = render(
      <Button border={{ all: { style: 'solid', width: size } }}>{size}</Button>,
    )
    expect(container).toMatchSnapshot()
  })
  it.each(Object.values(Size))('should render padding %s', (size) => {
    const { container } = render(<Button padding={size}>{size}</Button>)
    expect(container).toMatchSnapshot()
  })
  it.each(Object.values(Font))('should render font %s', (font) => {
    const { container } = render(<Button font={font}>{font}</Button>)
    expect(container).toMatchSnapshot()
  })
  describe('ui states', () => {
    it('should render hover state', () => {
      const testId = 'button-hover'
      const { getByTestId } = render(
        <Button data-testid={testId}>{testId}</Button>,
      )
      const button = getByTestId(testId)
      expect(button).toHaveStyleRule('background-color', 'rgb(102, 102, 102)', {
        target: ':hover',
      })
      expect(button).toHaveStyleRule('background-color', 'rgb(127, 127, 127)')
    })
    it('should render active state', () => {
      const testId = 'button-active'
      const { getByTestId } = render(
        <Button data-testid={testId}>{testId}</Button>,
      )
      const button = getByTestId(testId)
      expect(button).toHaveStyleRule('background-color', 'rgb(67, 67, 67)', {
        target: ':active',
      })
      expect(button).toHaveStyleRule('background-color', 'rgb(127, 127, 127)')
    })
  })
})
