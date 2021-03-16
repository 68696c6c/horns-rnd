import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Dropdown } from '.'

export default {
  title: 'Atoms/Dropdown',
  component: Dropdown,
} as Meta

export const Default: Story = () => (
  <Dropdown open>
    <li>item one</li>
    <li>item two</li>
    <li>item three</li>
  </Dropdown>
)
