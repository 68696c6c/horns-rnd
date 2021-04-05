import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { messageDemo } from '../../../_story'

import { Label } from '.'

export default {
  title: 'Atoms/Label',
  component: Label,
} as Meta

export const Default: Story = () => <Label>hello world</Label>

export const Traits = () => messageDemo(Label, {})
