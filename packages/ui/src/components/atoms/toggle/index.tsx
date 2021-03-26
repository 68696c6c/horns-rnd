import React from 'react'
import { v4 as uuid } from 'uuid'

import { ToggleType } from '../../../config'

import * as Styled from './styles'

export const Toggle = ({ id: idProp, ...others }: Styled.ToggleProps) => {
  const id = !idProp ? uuid() : idProp
  return (
    <>
      <Styled.Toggle id={id} {...others} />
      <Styled.ToggleControl htmlFor={id} {...others} />
    </>
  )
}

// This default change handler is needed to prevent the input from becoming readonly when a checked
// prop is provided without an `onChange` handler.
Toggle.defaultProps = {
  onChange: () => {
    return true
  },
}

export const Checkbox = (props: Omit<Styled.ToggleProps, 'type'>) => (
  <Toggle {...props} type={ToggleType.Checkbox} />
)
export const Radio = (props: Omit<Styled.ToggleProps, 'type'>) => (
  <Toggle {...props} type={ToggleType.Radio} />
)
