import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Colorway, Size } from '@horns/theme'

import { blockDemo } from '../../../_story'
import { BlockProps } from '../../quarks'

import { Footer } from '.'

export default {
  title: 'Atoms/Footer',
  component: Footer,
} as Meta

const Template: Story<BlockProps> = ({ children, ...others }: BlockProps) => (
  <Footer {...others}>{children}</Footer>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Footer',
}

export const Props = Template.bind({})
Props.args = {
  ...Default.args,
  color: Colorway.Primary,
  padding: { all: Size.Small },
  fluid: false,
}

export const Traits = () => blockDemo(Footer, {})
