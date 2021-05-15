import React, {
  FC,
  forwardRef,
  MouseEvent,
  LegacyRef,
  ForwardedRef,
  Ref,
  useRef,
} from 'react'

import { Colorway, ControlOption, InputType } from '@horns/theme'

import { useMenu, useValues, Values } from '../../../hooks'

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

export interface SelectProps
  extends Omit<Styled.BaseSelectProps, 'defaultValue'> {
  options?: ControlOption[]
  filterOptions?: FilterOptionsFunc
  showFilter?: boolean
  forwardedRef?: ForwardedRef<HTMLInputElement | undefined>
  defaultValue?: Values
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
  const filterRef = useRef<HTMLInputElement>(null)
  const showFilter = showFilterProp || typeof filterOptions !== 'undefined'
  const {
    values,
    displayValues,
    options,
    handleFilter,
    handleOptionClick,
  } = useValues({
    filterRef,
    multiple,
    filterOptions,
    placeholder: placeholderProp,
    options: optionsProp || [],
    defaultValues: defaultValueProp,
    onChange,
    timeout: 100,
  })

  const [open, minWidth, toggleOpen, controlRef, menuRef] = useMenu<
    HTMLDivElement,
    HTMLUListElement
  >({
    initialOpen: false,
    onOpen: () => filterRef.current?.focus(),
    forceWidth: true,
  })

  const handleFilterClick = (e: MouseEvent<HTMLInputElement>) =>
    e.stopPropagation()

  const idCombobox = `${id}-combobox`
  const idListbox = `${id}-listbox`
  const idTextbox = `${id}-textbox`

  return (
    <>
      <input
        ref={forwardedRef as LegacyRef<HTMLInputElement>}
        type="hidden"
        id={id}
        name={name}
        value={values.join(',')}
      />
      <Styled.Container
        id={idCombobox}
        open={open}
        minWidth={minWidth}
        role="combobox"
        aria-expanded={open && true}
        aria-owns={showFilter ? idTextbox : undefined}
      >
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
          <Styled.SelectDropdown
            id={idListbox}
            ref={menuRef}
            open={open}
            color={color}
            role="listbox"
          >
            {showFilter && (
              <Styled.FilterOption>
                <Styled.Filter
                  ref={filterRef}
                  type={InputType.Text}
                  id={idTextbox}
                  name={`${name}_select_filter`}
                  onClick={handleFilterClick}
                  onKeyUp={handleFilter}
                  autoComplete="off"
                  aria-autocomplete="none"
                  role="textbox"
                  aria-controls={idListbox}
                />
              </Styled.FilterOption>
            )}
            {options.map(({ label, value }) => {
              const isSelected = values.includes(value)
              return (
                <Styled.SelectOption
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
                </Styled.SelectOption>
              )
            })}
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
