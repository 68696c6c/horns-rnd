import styled from '@emotion/styled'
import { Meta, Story } from '@storybook/react/types-6-0'

import { chromaticDemo } from '../../_story'
import { Styled, Component } from '../styled'

import { chromatic, Chromatic as ChromaticTrait } from '.'

interface ChromaticDemoProps extends Styled, Component, ChromaticTrait {}

const Chromatic = styled.div<ChromaticDemoProps>(({ theme, color }) =>
  chromatic(theme, color),
)

export default {
  title: 'Traits/Chromatic',
  component: Chromatic,
} as Meta

const ChromaticStory: Story = () => chromaticDemo(Chromatic, {})

export { ChromaticStory as Chromatic }
