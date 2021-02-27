import styled from '@emotion/styled'

import {
  Styled,
  Component,
  Chromatic,
  chromatic,
  Contained,
  contained,
  Padded,
  padded,
} from '../../../traits'

export interface SectionProps
  extends Styled,
    Component,
    Chromatic,
    Contained,
    Padded {}

export const Section = styled.button<SectionProps>(
  ({ theme, color, fluid, padding }) => [
    chromatic(theme, color),
    padded(theme, padding),
    contained(theme, fluid),
  ],
)
