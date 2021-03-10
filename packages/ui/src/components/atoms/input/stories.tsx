import React, { useRef } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { Input, InputType, InputRef } from '.'

export default {
  title: 'Atoms/Input',
  component: Input,
} as Meta

export const Default: Story = () => (
  <>
    {Object.values(InputType).map((type) => (
      <div key={`input-${type}`}>
        <Input type={type} />
      </div>
    ))}
  </>
)

export const Color: Story = () => <Input type={InputType.Color} />
export const Currency: Story = () => <Input type={InputType.Currency} />
export const Date: Story = () => <Input type={InputType.Date} />
export const DatetimeLocal: Story = () => (
  <Input type={InputType.DatetimeLocal} />
)
export const Email: Story = () => <Input type={InputType.Email} />
export const Hidden: Story = () => <Input type={InputType.Hidden} />
export const Month: Story = () => <Input type={InputType.Month} />
export const Number: Story = () => <Input type={InputType.Number} />
export const Password: Story = () => <Input type={InputType.Password} />
export const Percentage: Story = () => <Input type={InputType.Percentage} />
export const Range: Story = () => <Input type={InputType.Range} />
export const Search: Story = () => <Input type={InputType.Search} />
export const Tel: Story = () => <Input type={InputType.Tel} />
export const Time: Story = () => <Input type={InputType.Time} />
export const Text: Story = () => <Input type={InputType.Text} />
export const Url: Story = () => <Input type={InputType.Url} />
export const Week: Story = () => <Input type={InputType.Week} />

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
