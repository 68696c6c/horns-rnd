import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { blockDemo } from '../../../_story'
import { Colorway, Size } from '../../../config'
import { BlockProps } from '../../quarks'

import { Header } from '.'

export default {
  title: 'Atoms/Header',
  component: Header,
} as Meta

const Template: Story<BlockProps> = ({ children, ...others }: BlockProps) => (
  <Header {...others}>{children}</Header>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Header',
}

export const Props = Template.bind({})
Props.args = {
  ...Default.args,
  color: Colorway.Primary,
  padding: { all: Size.Small },
  fluid: false,
}

export const ResponsiveMobile = Template.bind({})
ResponsiveMobile.args = {
  ...Default.args,
  fluid: false,
}
ResponsiveMobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
}

export const ResponsiveMax = Template.bind({})
ResponsiveMax.args = {
  ...Default.args,
  fluid: false,
}
ResponsiveMax.parameters = {
  viewport: {
    defaultViewport: 'max',
  },
}

export const ResponsiveFluid = Template.bind({})
ResponsiveFluid.args = {
  ...Default.args,
  fluid: true,
}
ResponsiveFluid.parameters = {
  viewport: {
    defaultViewport: 'max',
  },
}

export const Traits = () => blockDemo(Header, {})
