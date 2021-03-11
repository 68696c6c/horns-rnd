import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { StyledDemo } from '../../../_story'
import { Font, HeadingLevel } from '../../../config'

import {
  FontTag,
  T,
  Heading as HeadingAtom,
  SubHeading as SubHeadingAtom,
} from '.'

export default {
  title: 'Atoms/T (Typography)',
  component: T,
} as Meta

export const Variants: Story = () => (
  <StyledDemo>
    {Object.values(HeadingLevel).map((variant) => (
      <T variant={variant} key={`typography-${variant}`}>
        {variant}
      </T>
    ))}
    {Object.values(Font).map((variant) => (
      <T variant={variant} key={`typography-${variant}`}>
        {variant}
      </T>
    ))}
    {Object.values(FontTag).map((variant) => (
      <T variant={variant} key={`typography-${variant}`}>
        {variant}
      </T>
    ))}
  </StyledDemo>
)

export const Heading: Story = () => <HeadingAtom>Heading</HeadingAtom>
export const SubHeading: Story = () => (
  <SubHeadingAtom>SubHeading</SubHeadingAtom>
)
export const H1: Story = () => <T variant={HeadingLevel.H1}>H1</T>
