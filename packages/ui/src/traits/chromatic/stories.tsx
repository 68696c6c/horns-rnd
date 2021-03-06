import styled from '@emotion/styled'
import { Meta, Story } from '@storybook/react/types-6-0'

import { chromaticDemo, chromaticSurfaceDemo } from '../../_story'

import { chromatic, chromaticSurface } from '.'

export default {
  title: 'Traits/Chromatic',
} as Meta

export const Chromatic: Story = () => chromaticDemo(styled.div(chromatic), {})

export const ChromaticSurface: Story = () =>
  chromaticSurfaceDemo(styled.div(chromaticSurface), {})
