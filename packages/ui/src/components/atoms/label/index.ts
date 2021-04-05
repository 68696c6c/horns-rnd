import styled from '@emotion/styled'

import { Font } from '../../../config'
import {
  ChromaticNotification,
  chromaticNotificationText,
  Typographic,
  typographic,
} from '../../../traits'

export interface LabelProps extends ChromaticNotification, Typographic {
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
