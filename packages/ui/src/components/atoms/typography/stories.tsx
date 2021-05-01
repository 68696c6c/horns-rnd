import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import {
  chromaticTextDemo,
  StyledDemo,
  StyledDivider,
  StyledPre,
  typographicDemo,
} from '../../../_story'
import { Colorway, Font, HeadingLevel } from '../../../config'

import {
  Heading as HeadingAtom,
  SubHeading as SubHeadingAtom,
  T as TypographyAtom,
  TypographyProps,
} from '.'

export default {
  title: 'Atoms/Typography',
  component: TypographyAtom,
} as Meta

const Template: Story<TypographyProps> = ({
  children,
  ...others
}: TypographyProps) => <TypographyAtom {...others}>{children}</TypographyAtom>

export const T = Template.bind({})
T.args = {
  children: 'Typography',
}

export const Props = Template.bind({})
Props.args = {
  ...T.args,
  color: Colorway.Primary,
  font: Font.Emphasized,
}

export const Traits: Story = () => (
  <>
    {chromaticTextDemo(TypographyAtom, {})}
    {typographicDemo(TypographyAtom, {})}
  </>
)

export const Fonts: Story = () => (
  <>
    <h1>Fonts</h1>
    <StyledPre>{`<T font="h1">example</T>`}</StyledPre>
    <StyledDivider />
    <StyledDemo>
      {Object.values(HeadingLevel).map((variant) => (
        <TypographyAtom font={variant} key={`typography-${variant}`}>
          {variant}
        </TypographyAtom>
      ))}
      {Object.values(Font).map((variant) =>
        variant === Font.Heading ? (
          <></>
        ) : (
          <TypographyAtom font={variant} key={`typography-${variant}`}>
            {variant}
          </TypographyAtom>
        ),
      )}
    </StyledDemo>
  </>
)

export const Heading: Story<TypographyProps> = ({
  children,
  ...others
}: TypographyProps) => <HeadingAtom {...others}>{children}</HeadingAtom>
Heading.args = {
  children: 'Heading',
}

export const SubHeading: Story<TypographyProps> = ({
  children,
  ...others
}: TypographyProps) => <SubHeadingAtom {...others}>{children}</SubHeadingAtom>
SubHeading.args = {
  children: 'SubHeading',
}
