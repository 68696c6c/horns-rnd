import React, { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'

import { ToggleType } from '../../../config'
import { ControlProps } from '../../quarks'
import { Toggle } from '../../atoms'

import * as Styled from './styles'

export interface ToggleOption {
  key: string
  value: string | number
}

export interface ToggleGroupProps extends ControlProps {
  options?: ToggleOption[]
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
  const options = propsOptions || ({} as ToggleOption[])

  useEffect(() => {
    const idMap: IdMap = {}
    options.forEach((option) => {
      idMap[option.key] = `${id}-option-${option.key}`
    })
    setToggleIDs(idMap)
  }, [id, options])

  return (
    <Styled.ToggleGroup {...others} length={options.length}>
      {options.map(({ key, value }) => {
        const toggleID = toggleIDs[key] || uuid()
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
              {key}
            </Styled.Label>
          </Styled.ToggleGroupOption>
        )
      })}
    </Styled.ToggleGroup>
  )
}

export default ToggleGroup
