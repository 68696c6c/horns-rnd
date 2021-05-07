import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { Font } from '@horns/theme'

import { Label as LabelAtom } from '../../atoms'

interface ToggleGroupProps {
  length: number
}

export const ToggleGroup = styled.div<ToggleGroupProps>(
  ({ theme, length }) => css`
    column-width: ${theme.grid.columnMin};
    column-count: ${Math.floor(length / 3) || 1};
    margin-top: -0.25em;
    margin-bottom: -0.25em;
  `,
)

export const ToggleGroupOption = styled.div(
  () => css`
    display: flex;
    align-items: center;
    break-inside: avoid-column;
    clear: left;
    padding-top: 0.25em;
    padding-bottom: 0.25em;
  `,
)

export const Label = styled(LabelAtom)(
  () => css`
    cursor: pointer;
    margin-inline-start: 0.333em;
    margin-inline-end: 0.6666em;
  `,
)

Label.defaultProps = {
  font: Font.Control,
}
