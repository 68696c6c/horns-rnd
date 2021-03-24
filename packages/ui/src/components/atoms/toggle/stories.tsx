/* eslint-disable react/jsx-one-expression-per-line,jsx-a11y/label-has-associated-control */
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Toggle, Checkbox, Radio } from '.'

export default {
  title: 'Atoms/Toggle',
  component: Toggle,
} as Meta

export const Default: Story = () => (
  <>
    <h1>Toggle</h1>
    <p>
      The <em>Toggle</em> component provides checkbox and radio input
      functionality with a themed presentation. other than{' '}
      <code>type=&quot;checkbox&quot;</code> It provides no additional behavior
      beyond what native HTML checkboxes and radios provide, i.e. toggle logic.
    </p>
    <div>
      <div>
        <label htmlFor="toggle-checkbox-0">Checkbox Option 0: </label>
        <Checkbox id="toggle-checkbox-0" name="toggle_checkbox_0" value={0} />
      </div>
      <div>
        <label htmlFor="toggle-checkbox-1">Checkbox Option 1: </label>
        <Checkbox id="toggle-checkbox-1" name="toggle_checkbox_0" value={1} />
      </div>
      <div>
        <label htmlFor="toggle-checkbox-2">Checkbox Option 2: </label>
        <Checkbox id="toggle-checkbox-2" name="toggle_checkbox_0" value={2} />
      </div>
    </div>
    <div>
      <div>
        <label htmlFor="toggle-radio-0">Radio Option 0: </label>
        <Radio id="toggle-radio-0" name="toggle_radio_0" value={0} />
      </div>
      <div>
        <label htmlFor="toggle-radio-1">Radio Option 1: </label>
        <Radio id="toggle-radio-1" name="toggle_radio_0" value={1} />
      </div>
      <div>
        <label htmlFor="toggle-radio-2">Radio Option 2: </label>
        <Radio id="toggle-radio-2" name="toggle_radio_0" value={2} />
      </div>
    </div>
  </>
)
