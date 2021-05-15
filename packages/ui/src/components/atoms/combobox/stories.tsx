/* eslint-disable react/jsx-one-expression-per-line,jsx-a11y/label-has-associated-control */
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Combobox, ComboboxProps } from '.'

export default {
  title: 'Atoms/Combobox',
  component: Combobox,
} as Meta

const options = [
  { label: 'One', value: '1' },
  { label: 'Two', value: '2' },
  { label: 'Three', value: '3' },
  { label: 'Four', value: '4' },
  { label: 'Five', value: '5' },
]

const Template: Story<ComboboxProps> = (props: ComboboxProps) => (
  <Combobox {...props} />
)

export const Default = Template.bind({})
Default.args = {
  id: 'example-select',
  name: 'example_select',
  placeholder: 'Select one...',
  options,
}

export const Multiselect = Template.bind({})
Multiselect.args = {
  ...Default.args,
  id: 'example-multiselect',
  name: 'example_multiselect',
  placeholder: 'Select one or more...',
  multiple: true,
}
