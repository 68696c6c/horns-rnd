import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { blockDemo } from '../../../_story'

import { Footer } from '.'

export default {
  title: 'Atoms/Footer',
  component: Footer,
} as Meta

export const Default: Story = () => (
  <Footer>
    <h1>footer</h1>
  </Footer>
)

export const Traits = () => blockDemo(Footer, {})
