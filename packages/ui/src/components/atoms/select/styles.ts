import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { Cursor, Font, HoverState, Size, StatusState } from '@horns/theme'

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
  shadowed,
  Chromatic,
  Interactive,
  Typographic,
  chromatic,
  typographic,
  interactive,
} from '../../../traits'
import {
  ControlProps,
  controlStyles,
  MenuProps,
  menuStyles,
} from '../../quarks'

export const MenuContainer = styled.div`
  position: relative;
`

export interface ContainerProps extends MenuProps {
  minWidth?: number
}

export const Container = styled.div<ContainerProps>(
  ({ theme, open, shadow }) => open && shadowed({ theme, shadow }),
  ({ minWidth }) =>
    css`
      display: inline-flex;
      flex-direction: column;
      min-width: ${minWidth && `${minWidth}px`};
    `,
)

export interface BaseSelectProps extends ControlProps {
  open?: boolean
  placeholder?: string
}

export const Select = styled.div<BaseSelectProps>(
  controlStyles,
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

export const Filter = styled.input(
  controlStyles,
  () => css`
    box-sizing: border-box;
    height: auto;
    min-height: 1em;
    width: 100%;
  `,
)

export interface SelectOptionProps
  extends Chromatic,
    Padded,
    Interactive,
    Typographic {
  value?: string | number
  label?: string
}

export const SelectOption = styled.li<SelectOptionProps>(
  ({ theme, color, cursor, font, padding }) => [
    chromatic,
    padded({ theme, padding, paddingDefault: theme.controls.padding }),
    typographic({ theme, font, fontDefault: Font.Control }),
    interactive({
      theme,
      cursor,
      cursorDefault: Cursor.Pointer,
      hoverStyles: [chromatic({ theme, color, state: HoverState.Hover })],
      activeStyles: [chromatic({ theme, color, state: HoverState.Active })],
      inactiveStyles: [
        chromatic({ theme, color, state: StatusState.Inactive }),
      ],
    }),
    () =>
      css`
        list-style-type: none;
      `,
  ],
)

export const FilterOption = styled(SelectOption)`
  padding-top: 0;
`

export interface SelectDropdownProps
  extends Bordered,
    ChromaticNotification,
    Padded,
    Rounded,
    MenuProps {}

export const SelectDropdown = styled.ul<SelectDropdownProps>(
  ({ theme, border, padding, radius }: Styled & SelectDropdownProps) => [
    menuStyles,
    chromaticControl,
    bordered({ theme, border, borderDefault: theme.controls.border }),
    padded({ theme, padding, paddingDefault: theme.controls.padding }),
    rounded({
      theme,
      radius,
      radiusDefault: theme.controls.radius,
    }),
    // Padding is included and then set to zero on the sides so that if the border radius is
    // increased hopefully the bottom padding will prevent the last item from overlapping the bottom
    // corners of the dropdown.
    () => css`
      border-top: none;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      top: -${theme.sizes[theme.controls.border.all?.width as Size]};
      padding-left: 0;
      padding-right: 0;
      margin: 0;
      list-style-type: none;
    `,
  ],
)
