import { ForwardedRef } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import {
  ControlOption,
  Cursor,
  Font,
  HoverState,
  Size,
  StatusState,
} from '@horns/theme'

import { Values } from '../../../hooks'
import {
  ControlProps,
  controlStyles,
  MenuProps,
  menuStyles,
} from '../../quarks'
import {
  bordered,
  Bordered,
  chromatic,
  Chromatic,
  chromaticControl,
  ChromaticNotification,
  interactive,
  Interactive,
  isBorderProperties,
  padded,
  Padded,
  rounded,
  Rounded,
  Shadowed,
  shadowed,
  Styled,
  typographic,
  Typographic,
} from '../../../traits'

export interface ContainerProps extends MenuProps, Rounded {
  minWidth?: number
}

export const Container = styled.div<ContainerProps>(
  rounded,
  ({ theme, open, shadow }) => open && shadowed({ theme, shadow }),
  ({ minWidth }) =>
    css`
      display: inline-flex;
      flex-direction: column;
      width: ${minWidth && `${minWidth}px`};
    `,
)

// TODO: no "any"! what is the correct type??
const comboboxControlStyles = (): any[] => [
  controlStyles,
  css`
    box-sizing: border-box;
    height: auto;
    min-height: 1em;
    width: 100%;
  `,
]

export interface ComboboxProps
  extends Omit<ControlProps, 'defaultValue'>,
    Shadowed {
  open?: boolean
  placeholder?: string
  options?: ControlOption[]
  forwardedRef?: ForwardedRef<HTMLInputElement | undefined>
  defaultValue?: Values
}

export const Textbox = styled.input<ComboboxProps>(
  comboboxControlStyles,
  () => css`
    position: absolute;
    left: 0;
  `,
  ({ open }) =>
    open &&
    css`
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    `,
)

export const TextboxWidthController = styled.span(comboboxControlStyles)

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
  comboboxControlStyles,
  ({ minWidth }) =>
    css`
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
    () => {
      let borderWidth
      if (isBorderProperties(border)) {
        borderWidth = border.width
      } else if (border?.all?.width) {
        borderWidth = border.all.width
      } else if (border?.y?.width) {
        borderWidth = border.y.width
      } else if (border?.top?.width) {
        borderWidth = border.top.width
      } else {
        borderWidth = theme.controls.border.all?.width
      }
      return css`
        border-top: none;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        top: -${theme.sizes[borderWidth as Size]};
        padding-left: 0;
        padding-right: 0;
        margin: 0;
        list-style-type: none;
      `
    },
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
