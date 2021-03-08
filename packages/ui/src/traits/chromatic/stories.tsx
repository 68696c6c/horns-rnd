import styled from '@emotion/styled'
import { Meta, Story } from '@storybook/react/types-6-0'

import { chromaticDemo, chromaticTextDemo } from '../../_story'

import { chromatic, chromaticText } from '.'

export default {
  title: 'Traits/Chromatic',
} as Meta

export const Chromatic: Story = () => chromaticDemo(styled.div(chromatic), {})

export const ChromaticText: Story = () =>
  chromaticTextDemo(styled.div(chromaticText), {})
