/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Breakpoint } from '../../../config'
import { Stack, StackProps } from '.'

export default {
  title: 'Atoms/Stack',
  component: Stack,
} as Meta

// eslint-disable-next-line react/prop-types
const Template: Story<StackProps> = ({ theme, breakpoint, children }) => (
  <>
    <p>Above the {breakpoint} breakpoint, these items will stack.</p>
    <Stack theme={theme} breakpoint={breakpoint}>
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

export const SingleItem = Template.bind({})
SingleItem.args = {
  breakpoint: Breakpoint.Mobile,
  children: <div>one</div>,
}
