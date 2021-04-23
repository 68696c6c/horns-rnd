import React, { forwardRef, FC, Ref, ForwardedRef, LegacyRef } from 'react'
import { createNumberMask } from 'text-mask-addons'
import MaskedInput from 'react-text-mask'

import { InputType } from '../../../config'
import { ControlProps } from '../../quarks'

import * as Styled from './styles'

// eslint-disable-next-line
const phoneMask = [ /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/ ]

export type InputRef = HTMLInputElement | MaskedInput | null | undefined

export interface InputProps extends ControlProps {
  currency?: string
  type?: InputType
  forwardedRef?: ForwardedRef<InputRef>
  placeholder?: string
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
        <Styled.InputHidden
          {...others}
          type={type}
          ref={forwardedRef as LegacyRef<HTMLInputElement>}
        />
      )
    case 'tel':
      return (
        <Styled.InputMasked
          mask={phoneMask}
          placeholderChar="_"
          {...others}
          type={type}
          ref={forwardedRef as Ref<MaskedInput>}
        />
      )
    case 'currency':
      return (
        <Styled.InputMasked
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
        <Styled.InputMasked
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
        <Styled.Input
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
