import React, { FC } from 'react'
import { StyledComponent } from '@emotion/styled'
import { v4 as uuid } from 'uuid'

import { ColorwayNotification, InputType, ToggleType } from '../../../config'
import { Parent } from '../../../traits'
import {
  ColumnsProps,
  Input,
  InputProps,
  Label,
  SelectNative as SelectNativeAtom,
  Textarea as TextareaAtom,
} from '../../atoms'

import { Select as SelectAtom, SelectProps } from '../select'
import { ToggleGroup } from '../toggle-group'

import * as Styled from './styles'

export enum BaseControlType {
  Select = 'select',
  Multiselect = 'multiselect',
  SelectNative = 'select-native',
  MultiselectNative = 'multiselect-native',
  Textarea = 'textarea',
}

export interface FormControlInputProps
  extends SelectProps,
    Omit<InputProps, 'type'> {
  type?: InputType | ToggleType | BaseControlType
}

export interface FormControlProps
  extends Omit<ColumnsProps, 'children'>,
    FormControlInputProps {
  horizontal?: boolean
  label?: string
  hasError?: boolean
  errorMessage?: string
}

const FormControlInput: FC<FormControlInputProps> = ({
  type,
  name,
  id,
  placeholder,
  required,
  color,
  options,
}: FormControlInputProps) => {
  switch (type) {
    case InputType.Hidden:
      return (
        <Input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          required={required}
        />
      )
    case BaseControlType.SelectNative:
      return (
        <SelectNativeAtom name={name} id={id} required={required} color={color}>
          {(options || []).map(({ key, value }) => (
            <option value={value} key={key}>
              {key}
            </option>
          ))}
        </SelectNativeAtom>
      )
    case BaseControlType.MultiselectNative:
      return (
        <SelectNativeAtom
          name={name}
          id={id}
          required={required}
          multiple
          color={color}
        >
          {(options || []).map(({ key, value }) => (
            <option value={value} key={key}>
              {key}
            </option>
          ))}
        </SelectNativeAtom>
      )
    case BaseControlType.Select:
      return (
        <SelectAtom
          name={name}
          id={id}
          placeholder={placeholder}
          required={required}
          options={options}
          color={color}
        />
      )
    case BaseControlType.Multiselect:
      return (
        <SelectAtom
          name={name}
          id={id}
          placeholder={placeholder}
          required={required}
          multiple
          options={options}
          color={color}
        />
      )
    case BaseControlType.Textarea:
      return (
        <TextareaAtom
          name={name}
          id={id}
          placeholder={placeholder}
          required={required}
          color={color}
        />
      )
    case ToggleType.Checkbox:
    case ToggleType.Radio:
      return (
        <ToggleGroup
          type={type as ToggleType}
          name={name}
          id={id}
          required={required}
          options={options}
          color={color}
        />
      )
    default:
      return (
        <Input
          type={type as InputType}
          name={name}
          id={id}
          placeholder={placeholder}
          required={required}
          color={color}
        />
      )
  }
}

export const FormControl: FC<FormControlProps> = ({
  type,
  name,
  id: idProp,
  label,
  // placeholder,
  required,
  hasError,
  errorMessage,
  horizontal,
  // options,
  ...others
}: FormControlProps) => {
  const id = idProp || uuid()
  if (type === InputType.Hidden) {
    return <Input type={type} name={name} id={id} required={required} />
  }
  let WrapperTag: StyledComponent<any> = Styled.FormControl
  let wrapperProps: FormControlProps = {}
  if (horizontal) {
    WrapperTag = Styled.FormControlHorizontal
    wrapperProps = { columns: 2, gapped: true }
  }
  const color = hasError ? ColorwayNotification.Danger : undefined
  const inputProps: FormControlInputProps & Parent = {
    id,
    name,
    required,
    color,
    children: undefined,
    ...others,
  }
  if (
    type === BaseControlType.MultiselectNative ||
    type === BaseControlType.Multiselect
  ) {
    inputProps.multiple = true
  }
  return (
    <WrapperTag {...wrapperProps} {...others}>
      {label && (
        <Label htmlFor={id} required={required} color={color}>
          {label}
        </Label>
      )}
      <FormControlInput {...inputProps} type={type} />
      {errorMessage && (
        <Styled.Message htmlFor={id} color={color}>
          {errorMessage}
        </Styled.Message>
      )}
    </WrapperTag>
  )
}
