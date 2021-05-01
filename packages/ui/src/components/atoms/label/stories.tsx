import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { messageDemo } from '../../../_story'
import { ColorwayNotification, Font } from '../../../config'

import { Label, LabelProps } from '.'

export default {
  title: 'Atoms/Label',
  component: Label,
} as Meta

const Template: Story<LabelProps> = ({ children, ...others }: LabelProps) => (
  <Label {...others}>{children}</Label>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Label',
}

export const Props = Template.bind({})
Props.args = {
  ...Default.args,
  color: ColorwayNotification.Info,
  font: Font.Emphasized,
  required: true,
}

export const Traits = () => messageDemo(Label, {})
