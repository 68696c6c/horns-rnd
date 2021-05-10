import styled from '@emotion/styled'

import { Size } from '@horns/theme'

import { BlockProps, blockStyles } from '../../quarks'

export const Main = styled.main<BlockProps>(blockStyles)

Main.defaultProps = {
  padding: { x: Size.Small },
}
