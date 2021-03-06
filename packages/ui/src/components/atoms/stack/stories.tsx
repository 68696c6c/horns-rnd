/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Breakpoint } from '../../../config'
import { Stack, StackProps } from '.'

export default {
  title: 'Atoms/Stack',
  component: Stack,
} as Meta

const Template: Story<StackProps> = ({
  breakpoint,
  children,
  ...others
}: StackProps) => (
  <>
    <p>Above the {breakpoint} breakpoint, these items will stack.</p>
    <Stack breakpoint={breakpoint} {...others}>
      {children}
    </Stack>
  </>
)

export const Default = Template.bind({})
Default.args = {
  breakpoint: Breakpoint.Mobile,
  children: (
    <>
      <div>one</div>
      <div>two</div>
      <div>three</div>
    </>
  ),
}

export const Gapped = Template.bind({})
Gapped.args = {
  breakpoint: Breakpoint.Mobile,
  gapped: true,
  children: (
    <>
      <div>one</div>
      <div>two</div>
      <div>three</div>
    </>
  ),
}

export const SingleItem = Template.bind({})
SingleItem.args = {
  breakpoint: Breakpoint.Mobile,
  children: <div>one</div>,
}
