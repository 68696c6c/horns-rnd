import {
  Gridded,
  gridded,
  padded,
  Padded,
  Parent,
  responsive,
  Responsive,
  Styled,
} from '../../traits'

export interface GridProps extends Parent, Gridded, Padded, Responsive {}

export const gridStyles = ({
  theme,
  breakpoint,
  gapped,
  gap,
}: Styled & GridProps) => [
  padded,
  responsive({
    theme,
    breakpoint,
    responsiveStyles: gridded({ theme, gapped, gap }),
  }),
]
