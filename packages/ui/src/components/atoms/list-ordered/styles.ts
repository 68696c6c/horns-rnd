import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { OLType } from '@horns/theme'

import {
  ListProps,
  listStyles,
  LI as BaseLI,
  LIProps as BaseLIProps,
} from '../../quarks'

export interface LIProps extends BaseLIProps {
  listType?: OLType
}

export const LI = styled(BaseLI)<LIProps>(
  ({ listType }) => css`
    list-style-type: ${listType};
  `,
)

export interface OLProps extends ListProps {
  listType?: OLType
}

export const OL = styled.ol<OLProps>(
  listStyles,
  ({ listType }) =>
    css`
      list-style-type: ${listType};
    `,
)
