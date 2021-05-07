/* eslint-disable react/jsx-one-expression-per-line */
import React, { useRef } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import {
  ColorwayNotification,
  Cursor,
  Font,
  InputType,
  Size,
} from '@horns/theme'

import {
  controlDemo,
  StyledDemo,
  colorwayNotificationArgTypes,
  fontArgTypes,
  cursorArgTypes,
} from '../../../_story'

import { Input, InputProps, InputRef } from '.'

export default {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    ...colorwayNotificationArgTypes,
    ...fontArgTypes,
    ...cursorArgTypes,
  },
} as Meta

const Template: Story<InputProps> = (props: InputProps) => <Input {...props} />

export const Default = Template.bind({})

export const Props = Template.bind({})
Props.args = {
  border: { all: { width: Size.Small } },
  color: ColorwayNotification.Info,
  padding: { all: Size.Small },
  radius: { all: Size.Large },
  font: Font.Emphasized,
  cursor: Cursor.Alias,
}

export const Traits: Story = () => controlDemo(Input, {})

export const Types: Story = () => (
  <>
    {Object.values(InputType).map((type) => (
      <StyledDemo key={`input-${type}`} style={{ marginBottom: '1em' }}>
        <label htmlFor={`input-${type}`}>{type}: </label>
        <Input type={type} id={`input-${type}`} />
      </StyledDemo>
    ))}
  </>
)

const RefDemo = () => {
  const ref = useRef<InputRef>()
  // eslint-disable-next-line no-console
  const handleKeyUp = (event: Event) => console.log(event, ref)
  return <Input ref={ref} onKeyUp={handleKeyUp} />
}

export const RefExample: Story = () => <RefDemo />

const MaskedRefDemo = () => {
  const ref = useRef<InputRef>()
  // eslint-disable-next-line no-console
  const handleKeyUp = (event: Event) => console.log(event, ref)
  return <Input type={InputType.Tel} ref={ref} onKeyUp={handleKeyUp} />
}

export const MaskedRefExample: Story = () => <MaskedRefDemo />
