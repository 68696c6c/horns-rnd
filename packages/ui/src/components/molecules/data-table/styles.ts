import styled from '@emotion/styled'

export const Layout = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.sizes[theme.grid.gap]};
`

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  > * {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.sizes[theme.grid.gap]};
  }
`
