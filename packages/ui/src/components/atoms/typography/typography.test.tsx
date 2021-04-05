import React from 'react'

import { render } from '../../test'
import { Colorway, Font, HeadingLevel } from '../../../config'

import { T, Heading, SubHeading, FontTag } from '.'

describe('T', () => {
  it('should render as default', () => {
    const { container } = render(<T>example</T>)
    expect(container).toMatchSnapshot()
  })
  it.each(Object.values(Colorway))('should render colorway %s', (color) => {
    const { container } = render(<T color={color}>{color}</T>)
    expect(container).toMatchSnapshot()
  })
  it.each([
    ...Object.values(Font),
    ...Object.values(HeadingLevel),
    ...Object.values(FontTag),
  ])('should render variant %s', (font) => {
    const { container } = render(<T variant={font}>{font}</T>)
    expect(container).toMatchSnapshot()
  })
})

describe('Heading', () => {
  it('should render as default', () => {
    const { container } = render(<Heading>example</Heading>)
    expect(container).toMatchSnapshot()
  })
  it.each(Object.values(Colorway))('should render colorway %s', (color) => {
    const { container } = render(<Heading color={color}>{color}</Heading>)
    expect(container).toMatchSnapshot()
  })
})

describe('SubHeading', () => {
  it('should render as default', () => {
    const { container } = render(<SubHeading>example</SubHeading>)
    expect(container).toMatchSnapshot()
  })
  it.each(Object.values(Colorway))('should render colorway %s', (color) => {
    const { container } = render(<SubHeading color={color}>{color}</SubHeading>)
    expect(container).toMatchSnapshot()
  })
})
