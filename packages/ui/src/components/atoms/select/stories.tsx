/* eslint-disable react/jsx-one-expression-per-line,jsx-a11y/label-has-associated-control */
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { ColorwayNotification, Cursor, Font, Size } from '@horns/theme'
import { Select as SelectAtom, FilterOptionsFunc, SelectProps } from '.'

export default {
  title: 'Atoms/Select',
  component: SelectAtom,
} as Meta

const options = [
  { label: 'One', value: '1' },
  { label: 'Two', value: '2' },
  { label: 'Three', value: '3' },
  { label: 'Four', value: '4' },
  { label: 'Five', value: '5' },
]

const exampleFilterOptions: FilterOptionsFunc = (value, opts, callback) => {
  setTimeout(
    () =>
      callback(
        value === ''
          ? opts
          : opts.filter((option) =>
              option.label.toLowerCase().includes(value.toLowerCase()),
            ),
      ),
    1000,
  )
}

const Template: Story<SelectProps> = (props: SelectProps) => (
  <SelectAtom {...props} />
)

export const Default = Template.bind({})
Default.args = {
  id: 'default-select',
  name: 'default_select',
  placeholder: 'Select one...',
  options,
}

export const Props = Template.bind({})
Props.args = {
  ...Default.args,
  border: { all: { width: Size.Small } },
  color: ColorwayNotification.Info,
  padding: { all: Size.Small },
  radius: { all: Size.Large },
  font: Font.Emphasized,
  cursor: Cursor.Alias,
}

export const Select = Template.bind({})
Select.args = {
  ...Default.args,
  id: 'example-select',
  name: 'example_select',
}

export const Multiselect = Template.bind({})
Multiselect.args = {
  ...Default.args,
  id: 'example-multiselect',
  name: 'example_multiselect',
  placeholder: 'Select one or more...',
  multiple: true,
}

export const SelectFilter = Template.bind({})
SelectFilter.args = {
  ...Default.args,
  id: 'example-select-filterable',
  name: 'example_select_filterable',
  placeholder: 'Filter one...',
  filterOptions: exampleFilterOptions,
}

export const MultiselectFilter = Template.bind({})
MultiselectFilter.args = {
  ...Default.args,
  id: 'example-multiselect-filterable',
  name: 'example_multiselect_filterable',
  placeholder: 'Filter one or more...',
  filterOptions: exampleFilterOptions,
  multiple: true,
}
