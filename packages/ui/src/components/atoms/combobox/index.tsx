import React, { FC, MouseEvent, LegacyRef, ForwardedRef, useRef } from 'react'

import { Colorway, ControlOption, InputType } from '@horns/theme'

import { useMenu, useValues, Values } from '../../../hooks'
import { ControlOptionProps } from '../../quarks'

import * as Styled from './styles'

export type FilterOptionsFuncProp = (
  value: string,
  options: ControlOption[],
  callback: (result: ControlOption[]) => void,
) => void

export interface ComboboxProps
  extends Omit<Styled.ComboboxProps, 'defaultValue'>,
    ControlOptionProps {
  filterOptions?: FilterOptionsFuncProp
  forwardedRef?: ForwardedRef<HTMLInputElement | undefined>
  defaultValue?: Values
  showFilter?: boolean
}

// TODO: this is an attempt at making a more accessible Select component; replace Select with this.
export const Combobox: FC<ComboboxProps> = ({
  id,
  multiple,
  filterOptions,
  name,
  onChange,
  color,
  forwardedRef,
  shadow,
  radius,
  showFilter,
  options: optionsProp,
  placeholder: placeholderProp,
  defaultValue: defaultValueProp,
  ...others
}: ComboboxProps) => {
  const idListbox = `${id}-listbox`
  const displayRef = useRef(null)

  const idCombobox = `${id}-combobox`
  const comboboxRef = useRef<HTMLInputElement>(null)

  const {
    values,
    displayValues,
    options,
    handleFilter,
    handleOptionClick,
  } = useValues({
    filterRef: comboboxRef,
    multiple,
    filterOptions,
    placeholder: placeholderProp,
    options: optionsProp || [],
    defaultValues: defaultValueProp,
    onChange,
    timeout: 100,
  })

  const onOpen = () => comboboxRef.current?.focus()
  const onClose = () => {
    if (comboboxRef.current) {
      comboboxRef.current.value = ''
    }
  }

  const isMenuElement = (target: EventTarget) =>
    target === comboboxRef.current || target === displayRef.current

  const { open, minWidth, toggleOpen, menuRef } = useMenu<HTMLUListElement>({
    onOpen,
    onClose,
    isMenuElement,
  })

  return (
    <Styled.Container open={open} shadow={shadow} radius={radius}>
      <input
        ref={forwardedRef as LegacyRef<HTMLInputElement>}
        type="hidden"
        id={id}
        name={name}
        value={values.join(',')}
      />
      <Styled.DisplayValue
        {...others}
        ref={displayRef}
        open={!showFilter ? false : open}
        minWidth={minWidth}
        onClick={toggleOpen}
        multiple={multiple}
        color={color}
        radius={radius}
      >
        {showFilter && open ? '' : displayValues.join(', ')}
      </Styled.DisplayValue>
      {showFilter && (
        <Styled.TextboxWrapper open={open} minWidth={minWidth}>
          <Styled.TextboxWidthController aria-hidden>
            {displayValues.join(', ')}
          </Styled.TextboxWidthController>
          <Styled.Textbox
            {...others}
            ref={comboboxRef}
            id={idCombobox}
            role="combobox"
            autoComplete="off"
            aria-autocomplete="none"
            aria-owns={idListbox}
            aria-expanded={open}
            aria-haspopup="true"
            onClick={toggleOpen}
            onKeyUp={handleFilter}
            type={InputType.Text}
            placeholder={displayValues.join(', ')}
            multiple={multiple}
            color={color}
            shadow={shadow}
            radius={radius}
            open={open}
          />
        </Styled.TextboxWrapper>
      )}
      <Styled.ListboxContainer>
        <Styled.Listbox
          {...others}
          color={color}
          shadow={shadow}
          radius={radius}
          id={id}
          ref={menuRef}
          open={open}
          role="listbox"
        >
          {options &&
            options.map(({ label, value }) => {
              const isSelected = values.includes(value)
              return (
                <Styled.Option
                  key={`${id}-option-${label}`}
                  value={value}
                  label={label}
                  onClick={(event: MouseEvent<HTMLLIElement>) => {
                    handleOptionClick(event)
                    toggleOpen()
                  }}
                  color={isSelected ? Colorway.BackgroundAlt : undefined}
                  role="option"
                  aria-selected={isSelected}
                >
                  {label}
                </Styled.Option>
              )
            })}
        </Styled.Listbox>
      </Styled.ListboxContainer>
    </Styled.Container>
  )
}
