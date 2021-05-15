import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { controlDemo } from '../../../_story'

import { SelectNative, SelectNativeProps } from '.'

export default {
  title: 'Atoms/SelectNative',
  component: SelectNative,
} as Meta

const Template: Story<SelectNativeProps> = ({
  children,
  ...others
}: SelectNativeProps) => <SelectNative {...others}>{children}</SelectNative>

export const Default = Template.bind({})
Default.args = {
  children: (
    <>
      <option value={1}>Option 1</option>
      <option value={2}>Option 2</option>
      <option value={3}>Option 3</option>
    </>
  ),
}

export const Traits: Story = () => controlDemo(SelectNative, {})
