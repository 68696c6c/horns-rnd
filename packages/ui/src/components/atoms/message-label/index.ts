import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { MessageProps, messageStyles } from '../../quarks'

export const MessageLabel = styled.label<MessageProps>(
  messageStyles,
  () =>
    css`
      padding-left: 0.6em;
      padding-right: 0.6em;
    `,
)
