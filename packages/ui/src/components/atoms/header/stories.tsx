import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { blockDemo } from '../../../_story'

import { Header } from '.'

export default {
  title: 'Atoms/Header',
  component: Header,
} as Meta

export const Default: Story = () => (
  <Header>
    <h1>header</h1>
  </Header>
)

export const Traits = () => blockDemo(Header, {})
