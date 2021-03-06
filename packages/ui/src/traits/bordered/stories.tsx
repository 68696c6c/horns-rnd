import styled from '@emotion/styled'
import { Meta, Story } from '@storybook/react/types-6-0'

import { borderedDemo } from '../../_story'

import { bordered } from '.'

const Bordered = styled.div(bordered)

export default {
  title: 'Traits/Bordered',
  component: Bordered,
} as Meta

const BorderedStory: Story = () => borderedDemo(Bordered, {})

export { BorderedStory as Bordered }
