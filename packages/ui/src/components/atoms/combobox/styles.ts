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

export interface ComboboxProps extends ControlProps {
  open?: boolean
  placeholder?: string
}

export interface ContainerProps extends MenuProps {
  minWidth?: number
}

export const Container = styled.div<ContainerProps>(
  ({ theme, open, shadow }) => open && shadowed({ theme, shadow }),
  ({ minWidth }) =>
    css`
      display: inline-flex;
      flex-direction: column;
      width: ${minWidth && `${minWidth}px`};
    `,
)

export const Textbox = styled.input(
  controlStyles,
  () => css`
    position: absolute;
    width: 100%;
    left: 0;
    box-sizing: border-box;
    height: auto;
    min-height: 1em;
  `,
)

export const TextboxWidthController = styled.span(
  controlStyles,
  () =>
    css`
      box-sizing: border-box;
      height: auto;
      min-height: 1em;
      width: 100%;
    `,
)

export interface TextboxWrapperProps {
  open?: boolean
  minWidth?: number
}

export const TextboxWrapper = styled.span<TextboxWrapperProps>(
  ({ minWidth }) => css`
    position: relative;
    min-width: ${minWidth && `${minWidth}px`};
  `,
  ({ open }) =>
    !open &&
    css`
      display: none;
    `,
)

export const DisplayValue = styled.div<ControlProps & TextboxWrapperProps>(
  controlStyles,
  ({ minWidth }) =>
    css`
      box-sizing: border-box;
      height: auto;
      min-height: 1em;
      width: 100%;
      min-width: ${minWidth && `${minWidth}px`};
    `,
  ({ open }) =>
    open &&
    css`
      display: none;
    `,
)

export const ListboxContainer = styled.div`
  position: relative;
`

export interface ListboxProps
  extends Bordered,
    ChromaticNotification,
    Padded,
    Rounded,
    MenuProps {}

export const Listbox = styled.ul<ListboxProps>(
  ({ theme, border, padding, radius }: Styled & ListboxProps) => [
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

export interface OptionProps
  extends Chromatic,
    Padded,
    Interactive,
    Typographic {
  value?: string | number
  label?: string
}

export const Option = styled.li<OptionProps>(
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
