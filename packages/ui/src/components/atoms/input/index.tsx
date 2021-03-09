import React, { FC } from 'react'
import { createNumberMask } from 'text-mask-addons'

import {
  ControlProps,
  StyledInputHidden,
  StyledInputMasked,
  StyledInput,
} from '../../quarks'

// eslint-disable-next-line
const phoneMask = [ /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/ ]

export enum InputType {
  Hidden = 'hidden',
  Color = 'color',
  Date = 'date',
  DatetimeLocal = 'datetime-local',
  Email = 'email',
  Month = 'month',
  Number = 'number',
  Password = 'password',
  Range = 'range',
  Search = 'search',
  Tel = 'tel',
  Text = 'text',
  Time = 'time',
  Url = 'url',
  Week = 'week',
  Currency = 'currency',
  Percentage = 'percentage',
}

export interface InputProps extends ControlProps {
  currency?: string
  type?: InputType
}

export const Input: FC<InputProps> = ({
  currency,
  type,
  ...others
}: InputProps) => {
  switch (type) {
    case 'hidden':
      return <StyledInputHidden {...others} type={type} />
    case 'tel':
      return (
        <StyledInputMasked
          mask={phoneMask}
          placeholderChar="_"
          {...others}
          type={type}
        />
      )
    case 'currency':
      return (
        <StyledInputMasked
          mask={createNumberMask({
            prefix: currency,
            allowDecimal: true,
          })}
          currency={currency}
          type={InputType.Text}
          {...others}
        />
      )
    case 'percentage':
      return (
        <StyledInputMasked
          mask={createNumberMask({
            prefix: '',
            suffix: '%',
            allowDecimal: true,
          })}
          type={InputType.Text}
          {...others}
        />
      )
    default:
      return <StyledInput {...others} type={type} />
  }
}
