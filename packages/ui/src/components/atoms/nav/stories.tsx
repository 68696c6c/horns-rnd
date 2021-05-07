import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Colorway, Size } from '@horns/theme'

import { blockDemo } from '../../../_story'
import { BlockProps } from '../../quarks'

import { Nav } from '.'

export default {
  title: 'Atoms/Nav',
  component: Nav,
} as Meta

const Template: Story<BlockProps> = ({ children, ...others }: BlockProps) => (
  <Nav {...others}>{children}</Nav>
)

export const Default = Template.bind({})
Default.args = {
  children: (
    <>
      <span>item 1</span>
      <span>item 2</span>
    </>
  ),
}

export const Props = Template.bind({})
Props.args = {
  ...Default.args,
  color: Colorway.Primary,
  padding: { all: Size.Small },
  fluid: false,
}

export const Traits = () => blockDemo(Nav, {})
