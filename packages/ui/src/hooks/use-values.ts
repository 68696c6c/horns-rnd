import {
  EventHandler,
  MouseEvent,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react'
import { useDebouncedCallback } from 'use-debounce'

import { ControlOption } from '../config'

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

const handleValues = (
  newValue: string | number,
  newDisplayValue: string,
  currentValues: Values,
  currentDisplayValues: Values,
  setValues: (a: Values) => void,
  setDisplayValues: (a: Values) => void,
  placeholder?: string,
  multiple?: boolean,
) => {
  if (multiple) {
    // If the value is already selected, unselect it.
    if (currentValues.includes(newValue)) {
      const finalValues = currentValues.filter((v) => v !== newValue)
      setValues(finalValues)

      const filteredDisplayValues = currentDisplayValues.filter(
        (dv) => dv !== newDisplayValue,
      )
      // Show the placeholder again if all the items have been removed.
      const finalDisplayValues =
        filteredDisplayValues.length === 0
          ? [placeholder]
          : filteredDisplayValues
      setDisplayValues(finalDisplayValues as Values)
    } else if (
      currentDisplayValues.length === 1 &&
      currentDisplayValues[0] === placeholder
    ) {
      // Hide the placeholder if this is the first new item.
      setValues([...currentValues, newValue])
      setDisplayValues([newDisplayValue])
    } else {
      // Append the new item.
      setValues([...currentValues, newValue])
      setDisplayValues([...currentDisplayValues, newDisplayValue])
    }
  } else {
    // If we only support a single value, just set it.
    setValues([newValue])
    setDisplayValues([newDisplayValue])
  }
}

export type Values = Array<string | number>

export type FilterOptionsFunc = (
  value: string,
  options: ControlOption[],
  callback: (result: ControlOption[]) => void,
) => void

export interface ValuesArgs {
  options: ControlOption[]
  multiple?: boolean
  filterOptions?: FilterOptionsFunc
  onChange?: EventHandler<any>
  placeholder?: string
  defaultValues?: Values
  timeout?: number
}

export interface ValuesResult {
  filterRef: RefObject<HTMLInputElement>
  values: Values
  displayValues: Values
  options: ControlOption[]
  handleFilter: () => void
  handleOptionClick: (event: MouseEvent<HTMLLIElement>) => void
}

export const useValues = ({
  multiple,
  filterOptions,
  onChange,
  placeholder: placeholderProp,
  options: optionsProp,
  defaultValues: defaultValuesProp,
  timeout: timeoutProp,
}: ValuesArgs): ValuesResult => {
  const timeout = timeoutProp || 100
  const placeholder = placeholderProp || ''
  const defaultValues =
    typeof defaultValuesProp === 'undefined' ? [] : defaultValuesProp

  const filterRef = useRef<HTMLInputElement>(null)

  const [displayValues, setDisplayValues] = useState<Values>([placeholder])
  const [values, setValues] = useState<Values>(defaultValues)
  const [options, setOptions] = useState<ControlOption[]>(optionsProp)
  const [changeEvent, setChangeEvent] = useState<MouseEvent<HTMLLIElement>>()

  const debouncedFilterOptions = useDebouncedCallback(
    filterOptions || defaultFilterOptions,
    timeout,
  )

  const handleFilter = () => {
    debouncedFilterOptions(
      filterRef.current?.value || '',
      optionsProp,
      (result: ControlOption[]) => setOptions(result),
    )
  }

  const handleOptionClick = (event: MouseEvent<HTMLLIElement>) => {
    event.stopPropagation()
    const t = event.target as HTMLLIElement
    const value = t?.getAttribute('value') || ''
    const displayValue = t?.getAttribute('label') || ''
    handleValues(
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
      typeof defaultValuesProp !== 'undefined'
    ) {
      if (multiple) {
        const defaultOptions = optionsProp.filter(({ value }) =>
          defaultValuesProp.includes(value),
        )
        const initialValues: Values = []
        const initialDisplayValues: Values = []
        defaultOptions.forEach((option) => {
          initialValues.push(option.value)
          initialDisplayValues.push(option.label)
        })
        setValues(initialValues)
        setDisplayValues(initialDisplayValues)
      } else {
        for (let i = 0; i < optionsProp.length; i += 1) {
          const option = optionsProp[i]
          if (defaultValuesProp.includes(option.value)) {
            setValues([option.value])
            setDisplayValues([option.label])
            break
          }
        }
      }
    }
  }, [defaultValuesProp, multiple, optionsProp, placeholder])

  // Since we want to simulate native behavior we need to pass the event to onChange but if we call
  // onChange from the event handler it will fire before the new value is set in the state.  So we
  // need to track the event in state, update it in the event handler, and then call the onChange
  // callback when the event state updates.
  useEffect(() => {
    if (typeof onChange !== 'undefined') {
      onChange(changeEvent)
    }
  }, [changeEvent, onChange])

  return {
    filterRef,
    values,
    displayValues,
    options,
    handleFilter,
    handleOptionClick,
  }
}
