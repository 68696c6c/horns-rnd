/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Breakpoint } from '../../../config'
import { AutoGrid, AutoGridProps } from '.'

export default {
  title: 'Atoms/AutoGrid',
  component: AutoGrid,
} as Meta

const Template: Story<AutoGridProps> = ({
  breakpoint,
  children,
  ...others
}: AutoGridProps) => (
  <>
    <p>
      Above the {breakpoint} breakpoint, these items will rendered in an
      auto-sized, wrapping grid.
    </p>
    <AutoGrid breakpoint={breakpoint} {...others}>
      {children}
    </AutoGrid>
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
      <div>four</div>
      <div>five</div>
      <div>six</div>
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
      <div>four</div>
      <div>five</div>
      <div>six</div>
    </>
  ),
}

export const SingleItem = Template.bind({})
SingleItem.args = {
  breakpoint: Breakpoint.Mobile,
  children: <div>one</div>,
}
