import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import {
  chromaticTextDemo,
  StyledCode,
  StyledDemo,
  StyledDivider,
} from '../../../_story'
import { Font, HeadingLevel } from '../../../config'

import {
  FontTag,
  T as TypographyAtom,
  Heading as HeadingAtom,
  SubHeading as SubHeadingAtom,
} from '.'

export default {
  title: 'Atoms/Typography',
  component: TypographyAtom,
} as Meta

export const T: Story = () => <TypographyAtom>Default</TypographyAtom>

export const TVariants: Story = () => (
  <>
    <h1>T Variants</h1>
    <StyledCode>{`<T variant="h1">example</T>`}</StyledCode>
    <StyledDivider />
    <StyledDemo>
      {Object.values(HeadingLevel).map((variant) => (
        <TypographyAtom variant={variant} key={`typography-${variant}`}>
          {variant}
        </TypographyAtom>
      ))}
      {Object.values(Font).map((variant) =>
        variant === Font.Heading ? (
          <></>
        ) : (
          <TypographyAtom variant={variant} key={`typography-${variant}`}>
            {variant}
          </TypographyAtom>
        ),
      )}
      {Object.values(FontTag).map((variant) => (
        <TypographyAtom variant={variant} key={`typography-${variant}`}>
          {variant}
        </TypographyAtom>
      ))}
    </StyledDemo>
  </>
)

export const TTraits: Story = () => chromaticTextDemo(TypographyAtom, {})

export const Heading: Story = () => <HeadingAtom>Heading</HeadingAtom>
export const SubHeading: Story = () => (
  <SubHeadingAtom>SubHeading</SubHeadingAtom>
)
