import React, { FC, ReactNode, ElementType, PropsWithoutRef } from 'react'
import styled from '@emotion/styled'

import {
  BorderStyle,
  Colorway,
  Size,
  Font,
  HoverState,
  StatusState,
} from '../config'

export const StyledCode = styled.code`
  display: block;
  padding: 1em;
  border-radius: 0.33em;
  border: 2px solid #e8bf6a;
  background: #202020;
  color: #eeffff;
`

export const StyledDemo = styled.div`
  display: flex;
  grid-gap: 1em;
  flex-wrap: wrap;
  align-items: center;
`

export const StyledDivider = styled.hr`
  margin: 1em 0;
`

interface DemoProps {
  children: ReactNode
}

const Demo: FC<DemoProps> = ({ children }: DemoProps) => <div>{children}</div>

interface RenderArgs {
  key?: string
  label: string
  selfClosing?: boolean
}

// This helper function makes it easier to dynamically render either self-closing or non-self-closing components.
const renderDemoComponent = <T extends {}>(
  C: ElementType,
  props: PropsWithoutRef<T>,
  args: RenderArgs,
) =>
  args.selfClosing ? (
    <div key={args.key}>
      <C {...props} defaultValue={args.label} />
    </div>
  ) : (
    <C {...props} />
  )

export const borderedDemo = <T extends {}>(
  C: ElementType,
  props: PropsWithoutRef<T>,
  selfClosing?: boolean,
) => (
  <Demo>
    <h1>bordered</h1>
    <h2>style</h2>
    <StyledDemo>
      {renderDemoComponent<T>(
        C,
        {
          ...props,
          border: { all: { width: 'small' } },
        },
        { label: 'default', selfClosing },
      )}
      {Object.values(BorderStyle).map((style) =>
        renderDemoComponent<T>(
          C,
          {
            ...props,
            border: { all: { width: 'small', style } },
          },
          {
            key: `border-style-${style}`,
            label: style,
            selfClosing,
          },
        ),
      )}
    </StyledDemo>
    <h2>width</h2>
    <StyledDemo>
      {renderDemoComponent<T>(C, props, { label: 'default', selfClosing })}
      {Object.values(Size).map((size) =>
        renderDemoComponent<T>(
          C,
          {
            ...props,
            border: { all: { width: size, style: 'solid' } },
          },
          { key: `border-width-${size}`, label: size, selfClosing },
        ),
      )}
    </StyledDemo>
  </Demo>
)

export const chromaticDemo = <T extends {}>(
  C: ElementType,
  props: PropsWithoutRef<T>,
  selfClosing?: boolean,
) => (
  <Demo>
    <h1>chromatic</h1>
    <StyledDemo>
      {renderDemoComponent<T>(
        C,
        {
          ...props,
          color: undefined,
        },
        { label: 'default', selfClosing },
      )}
      {Object.values(Colorway).map((color) =>
        color === Colorway.Typography ? (
          <></>
        ) : (
          renderDemoComponent<T>(
            C,
            {
              ...props,
              color,
            },
            { key: `colorway-${color}`, label: color, selfClosing },
          )
        ),
      )}
    </StyledDemo>
  </Demo>
)

export const chromaticTextDemo = <T extends {}>(
  C: ElementType,
  props: PropsWithoutRef<T>,
) => (
  <Demo>
    <h1>chromaticText</h1>
    <StyledDemo>
      <C {...props} color={undefined}>
        default
      </C>
      {Object.values(Colorway).map((color) =>
        color === Colorway.Typography ? (
          <></>
        ) : (
          <C {...props} color={color} key={`colorway-${color}`}>
            {color}
          </C>
        ),
      )}
    </StyledDemo>
  </Demo>
)

export const containedDemo = <T extends {}>(
  C: ElementType,
  props: PropsWithoutRef<T>,
) => (
  <C {...props}>
    <h1>contained</h1>
    <p>
      Above the &quot;max&quot; breakpoint, the component will include left and
      right padding for centering the content within the content area of the
      page.
    </p>
  </C>
)

export const paddedDemo = <T extends {}>(
  C: ElementType,
  props: PropsWithoutRef<T>,
  selfClosing?: boolean,
) => (
  <Demo>
    <h1>padded</h1>
    <StyledDemo>
      {renderDemoComponent<T>(
        C,
        {
          ...props,
          padding: undefined,
        },
        { label: 'default', selfClosing },
      )}
      {Object.values(Size).map((size) =>
        renderDemoComponent<T>(
          C,
          {
            ...props,
            padding: size,
          },
          { key: `padding-${size}`, label: size, selfClosing },
        ),
      )}
    </StyledDemo>
  </Demo>
)

export const roundedDemo = <T extends {}>(
  C: ElementType,
  props: PropsWithoutRef<T>,
  selfClosing?: boolean,
) => (
  <Demo>
    <h1>rounded</h1>
    <StyledDemo>
      {renderDemoComponent<T>(
        C,
        {
          ...props,
          radius: undefined,
        },
        { label: 'default', selfClosing },
      )}
      {Object.values(Size).map((size) =>
        renderDemoComponent<T>(
          C,
          {
            ...props,
            radius: size,
          },
          { key: `radius-${size}`, label: size, selfClosing },
        ),
      )}
    </StyledDemo>
  </Demo>
)

export const typographicDemo = <T extends {}>(
  C: ElementType,
  props: PropsWithoutRef<T>,
  selfClosing?: boolean,
) => (
  <Demo>
    <h1>typographic</h1>
    <StyledDemo>
      {renderDemoComponent<T>(
        C,
        {
          ...props,
          font: undefined,
        },
        { label: 'default', selfClosing },
      )}
      {Object.values(Font).map((font) =>
        renderDemoComponent<T>(
          C,
          {
            ...props,
            font,
          },
          { key: `typographic-${font}`, label: font, selfClosing },
        ),
      )}
    </StyledDemo>
  </Demo>
)

export const uiStateDemo = <T extends {}>(
  C: ElementType,
  props: PropsWithoutRef<T>,
) => (
  <Demo>
    <h1>UI States</h1>
    <StyledDemo>
      <C {...props} padding={undefined}>
        default
      </C>
      {Object.values(HoverState).map((state) => (
        <C {...props} className={state} key={`ui-state-${state}`}>
          {state}
        </C>
      ))}
      {Object.values(StatusState).map((state) => (
        <C {...props} className={state} key={`ui-state-${state}`}>
          {state}
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
    {roundedDemo(C, props)}
    {typographicDemo(C, props)}
  </>
)

export const clickableLinkDemo = <T extends {}>(
  C: ElementType,
  props: PropsWithoutRef<T>,
) => (
  <>
    {chromaticTextDemo(C, props)}
    {typographicDemo(C, props)}
  </>
)

export const blockDemo = <T extends {}>(
  C: ElementType,
  props: PropsWithoutRef<T>,
) => (
  <>
    {chromaticDemo(C, props)}
    {paddedDemo(C, props)}
    {containedDemo(C, props)}
  </>
)

export const controlDemo = <T extends {}>(
  C: ElementType,
  props: PropsWithoutRef<T>,
) => (
  <>
    {borderedDemo(C, props, true)}
    {chromaticDemo(C, props, true)}
    {paddedDemo(C, props, true)}
    {roundedDemo(C, props, true)}
    {typographicDemo(C, props, true)}
  </>
)
