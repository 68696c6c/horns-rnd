import styled from '@emotion/styled'
import { css } from '@emotion/react'

export interface StickyBarProps {
  isVisible: boolean
}

export const StickyBar = styled.div<StickyBarProps>(
  ({ isVisible }) => css`
    transform: translateY(${isVisible ? '0' : '-100%'});
    z-index: 3;
    position: fixed;
    opacity: ${isVisible ? 1 : 0};
    top: 0;
    width: 100%;
    transition: transform 0.5s cubic-bezier(1, 0.05, 0.17, 1.09),
      opacity 0.5s cubic-bezier(1, 0.05, 0.17, 1.09);
    padding: 0;
  `,
)
