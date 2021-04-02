import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { controlDemo } from '../../../_story'

import { Textarea } from '.'

export default {
  title: 'Atoms/Textarea',
  component: Textarea,
} as Meta

export const Default: Story = (args) => <Textarea {...args} />

export const Traits: Story = () => controlDemo(Textarea, {})
