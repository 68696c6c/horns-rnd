import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import {
  clickableButtonDemo,
  colorwayArgTypes,
  fontArgTypes,
  cursorArgTypes,
} from '../../../_story'
import { BorderStyle, Colorway, Cursor, Font, Size } from '../../../config'
import { ButtonProps } from '../../quarks'

import { Button } from '.'

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    ...colorwayArgTypes,
    ...fontArgTypes,
    ...cursorArgTypes,
  },
} as Meta

const Template: Story<ButtonProps> = ({ children, ...others }: ButtonProps) => (
  <Button {...others}>{children}</Button>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Button',
}

export const Props = Template.bind({})
Props.args = {
  ...Default.args,
  border: { all: { width: Size.Small, style: BorderStyle.Solid } },
  color: Colorway.Primary,
  padding: { all: Size.Small },
  radius: { all: Size.Large },
  font: Font.Emphasized,
  cursor: Cursor.Alias,
}

export const Traits = () => clickableButtonDemo(Default, { ...Default.args })
