import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { Font } from '../../../config'
import {
  Bordered,
  bordered,
  ChromaticNotification,
  chromaticControl,
  rounded,
  Rounded,
  Styled,
  padded,
  Padded,
} from '../../../traits'
import { ControlProps, selectStyles } from '../../quarks'
import { Dropdown, DropdownOption, Input } from '../../atoms'

export interface BaseSelectProps extends ControlProps {
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

Select.defaultProps = {
  font: Font.Control,
}

export const Filter = styled(Input)(
  () => css`
    box-sizing: border-box;
    height: auto;
    min-height: 1em;
    width: 100%;
  `,
)

export const FilterOption = styled(DropdownOption)`
  padding-top: 0;
  padding-bottom: 0;
`

export interface SelectDropdownProps
  extends Bordered,
    ChromaticNotification,
    Padded,
    Rounded {}

export const SelectDropdown = styled(Dropdown)(
  ({ theme, border, padding, radius }: Styled & SelectDropdownProps) => [
    chromaticControl,
    bordered({ theme, border, borderDefault: theme.controls.border }),
    padded({ theme, padding, paddingDefault: theme.controls.padding }),
    rounded({
      theme,
      radius,
      radiusDefault: theme.controls.radius,
    }),
    // Padding is included and then set to zero on all sides but the bottom so that if the border
    // radius is increased hopefully the bottom padding will prevent the last item from overlapping
    // the bottom corners of the dropdown.
    () => css`
      border-top: none;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      padding-top: 0;
      padding-left: 0;
      padding-right: 0;
    `,
  ],
)
