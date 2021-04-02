/* eslint-disable react/jsx-one-expression-per-line,jsx-a11y/label-has-associated-control */
import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { ToggleType } from '../../../config'

import { ToggleGroup } from '.'

export default {
  title: 'Molecules/ToggleGroup',
  component: ToggleGroup,
} as Meta

const options = [
  { key: 'One', value: 1 },
  { key: 'Two', value: 2 },
  { key: 'Three', value: 3 },
  { key: 'Four', value: 4 },
]

export const Default: Story = () => (
  <>
    <h1>ToggleGroup</h1>
    <p>
      The <em>ToggleGroup</em> component renders a set of <em>Toggle</em>{' '}
      options.
    </p>
    <div>
      <label htmlFor="example-checkbox-group">Checkbox Toggle Group: </label>
      <ToggleGroup
        type={ToggleType.Checkbox}
        id="example-checkbox-group"
        name="example_checkbox_group"
        options={options}
      />
    </div>
    <div>
      <label htmlFor="example-radio-group">Radio Toggle Group: </label>
      <ToggleGroup
        type={ToggleType.Radio}
        id="example-radio-group"
        name="example_radio_group"
        options={options}
      />
    </div>
  </>
)
