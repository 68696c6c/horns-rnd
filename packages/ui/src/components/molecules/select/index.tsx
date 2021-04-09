import React, {
  FC,
  ForwardedRef,
  forwardRef,
  Ref,
  useEffect,
  useRef,
  useState,
  MouseEvent,
} from 'react'
import { useDebouncedCallback } from 'use-debounce'

import { InputType } from '../../../config'
import { DropdownOption, Input } from '../../atoms'

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
          option.label.toLowerCase().includes(value.toLowerCase()),
        ),
  )

export type FilterOptionsFunc = (
  value: string,
  options: SelectOption[],
  callback: (result: SelectOption[]) => void,
) => void

export interface SelectOption {
  label: string
  value: string | number
}

export interface SelectProps extends Styled.BaseSelectProps {
  options?: SelectOption[]
  filterOptions?: FilterOptionsFunc
  showFilter?: boolean
  forwardedRef?: ForwardedRef<HTMLInputElement | undefined>
}

const BaseSelect: FC<SelectProps> = ({
  id,
  multiple,
  filterOptions,
  color,
  forwardedRef,
  onChange,
  name,
  showFilter: showFilterProp,
  placeholder: placeholderProp,
  options: optionsProp,
  defaultValue: defaultValueProp,
  ...others
}: SelectProps) => {
  const showFilter = showFilterProp || typeof filterOptions !== 'undefined'
  const placeholder = placeholderProp || ''
  const defaultValue =
    typeof defaultValueProp === 'undefined' ? [] : [defaultValueProp as string]

  const filterRef = useRef<HTMLInputElement>()

  const [displayValues, setDisplayValues] = useState([placeholder])
  const [values, setValues] = useState(defaultValue)
  const [options, setOptions] = useState(optionsProp || ([] as SelectOption[]))
  const [changeEvent, setChangeEvent] = useState<MouseEvent<HTMLLIElement>>()

  const debouncedFilterOptions = useDebouncedCallback(
    filterOptions || defaultFilterOptions,
    100,
  )

  const handleFilter = () =>
    debouncedFilterOptions(
      filterRef.current?.value || '',
      options,
      (result: SelectOption[]) => setOptions(result),
    )

  const handleValue = (value: string, displayValue: string) => {
    if (multiple) {
      // If the value is already selected, unselect it.
      if (values.includes(value)) {
        const finalValues = values.filter((v) => v !== value)
        setValues(finalValues)

        const filteredDisplayValues = displayValues.filter(
          (dv) => dv !== displayValue,
        )
        // Show the placeholder again if all the items have been removed.
        const finalDisplayValues =
          filteredDisplayValues.length === 0
            ? [placeholder]
            : filteredDisplayValues
        setDisplayValues(finalDisplayValues)
      } else if (
        displayValues.length === 1 &&
        displayValues[0] === placeholder
      ) {
        // Hide the placeholder if this is the first new item.
        setValues([...values, value])
        setDisplayValues([displayValue])
      } else {
        // Append the new item.
        setValues([...values, value])
        setDisplayValues([...displayValues, displayValue])
      }
    } else {
      setValues([value])
      setDisplayValues([displayValue])
    }
  }

  const handleOptionClick = (event: MouseEvent<HTMLLIElement>) => {
    const t = event.target as HTMLLIElement
    const value = t?.getAttribute('value') || ''
    const displayValue = t?.getAttribute('label') || ''
    handleValue(value, displayValue)
    setChangeEvent(event)
  }

  useEffect(() => {
    if (
      typeof optionsProp !== 'undefined' &&
      typeof defaultValueProp !== 'undefined'
    ) {
      const defaultOption = optionsProp.find(
        ({ value }) => value === defaultValueProp,
      )
      handleValue(
        defaultOption?.value as string,
        defaultOption?.label as string,
      )
    }
  }, [defaultValueProp, optionsProp])

  // Since we want to simulate native behavior we need to pass the event to onChange but if we call
  // onChange from the event handler it will fire before the new value is set in the state.  So we
  // need to track the event in state, update it in the event handler, and then call the onChange
  // callback when the event state updates.
  useEffect(() => {
    if (typeof onChange !== 'undefined') {
      onChange(changeEvent)
    }
  }, [changeEvent])

  return (
    <>
      <Input
        ref={forwardedRef}
        type={InputType.Hidden}
        id={id}
        name={name}
        value={values.join(',')}
      />
      <Menu
        forceWidth
        onOpen={() => filterRef.current?.focus()}
        renderControl={(open, ref, toggleOpen) => (
          <Styled.Select
            {...others}
            ref={ref}
            multiple={multiple}
            open={open}
            color={color}
            onClick={toggleOpen}
          >
            {displayValues.join(', ')}
          </Styled.Select>
        )}
        renderMenu={(open, ref) => (
          <Styled.SelectDropdown ref={ref} open={open} color={color}>
            {showFilter && (
              <Styled.FilterOption>
                <Styled.Filter
                  ref={filterRef}
                  type={InputType.Search}
                  id={`${id}-select-filter`}
                  name={`${name}_select_filter`}
                  onKeyUp={handleFilter}
                />
              </Styled.FilterOption>
            )}
            {options.map(({ label, value }) => (
              <DropdownOption
                key={`${id}-select-option-${label}`}
                value={value}
                label={label}
                onClick={handleOptionClick}
              >
                {label}
              </DropdownOption>
            ))}
          </Styled.SelectDropdown>
        )}
      />
    </>
  )
}

export const Select = forwardRef(
  (props: SelectProps, ref: Ref<HTMLInputElement | undefined>) => (
    <BaseSelect {...props} forwardedRef={ref} />
  ),
)

export const Multiselect = forwardRef(
  (props: SelectProps, ref: Ref<HTMLInputElement | undefined>) => (
    <BaseSelect {...props} forwardedRef={ref} multiple />
  ),
)
