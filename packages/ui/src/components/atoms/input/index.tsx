import React, { forwardRef, FC, Ref, ForwardedRef, LegacyRef } from 'react'
import { createNumberMask } from 'text-mask-addons'
import MaskedInput from 'react-text-mask'

import {
  ControlProps,
  StyledInputHidden,
  StyledInputMasked,
  StyledInput,
} from '../../quarks'

// eslint-disable-next-line
const phoneMask = [ /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/ ]

export enum InputType {
  Color = 'color',
  Currency = 'currency',
  Date = 'date',
  DatetimeLocal = 'datetime-local',
  Email = 'email',
  Hidden = 'hidden',
  Month = 'month',
  Number = 'number',
  Password = 'password',
  Percentage = 'percentage',
  Range = 'range',
  Search = 'search',
  Tel = 'tel',
  Text = 'text',
  Time = 'time',
  Url = 'url',
  Week = 'week',
}

export type InputRef = HTMLInputElement | MaskedInput | null | undefined

export interface InputProps extends ControlProps {
  currency?: string
  type?: InputType
  forwardedRef?: ForwardedRef<InputRef>
}

const BaseInput: FC<InputProps> = ({
  currency,
  type,
  forwardedRef,
  ...others
}: InputProps) => {
  switch (type) {
    case 'hidden':
      return (
        <StyledInputHidden
          {...others}
          type={type}
          ref={forwardedRef as LegacyRef<HTMLInputElement>}
        />
      )
    case 'tel':
      return (
        <StyledInputMasked
          mask={phoneMask}
          placeholderChar="_"
          {...others}
          type={type}
          ref={forwardedRef as Ref<MaskedInput>}
        />
      )
    case 'currency':
      return (
        <StyledInputMasked
          mask={createNumberMask({
            prefix: currency,
            allowDecimal: true,
          })}
          type={InputType.Text}
          {...others}
          currency={currency}
          ref={forwardedRef as Ref<MaskedInput>}
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
          ref={forwardedRef as Ref<MaskedInput>}
        />
      )
    default:
      return (
        <StyledInput
          {...others}
          type={type}
          ref={forwardedRef as LegacyRef<HTMLInputElement>}
        />
      )
  }
}

export const Input = forwardRef((props: InputProps, ref: Ref<InputRef>) => (
  <BaseInput {...props} forwardedRef={ref} />
))
