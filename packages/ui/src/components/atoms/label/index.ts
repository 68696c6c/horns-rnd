import styled from '@emotion/styled'

import { Font } from '@horns/theme'

import {
  ChromaticNotification,
  chromaticNotificationText,
  Parent,
  Typographic,
  typographic,
} from '../../../traits'

export interface LabelProps extends Parent, ChromaticNotification, Typographic {
  htmlFor?: string
  required?: boolean
}

export const Label = styled.label<LabelProps>(
  chromaticNotificationText,
  typographic,
)

Label.defaultProps = {
  font: Font.Label,
}
