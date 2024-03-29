import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Colorway, Size } from '@horns/theme'

import { blockDemo } from '../../../_story'
import { BlockProps } from '../../quarks'

import { Main } from '.'

export default {
  title: 'Atoms/Main',
  component: Main,
} as Meta

const Template: Story<BlockProps> = ({ children, ...others }: BlockProps) => (
  <Main {...others}>{children}</Main>
)

export const Default = Template.bind({})
Default.args = {
  children: (
    <>
      <h1>main</h1>
      <p>content can go anywhere</p>
      <div>a div</div>
      <div>another div</div>
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

export const ResponsiveMobile = Template.bind({})
ResponsiveMobile.args = {
  ...Default.args,
  color: Colorway.Secondary,
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
  color: Colorway.Tertiary,
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
  color: Colorway.Primary,
  fluid: true,
}
ResponsiveFluid.parameters = {
  viewport: {
    defaultViewport: 'max',
  },
}

export const Traits = () => blockDemo(Main, {})
