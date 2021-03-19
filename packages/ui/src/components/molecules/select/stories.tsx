/* eslint-disable react/jsx-one-expression-per-line,jsx-a11y/label-has-associated-control */
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Select, Multiselect, FilterOptionsFunc } from '.'

export default {
  title: 'Molecules/Select',
  component: Select,
} as Meta

const options = [
  { key: 'One', value: 1 },
  { key: 'Two', value: 2 },
  { key: 'Three', value: 3 },
  { key: 'Four', value: 4 },
]

const exampleFilterOptions: FilterOptionsFunc = (value, opts, callback) => {
  setTimeout(
    () =>
      callback(
        value === ''
          ? opts
          : opts.filter((option) =>
              option.key.toLowerCase().includes(value.toLowerCase()),
            ),
      ),
    1000,
  )
}

export const Default: Story = () => (
  <>
    <h1>Select</h1>
    <p>
      The <em>Select</em> component is a fully themed replacement for the HTML{' '}
      <code>select</code> tag.
    </p>
    <div>
      <label htmlFor="select-example-1">Select: </label>
      <Select
        id="example-select"
        name="example_select"
        placeholder="Select one..."
        options={options}
      />
    </div>
    <div>
      <label htmlFor="select-example-2">Filterable Select: </label>
      <Select
        id="example-select-filterable"
        name="example_select_filterable"
        placeholder="Filter one..."
        options={options}
        filterOptions={exampleFilterOptions}
      />
    </div>
    <div>
      <label htmlFor="multiselect-example-2">Filterable Multiselect: </label>
      <Multiselect
        id="example-multiselect-filterable"
        name="example_multiselect_filterable"
        placeholder="Filter as many as you'd like..."
        options={options}
        filterOptions={exampleFilterOptions}
      />
    </div>
  </>
)
