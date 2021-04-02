import styled from '@emotion/styled'

import { ControlProps, controlStyles } from '../../quarks'

export const Textarea = styled.textarea<ControlProps>(controlStyles)

Textarea.defaultProps = {
  multiline: true,
}
