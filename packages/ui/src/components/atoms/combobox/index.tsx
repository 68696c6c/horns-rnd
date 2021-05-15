import React, {
  FC,
  MouseEvent,
  LegacyRef,
  ForwardedRef,
  useRef,
  useState,
  useEffect,
  MutableRefObject,
  Dispatch,
  SetStateAction,
  useCallback,
} from 'react'

import { Colorway, ControlOption, InputType } from '@horns/theme'

import { useValues, Values } from '../../../hooks'

import * as Styled from './styles'

export type FilterOptionsFuncProp = (
  value: string,
  options: ControlOption[],
  callback: (result: ControlOption[]) => void,
) => void

export interface ComboboxProps
  extends Omit<Styled.ComboboxProps, 'defaultValue'> {
  options?: ControlOption[]
  filterOptions?: FilterOptionsFuncProp
  forwardedRef?: ForwardedRef<HTMLInputElement | undefined>
  defaultValue?: Values
}

const setWidth = <M extends HTMLElement>(
  menuRef: MutableRefObject<M | null>,
  setMinWidth: Dispatch<SetStateAction<number>>,
) => {
  const menuWidth = menuRef?.current?.offsetWidth || 0
  setMinWidth(menuWidth)
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
  options: optionsProp,
  placeholder: placeholderProp,
  defaultValue: defaultValueProp,
  ...others
}: ComboboxProps) => {
  const idCombobox = `${id}-combobox`
  const idListbox = `${id}-listbox`
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

  // TODO: reconcile this behavior with the useMenu hook.
  const displayRef = useRef(null)
  const menuRef = useRef(null)
  const [open, setOpen] = useState(false)
  const [minWidth, setMinWidth] = useState(0)
  const toggleOpen = () => {
    setOpen(!open)
  }
  useEffect(() => {
    setWidth<HTMLUListElement>(menuRef, setMinWidth)
  }, [])
  const handleClick = useCallback((event) => {
    if (
      event.target !== comboboxRef.current &&
      event.target !== displayRef.current
    ) {
      setOpen(false)
    }
  }, [])
  useEffect(() => {
    window.addEventListener('click', handleClick)
    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [handleClick])
  useEffect(() => {
    setWidth<HTMLUListElement>(menuRef, setMinWidth)
  }, [values])
  useEffect(() => {
    if (open) {
      comboboxRef.current?.focus()
    } else if (comboboxRef.current) {
      comboboxRef.current.value = ''
    }
  }, [open])

  return (
    <Styled.Container>
      <input
        ref={forwardedRef as LegacyRef<HTMLInputElement>}
        type="hidden"
        id={id}
        name={name}
        value={values.join(',')}
      />
      <Styled.DisplayValue
        ref={displayRef}
        open={open}
        minWidth={minWidth}
        onClick={toggleOpen}
      >
        {open ? '' : displayValues.join(', ')}
      </Styled.DisplayValue>
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
        />
      </Styled.TextboxWrapper>
      <Styled.ListboxContainer>
        <Styled.Listbox id={idListbox} ref={menuRef} open={open} role="listbox">
          {options.map(({ label, value }) => {
            const isSelected = values.includes(value)
            return (
              <Styled.Option
                key={`${id}-select-option-${label}`}
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
