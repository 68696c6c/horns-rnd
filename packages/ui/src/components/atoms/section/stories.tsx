import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { blockDemo } from '../../../_story'

import { Section } from '.'

export default {
  title: 'Atoms/Section',
  component: Section,
} as Meta

export const Default: Story = () => (
  <Section>
    <h1>section</h1>
    <p>content can go anywhere</p>
    <div>a div</div>
    <div>another div</div>
  </Section>
)

export const Traits = () => blockDemo(Section, {})
