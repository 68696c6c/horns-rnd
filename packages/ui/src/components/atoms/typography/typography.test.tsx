import React from 'react'

import { render } from '../../test'
import { Colorway, Font, HeadingLevel } from '../../../config'

import { T, Props, Heading, SubHeading } from './stories'

describe('T', () => {
  it('should render as default', () => {
    const { container } = render(<T>example</T>)
    expect(container).toMatchSnapshot()
  })
  it('should support trait props', () => {
    const { container } = render(<Props {...Props.args}>example</Props>)
    expect(container).toMatchSnapshot()
  })
  it.each([...Object.values(Font), ...Object.values(HeadingLevel)])(
    'should render variant %s',
    (font) => {
      const { container } = render(<T font={font}>{font}</T>)
      expect(container).toMatchSnapshot()
    },
  )
})

describe('Heading', () => {
  it('should render as default', () => {
    const { container } = render(<Heading>example</Heading>)
    expect(container).toMatchSnapshot()
  })
  it('should support trait props', () => {
    const { container } = render(
      <Heading color={Colorway.Primary}>example</Heading>,
    )
    expect(container).toMatchSnapshot()
  })
})

describe('SubHeading', () => {
  it('should render as default', () => {
    const { container } = render(<SubHeading>example</SubHeading>)
    expect(container).toMatchSnapshot()
  })
  it('should support trait props', () => {
    const { container } = render(
      <SubHeading color={Colorway.Primary}>example</SubHeading>,
    )
    expect(container).toMatchSnapshot()
  })
})
