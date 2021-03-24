import React from 'react'

import { ToggleType } from '../../../config'

import * as Styled from './styles'

export const Toggle = ({ id, multiline, ...others }: Styled.ToggleProps) => (
  <>
    <Styled.Toggle id={id} {...others} />
    <Styled.ToggleControl htmlFor={id} multiline {...others} />
  </>
)

export const Checkbox = (props: Omit<Styled.ToggleProps, 'type'>) => (
  <Toggle {...props} type={ToggleType.Checkbox} />
)
export const Radio = (props: Omit<Styled.ToggleProps, 'type'>) => (
  <Toggle {...props} type={ToggleType.Radio} />
)
