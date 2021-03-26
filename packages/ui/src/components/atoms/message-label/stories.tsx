import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { messageDemo } from '../../../_story'

import { MessageLabel } from '.'

export default {
  title: 'Atoms/MessageLabel',
  component: MessageLabel,
} as Meta

export const Default: Story = () => <MessageLabel>hello world</MessageLabel>

export const Traits = () => messageDemo(MessageLabel, {})
