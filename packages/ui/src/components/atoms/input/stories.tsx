/* eslint-disable react/jsx-one-expression-per-line */
import React, { useRef } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { controlDemo, StyledDemo } from '../../../_story'
import { InputType } from '../../../config'

import { Input, InputRef } from '.'

export default {
  title: 'Atoms/Input',
  component: Input,
} as Meta

export const Default: Story = () => <Input />

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

export const Traits: Story = () => controlDemo(Input, {})

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
