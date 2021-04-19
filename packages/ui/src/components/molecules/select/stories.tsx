/* eslint-disable react/jsx-one-expression-per-line,jsx-a11y/label-has-associated-control */
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Select, Multiselect, FilterOptionsFunc, SelectProps } from '.'

export default {
  title: 'Molecules/Select',
  component: Select,
} as Meta

const options = [
  { label: 'One', value: 1 },
  { label: 'Two', value: 2 },
  { label: 'Three', value: 3 },
  { label: 'Four', value: 4 },
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
  <Select {...props} />
)

export const Default = Template.bind({})
Default.args = {
  id: 'example-select',
  name: 'example_select',
  placeholder: 'Select one...',
  options,
}

export const Multiple = Template.bind({})
Multiple.args = {
  id: 'example-multiselect',
  name: 'example_multiselect',
  placeholder: 'Select one or more...',
  options,
}

export const SelectFilter = Template.bind({})
Multiple.args = {
  id: 'example-select-filterable',
  name: 'example_select_filterable',
  placeholder: 'Filter one...',
  options,
  filterOptions: exampleFilterOptions,
}

export const MultipleFilter = Template.bind({})
Multiple.args = {
  id: 'example-multiselect-filterable',
  name: 'example_multiselect_filterable',
  placeholder: 'Filter one or more...',
  options,
  filterOptions: exampleFilterOptions,
}

// export const Default: Story = () => (
//   <>
//     <h1>Select</h1>
//     <p>
//       The <em>Select</em> component is a fully themed replacement for the HTML{' '}
//       <code>select</code> tag.
//     </p>
//     <div>
//       <label htmlFor="example-select">Select: </label>
//       <Select
//         id="example-select"
//         name="example_select"
//         placeholder="Select one..."
//         options={options}
//       />
//     </div>
//     <div>
//       <label htmlFor="example-select-filterable">Filterable Select: </label>
//       <Select
//         id="example-select-filterable"
//         name="example_select_filterable"
//         placeholder="Filter one..."
//         options={options}
//         filterOptions={exampleFilterOptions}
//       />
//     </div>
//     <div>
//       <label htmlFor="example-multiselect">Multiselect: </label>
//       <Select
//         id="example-multiselect"
//         name="example_multiselect"
//         placeholder="Select one or more..."
//         options={options}
//       />
//     </div>
//     <div>
//       <label htmlFor="example-multiselect-filterable">
//         Filterable Multiselect:{' '}
//       </label>
//       <Multiselect
//         id="example-multiselect-filterable"
//         name="example_multiselect_filterable"
//         placeholder="Filter one or more..."
//         options={options}
//         filterOptions={exampleFilterOptions}
//       />
//     </div>
//   </>
// )

// export const Multi: Story = () => {
//
// }
