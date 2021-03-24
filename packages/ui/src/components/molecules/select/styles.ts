import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { ControlProps, selectStyles } from '../../quarks'
import { Input } from '../../atoms'

export interface BaseSelectProps extends ControlProps {
  multiple?: boolean
  open?: boolean
  placeholder?: string
}

export const Select = styled.div<BaseSelectProps>(
  selectStyles,
  ({ open }) =>
    open &&
    css`
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    `,
)

export const Filter = styled(Input)(
  () => css`
    box-sizing: border-box;
    height: auto;
    min-height: 1em;
    width: 100%;
  `,
)
