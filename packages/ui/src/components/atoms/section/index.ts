import styled, { StyledComponent } from '@emotion/styled'

import {
  chromatic,
  contained,
  padded,
  Component,
  Chromatic,
  Contained,
  Padded,
} from '../../../traits'

interface SectionProps extends Component, Chromatic, Contained, Padded {}

export const Section: StyledComponent<SectionProps> = styled.section(
  chromatic,
  padded,
  contained,
)
