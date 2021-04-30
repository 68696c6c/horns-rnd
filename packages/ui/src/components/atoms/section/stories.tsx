import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { blockDemo } from '../../../_story'
import { Colorway, Size } from '../../../config'
import { BlockProps } from '../../quarks'

import { Section } from '.'

export default {
  title: 'Atoms/Section',
  component: Section,
} as Meta

const Template: Story<BlockProps> = ({ children, ...others }: BlockProps) => (
  <Section {...others}>{children}</Section>
)

export const Default = Template.bind({})
Default.args = {
  children: (
    <>
      <h1>section</h1>
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

export const Traits = () => blockDemo(Section, {})
