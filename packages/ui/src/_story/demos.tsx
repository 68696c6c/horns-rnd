import React, { FC, ReactNode, ElementType, PropsWithoutRef } from 'react'
import styled from '@emotion/styled'

import { BorderStyle, Colorway, Size } from '../config'

const StyledDemo = styled.div`
  display: flex;
  grid-gap: 1em;
  flex-wrap: wrap;
  align-items: center;
`

interface DemoProps {
  children: ReactNode
}

const Demo: FC<DemoProps> = ({ children }: DemoProps) => <div>{children}</div>

export const borderedDemo = <T extends {}>(
  C: ElementType,
  props: PropsWithoutRef<T>,
) => (
  <Demo>
    <h1>bordered</h1>
    <h2>style</h2>
    <StyledDemo>
      <C {...props} border={{ all: { width: 'small' } }}>
        default
      </C>
      {Object.values(BorderStyle).map((style) => (
        <C
          {...props}
          border={{ all: { width: 'small', style } }}
          key={`border-style-${style}`}
        >
          {style}
        </C>
      ))}
    </StyledDemo>
    <h2>width</h2>
    <StyledDemo>
      <C {...props} border={{ all: { width: 'small' } }}>
        default
      </C>
      {Object.values(Size).map((size) => (
        <C
          {...props}
          border={{ all: { width: size, style: 'solid' } }}
          key={`border-width-${size}`}
        >
          {size}
        </C>
      ))}
    </StyledDemo>
  </Demo>
)

export const chromaticDemo = <T extends {}>(
  C: ElementType,
  props: PropsWithoutRef<T>,
) => (
  <Demo>
    <h1>chromatic</h1>
    <StyledDemo>
      <C {...props} color={undefined}>
        default
      </C>
      {Object.values(Colorway).map((color) => (
        <C {...props} color={color} key={`colorway-${color}`}>
          {color}
        </C>
      ))}
    </StyledDemo>
  </Demo>
)

export const paddedDemo = <T extends {}>(
  C: ElementType,
  props: PropsWithoutRef<T>,
) => (
  <Demo>
    <h1>padded</h1>
    <StyledDemo>
      <C {...props} padding={undefined}>
        default
      </C>
      {Object.values(Size).map((size) => (
        <C {...props} padding={size} key={`padding-${size}`}>
          {size}
        </C>
      ))}
    </StyledDemo>
  </Demo>
)

export const clickableButtonDemo = <T extends {}>(
  C: ElementType,
  props: PropsWithoutRef<T>,
) => (
  <>
    {borderedDemo(C, props)}
    {chromaticDemo(C, props)}
    {paddedDemo(C, props)}
  </>
)

export const clickableLinkDemo = <T extends {}>(
  C: ElementType,
  props: PropsWithoutRef<T>,
) => chromaticDemo(C, props)
