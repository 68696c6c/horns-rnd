import React, { MouseEventHandler, useRef, useState } from 'react'
import _debounce from 'lodash.debounce'

import { InputType } from '../../../config'
import { Dropdown, DropdownOption, Input } from '../../atoms'

import { Menu } from '../menu'

import * as Styled from './styles'

export const defaultFilterOptions: FilterOptionsFunc = (
  value,
  options,
  callback,
) =>
  callback(
    value === ''
      ? options
      : options.filter((option) =>
          option.key.toLowerCase().includes(value.toLowerCase()),
        ),
  )

export type FilterOptionsFunc = (
  value: string,
  options: SelectOption[],
  callback: (result: SelectOption[]) => void,
) => void

export interface SelectOption {
  key: string
  value: string | number
}

export interface SelectProps extends Styled.BaseSelectProps {
  options?: SelectOption[]
  filterOptions?: FilterOptionsFunc
}

export const Select = ({
  id,
  multiple,
  options: propsOptions,
  filterOptions,
  placeholder,
  ...others
}: SelectProps) => {
  const [displayValues, setDisplayValues] = useState<string[]>([
    placeholder || '',
  ])
  const [values, setValues] = useState<string[]>([])
  const [options, setOptions] = useState<SelectOption[]>(
    propsOptions || ([] as SelectOption[]),
  )

  const filterRef = useRef<HTMLInputElement>(null)

  const filterOptionsD = _debounce(filterOptions || defaultFilterOptions, 100, {
    leading: true,
  })

  const handleFilter = () =>
    filterOptionsD(
      filterRef.current?.value || '',
      options,
      (result: SelectOption[]) => setOptions(result),
    )

  const handleChange: MouseEventHandler<any> = (event) => {
    const t = event.target as HTMLElement
    const value = t?.getAttribute('value') || ''
    const displayValue = t?.getAttribute('label') || ''

    if (multiple) {
      // If the value is already selected, unselect it.
      if (values.includes(value)) {
        const finalValues = values.filter((v) => v !== value)
        setValues(finalValues)

        const finalDisplayValues = displayValues.filter(
          (dv) => dv !== displayValue,
        )
        setDisplayValues(finalDisplayValues)
      } else {
        setValues([...values, value])
        setDisplayValues([...displayValues, displayValue])
      }
    } else {
      setValues([value])
      setDisplayValues([displayValue])
    }
  }

  return (
    <>
      <Input
        type={InputType.Hidden}
        id={`select-value-${id}`}
        name={`select_value_${id}`}
        value={values.join(',')}
      />
      <Menu
        forceWidth
        onOpen={() => filterRef.current && filterRef.current.focus()}
        renderControl={(open, ref, toggleOpen) => (
          <Styled.Select
            {...others}
            multiple={multiple}
            onClick={toggleOpen}
            ref={ref}
            open={open}
          >
            {displayValues.join(', ')}
          </Styled.Select>
        )}
        renderMenu={(open, ref) => (
          <Dropdown open={open} ref={ref}>
            <DropdownOption key={`select-option-${id}-filter`}>
              <Styled.Filter
                type={InputType.Search}
                id={`select-filter-${id}`}
                name={`select_filter_${id}`}
                onKeyUp={handleFilter}
                ref={filterRef}
              />
            </DropdownOption>
            {options.map(({ key, value }) => (
              <DropdownOption
                value={value}
                key={`select-option-${id}-${key}`}
                onClick={handleChange}
                label={key}
              >
                {key}
              </DropdownOption>
            ))}
          </Dropdown>
        )}
      />
    </>
  )
}

export default Select

export const Multiselect = (props: SelectProps) => (
  <Select {...props} multiple />
)
