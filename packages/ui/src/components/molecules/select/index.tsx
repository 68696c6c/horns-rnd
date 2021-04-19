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

import { ControlOption, InputType } from '../../../config'
import { Input } from '../../atoms'
import { useMenu } from '../../../hooks'

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
  options: ControlOption[],
  callback: (result: ControlOption[]) => void,
) => void

export interface SelectProps extends Styled.BaseSelectProps {
  options?: ControlOption[]
  filterOptions?: FilterOptionsFunc
  showFilter?: boolean
  forwardedRef?: ForwardedRef<HTMLInputElement | undefined>
}

const handleValue = (
  value: string,
  displayValue: string,
  currentValues: string[],
  currentDisplayValues: string[],
  setValues: (a: string[]) => void,
  setDisplayValues: (a: string[]) => void,
  placeholder?: string,
  isMultiple?: boolean,
) => {
  if (isMultiple) {
    // If the value is already selected, unselect it.
    if (currentValues.includes(value)) {
      const finalValues = currentValues.filter((v) => v !== value)
      setValues(finalValues)

      const filteredDisplayValues = currentDisplayValues.filter(
        (dv) => dv !== displayValue,
      )
      // Show the placeholder again if all the items have been removed.
      const finalDisplayValues =
        filteredDisplayValues.length === 0
          ? [placeholder]
          : filteredDisplayValues
      setDisplayValues(finalDisplayValues as string[])
    } else if (
      currentDisplayValues.length === 1 &&
      currentDisplayValues[0] === placeholder
    ) {
      // Hide the placeholder if this is the first new item.
      setValues([...currentValues, value])
      setDisplayValues([displayValue])
    } else {
      // Append the new item.
      setValues([...currentValues, value])
      setDisplayValues([...currentDisplayValues, displayValue])
    }
  } else {
    setValues([value])
    setDisplayValues([displayValue])
  }
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
  const [options, setOptions] = useState(optionsProp || ([] as ControlOption[]))
  const [changeEvent, setChangeEvent] = useState<MouseEvent<HTMLLIElement>>()

  const debouncedFilterOptions = useDebouncedCallback(
    filterOptions || defaultFilterOptions,
    100,
  )

  const handleFilter = () =>
    debouncedFilterOptions(
      filterRef.current?.value || '',
      options,
      (result: ControlOption[]) => setOptions(result),
    )

  const handleOptionClick = (event: MouseEvent<HTMLLIElement>) => {
    const t = event.target as HTMLLIElement
    const value = t?.getAttribute('value') || ''
    const displayValue = t?.getAttribute('label') || ''
    handleValue(
      value,
      displayValue,
      values,
      displayValues,
      setValues,
      setDisplayValues,
      placeholder,
      multiple,
    )
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
        [],
        [],
        setValues,
        setDisplayValues,
        placeholder,
        multiple,
      )
    }
  }, [defaultValueProp, multiple, optionsProp, placeholder])

  // Since we want to simulate native behavior we need to pass the event to onChange but if we call
  // onChange from the event handler it will fire before the new value is set in the state.  So we
  // need to track the event in state, update it in the event handler, and then call the onChange
  // callback when the event state updates.
  useEffect(() => {
    if (typeof onChange !== 'undefined') {
      onChange(changeEvent)
    }
  }, [changeEvent, onChange])

  const [open, minWidth, toggleOpen, controlRef, menuRef] = useMenu<
    HTMLDivElement,
    HTMLUListElement
  >({
    initialOpen: false,
    onOpen: () => filterRef.current?.focus(),
    forceWidth: true,
  })

  return (
    <>
      <Input
        ref={forwardedRef}
        type={InputType.Hidden}
        id={id}
        name={name}
        value={values.join(',')}
      />
      <Styled.Container open={open} minWidth={minWidth}>
        <Styled.Select
          {...others}
          ref={controlRef}
          multiple={multiple}
          open={open}
          color={color}
          onClick={toggleOpen}
        >
          {displayValues.join(', ')}
        </Styled.Select>
        <Styled.MenuContainer>
          <Styled.SelectDropdown ref={menuRef} open={open} color={color}>
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
              <Styled.SelectOption
                key={`${id}-select-option-${label}`}
                value={value}
                label={label}
                onClick={handleOptionClick}
              >
                {label}
              </Styled.SelectOption>
            ))}
          </Styled.SelectDropdown>
        </Styled.MenuContainer>
      </Styled.Container>
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
