import React, { FC } from 'react'
import { StyledComponent } from '@emotion/styled'

import {
  Colorway,
  ColorwayNotification,
  InputType,
  ToggleType,
} from '../../../config'
import { Inline } from '../../../traits'
import {
  ColumnsProps,
  Input,
  InputProps,
  Label,
  MessageLabel,
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

export interface BaseFormControlProps
  extends Inline,
    Omit<ColumnsProps, 'children'> {
  horizontal?: boolean
  label?: string
  hasError?: boolean
  errorMessage?: string
  type?: InputType | ToggleType | BaseControlType
}

export type FormControlProps = BaseFormControlProps &
  SelectProps &
  Omit<InputProps, 'type'>

export const FormControl: FC<FormControlProps> = ({
  type,
  name,
  id,
  label,
  placeholder,
  required,
  hasError,
  errorMessage,
  horizontal,
  options,
  ...others
}: FormControlProps) => {
  let WrapperTag: StyledComponent<any> = Styled.FormControl
  let wrapperProps: BaseFormControlProps = {}
  if (horizontal) {
    WrapperTag = Styled.FormControlHorizontal
    wrapperProps = { columns: 2, gapped: true }
  }
  let content
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
      content = (
        <SelectNativeAtom
          name={name}
          id={id}
          required={required}
          color={hasError ? ColorwayNotification.Danger : undefined}
        >
          {(options || []).map(({ key, value }) => (
            <option value={value} key={key}>
              {key}
            </option>
          ))}
        </SelectNativeAtom>
      )
      break
    case BaseControlType.MultiselectNative:
      wrapperProps.multiline = true
      content = (
        <SelectNativeAtom
          name={name}
          id={id}
          required={required}
          multiple
          color={hasError ? ColorwayNotification.Danger : undefined}
        >
          {(options || []).map(({ key, value }) => (
            <option value={value} key={key}>
              {key}
            </option>
          ))}
        </SelectNativeAtom>
      )
      break
    case BaseControlType.Select:
      content = (
        <SelectAtom
          name={name}
          id={id}
          placeholder={placeholder}
          required={required}
          options={options}
          color={hasError ? ColorwayNotification.Danger : undefined}
        />
      )
      break
    case BaseControlType.Multiselect:
      wrapperProps.multiline = true
      content = (
        <SelectAtom
          name={name}
          id={id}
          placeholder={placeholder}
          required={required}
          multiple
          options={options}
          color={hasError ? ColorwayNotification.Danger : undefined}
        />
      )
      break
    case BaseControlType.Textarea:
      wrapperProps.multiline = true
      content = (
        <TextareaAtom
          name={name}
          id={id}
          placeholder={placeholder}
          required={required}
          color={hasError ? ColorwayNotification.Danger : undefined}
        />
      )
      break
    case ToggleType.Checkbox:
    case ToggleType.Radio:
      if (horizontal) {
        wrapperProps.multiline = true
      }
      content = (
        <ToggleGroup
          type={type as ToggleType}
          name={name}
          id={id}
          required={required}
          options={options}
          color={hasError ? ColorwayNotification.Danger : undefined}
        />
      )
      break
    default:
      content = (
        <Input
          type={type as InputType}
          name={name}
          id={id}
          placeholder={placeholder}
          required={required}
          color={hasError ? ColorwayNotification.Danger : undefined}
        />
      )
  }
  return (
    <WrapperTag {...wrapperProps} {...others}>
      {label && (
        <Label
          htmlFor={id}
          required={required}
          color={hasError ? Colorway.Danger : undefined}
        >
          {label}
        </Label>
      )}
      {content}
      {errorMessage && (
        <MessageLabel htmlFor={id} color={ColorwayNotification.Danger}>
          {errorMessage}
        </MessageLabel>
      )}
    </WrapperTag>
  )
}
