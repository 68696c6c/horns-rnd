/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Breakpoint, Size } from '@horns/theme'

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

export const Props = Template.bind({})
Props.args = {
  ...Default.args,
  padding: { all: Size.Small },
  gapped: true,
}

export const Responsive = Template.bind({})
Responsive.args = { ...Default.args }
Responsive.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
}

export const SingleItem = Template.bind({})
SingleItem.args = {
  ...Default.args,
  children: <div>one</div>,
}
