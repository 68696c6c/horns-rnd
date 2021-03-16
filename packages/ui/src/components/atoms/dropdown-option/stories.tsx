import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { DropdownOption } from '.'

export default {
  title: 'Atoms/DropdownOption',
  component: DropdownOption,
} as Meta

export const Default: Story = () => <DropdownOption>hello world</DropdownOption>
