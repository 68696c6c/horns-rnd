import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { Input, InputType } from '.'

export default {
  title: 'Atoms/Input',
  component: Input,
} as Meta

export const Default: Story = () => <Input />

export const Text: Story = () => <Input type={InputType.Text} />
export const Email: Story = () => <Input type={InputType.Email} />
export const Hidden: Story = () => <Input type={InputType.Hidden} />
export const Color: Story = () => <Input type={InputType.Color} />
export const Date: Story = () => <Input type={InputType.Date} />
export const DatetimeLocal: Story = () => (
  <Input type={InputType.DatetimeLocal} />
)
export const Month: Story = () => <Input type={InputType.Month} />
export const Number: Story = () => <Input type={InputType.Number} />
export const Password: Story = () => <Input type={InputType.Password} />
export const Range: Story = () => <Input type={InputType.Range} />
export const Search: Story = () => <Input type={InputType.Search} />
export const Tel: Story = () => <Input type={InputType.Tel} />
export const Time: Story = () => <Input type={InputType.Time} />
export const Url: Story = () => <Input type={InputType.Url} />
export const Week: Story = () => <Input type={InputType.Week} />
export const Currency: Story = () => <Input type={InputType.Currency} />
export const Percentage: Story = () => <Input type={InputType.Percentage} />
