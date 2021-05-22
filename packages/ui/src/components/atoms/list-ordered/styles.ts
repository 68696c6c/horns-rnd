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
  type?: OLType
}

export const LI = styled(BaseLI)<LIProps>(
  ({ type }) => css`
    list-style-type: ${type};
  `,
)

export interface OLProps extends ListProps {
  type?: OLType
}

export const OL = styled.ol<OLProps>(
  listStyles,
  ({ type }) =>
    css`
      list-style-type: ${type};
    `,
)
