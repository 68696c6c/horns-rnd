import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { controlDemo } from '../../../_story'

import { SelectNative } from '.'

export default {
  title: 'Atoms/SelectNative',
  component: SelectNative,
} as Meta

export const Default: Story = (args) => (
  <SelectNative {...args}>
    <option value={1}>Option 1</option>
    <option value={2}>Option 2</option>
    <option value={3}>Option 3</option>
  </SelectNative>
)

export const Traits: Story = () => controlDemo(SelectNative, {})
