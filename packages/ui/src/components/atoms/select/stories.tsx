/* eslint-disable react/jsx-one-expression-per-line,jsx-a11y/label-has-associated-control */
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { ColorwayNotification, Cursor, Font, Size } from '@horns/theme'

import { BaseSelect, SelectProps } from '.'

export default {
  title: 'Atoms/Combobox',
  component: BaseSelect,
} as Meta

const options = [
  { label: 'One', value: '1' },
  { label: 'Two', value: '2' },
  { label: 'Three', value: '3' },
  { label: 'Four', value: '4' },
  { label: 'Five', value: '5' },
]

const Template: Story<SelectProps> = (props: SelectProps) => (
  <BaseSelect {...props} />
)

export const Default = Template.bind({})
Default.args = {
  id: 'example-select',
  name: 'example_select',
  placeholder: 'Select one...',
  options,
}

export const Filter = Template.bind({})
Filter.args = {
  ...Default.args,
  id: 'filter-select',
  name: 'filter',
  placeholder: 'Filter one...',
  showFilter: true,
}

export const Multiselect = Template.bind({})
Multiselect.args = {
  ...Default.args,
  id: 'example-multiselect',
  name: 'example_multiselect',
  placeholder: 'Select one or more...',
  multiple: true,
}

export const MultiselectFilter = Template.bind({})
MultiselectFilter.args = {
  ...Default.args,
  id: 'filter-multiselect',
  name: 'filter_multiselect',
  placeholder: 'Filter one or more...',
  multiple: true,
  showFilter: true,
}

export const Props = Template.bind({})
Props.args = {
  id: 'props-select',
  name: 'props_select',
  placeholder: 'Select one...',
  options,
  border: { all: { width: Size.Small } },
  color: ColorwayNotification.Info,
  padding: { all: Size.Small },
  radius: { all: Size.Large },
  font: Font.Emphasized,
  cursor: Cursor.Alias,
}
