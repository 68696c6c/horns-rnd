import React, { useEffect, useMemo, useState } from 'react'
import { v4 as uuid } from 'uuid'

import { ControlOption, ToggleType } from '@horns/theme'

import { ControlProps } from '../../quarks'
import { Toggle } from '../../atoms'

import * as Styled from './styles'

export interface ToggleGroupProps extends ControlProps {
  options?: ControlOption[]
  type: ToggleType
}

type IdMap = Record<string, string>

export const ToggleGroup = ({
  options: propsOptions,
  type,
  name,
  id,
  required,
  ...others
}: ToggleGroupProps) => {
  const [toggleIDs, setToggleIDs] = useState<IdMap>({})
  const options = useMemo(() => propsOptions || ({} as ControlOption[]), [
    propsOptions,
  ])

  useEffect(() => {
    const idMap: IdMap = {}
    options.forEach((option) => {
      idMap[option.label] = `${id}-option-${option.label}`
    })
    setToggleIDs(idMap)
  }, [id, options])

  return (
    <Styled.ToggleGroup {...others} length={options.length}>
      {options.map(({ label, value }) => {
        const toggleID = toggleIDs[label] || uuid()
        return (
          <Styled.ToggleGroupOption key={toggleID}>
            <Toggle
              id={toggleID}
              type={type}
              name={name}
              required={required}
              value={value}
              {...others}
            />
            <Styled.Label htmlFor={toggleID} required={required}>
              {label}
            </Styled.Label>
          </Styled.ToggleGroupOption>
        )
      })}
    </Styled.ToggleGroup>
  )
}
