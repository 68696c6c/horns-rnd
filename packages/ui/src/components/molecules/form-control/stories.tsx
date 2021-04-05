/* eslint-disable react/jsx-one-expression-per-line,jsx-a11y/label-has-associated-control */
import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { InputType, ToggleType } from '../../../config'

import { BaseControlType, FormControl } from '.'

export default {
  title: 'Molecules/FormControl',
  component: FormControl,
} as Meta

const options = [
  { key: 'One', value: 1 },
  { key: 'Two', value: 2 },
  { key: 'Three', value: 3 },
  { key: 'Four', value: 4 },
]

const controlTypes = ([] as Array<
  InputType | ToggleType | BaseControlType
>).concat(
  Object.values(InputType),
  Object.values(ToggleType),
  Object.values(BaseControlType),
)

export const Default: Story = () => (
  <>
    <h1>FormControl</h1>
    <p>
      The <em>FormControl</em> component renders a form input and associated
      labels and validation messages based on state of a form form field.
    </p>
    <div>
      {controlTypes.map((type) => (
        <FormControl
          key={type}
          type={type}
          id={`example-${type}-1`}
          name={`example_${type}_1`}
          label={type}
          options={options}
          placeholder={type}
        />
      ))}
    </div>
  </>
)

export const Errors: Story = () => (
  <div>
    {controlTypes.map((type) => (
      <FormControl
        key={type}
        type={type}
        id={`example-${type}-2`}
        name={`example_${type}_2`}
        label={type}
        placeholder={type}
        options={options}
        errorMessage="error message very very very very very very very very very very very very long"
        hasError
      />
    ))}
  </div>
)

export const Horizontal: Story = () => (
  <div>
    {controlTypes.map((type) => (
      <FormControl
        key={type}
        type={type}
        id={`example-${type}-3`}
        name={`example_${type}_3`}
        label={type}
        placeholder={type}
        options={options}
        horizontal
      />
    ))}
  </div>
)

export const ErrorsHorizontal: Story = () => (
  <div>
    {controlTypes.map((type) => (
      <FormControl
        key={type}
        type={type}
        id={`example-${type}-4`}
        name={`example_${type}_4`}
        label={`horizontal ${type}`}
        placeholder={`horizontal ${type}`}
        options={options}
        errorMessage="error message very very very very very very very very very very very very long"
        hasError
        horizontal
      />
    ))}
  </div>
)
