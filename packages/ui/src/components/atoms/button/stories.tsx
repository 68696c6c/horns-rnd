import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { clickableButtonDemo, uiStateDemo } from '../../../_story'
import { ButtonProps } from '../../quarks'

import { Button } from '.'

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = ({ children, ...others }: ButtonProps) => (
  <Button {...others}>{children}</Button>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Default',
}

export const States = () => uiStateDemo(Default, { ...Default.args })

export const Traits = () => clickableButtonDemo(Default, { ...Default.args })
