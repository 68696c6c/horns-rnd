import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { blockDemo } from '../../../_story'

import { Main } from '.'

export default {
  title: 'Atoms/Main',
  component: Main,
} as Meta

export const Default: Story = () => (
  <Main>
    <h1>main</h1>
    <p>content can go anywhere</p>
    <div>a div</div>
    <div>another div</div>
  </Main>
)

export const Traits = () => blockDemo(Main, {})
