import React, { FC, ReactNode, ElementType, PropsWithoutRef } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import {
  BorderStyle,
  Colorway,
  ColorwayNotification,
  Size,
  Font,
  HoverState,
  StatusState,
  Cursor,
} from '../config'

const codeStyles = () => css`
  border-radius: 0.33em;
  border: 2px solid #e8bf6a;
  background: #202020;
  color: #eeffff;
`

export const StyledCode = styled.code(
  codeStyles,
  () => css`
    padding: 0.2em;
  `,
)

export const StyledPre = styled.pre(
  codeStyles,
  () => css`
    display: block;
    padding: 1em;
  `,
)

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
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label style={{ display: 'block' }}>{args.label}</label>
      <C {...props} defaultValue={args.label} />
    </div>
  ) : (
    <C {...props}>{args.label}</C>
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

export const chromaticControlDemo = <T extends {}>(
  C: ElementType,
  props: PropsWithoutRef<T>,
  selfClosing?: boolean,
) => (
  <Demo>
    <h1>chromaticControl</h1>
    <StyledDemo>
      {renderDemoComponent<T>(
        C,
        {
          ...props,
          color: Colorway.Primary,
        },
        { label: 'default', selfClosing },
      )}
      {Object.values(ColorwayNotification).map((color) =>
        renderDemoComponent<T>(
          C,
          {
            ...props,
            color,
          },
          { key: `colorway-${color}`, label: color, selfClosing },
        ),
      )}
    </StyledDemo>
  </Demo>
)

export const chromaticNotificationDemo = <T extends {}>(
  C: ElementType,
  props: PropsWithoutRef<T>,
  selfClosing?: boolean,
) => (
  <Demo>
    <h1>chromaticNotification</h1>
    <StyledDemo>
      {renderDemoComponent<T>(
        C,
        {
          ...props,
          color: Colorway.Primary,
        },
        { label: 'default', selfClosing },
      )}
      {Object.values(ColorwayNotification).map((color) =>
        renderDemoComponent<T>(
          C,
          {
            ...props,
            color,
          },
          { key: `colorway-${color}`, label: color, selfClosing },
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
    <p>
      If the &quot;fluid&quot; prop is set to &quot;true&quot;, this behavior is
      disabled.
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

export const interactiveDemo = <T extends {}>(
  C: ElementType,
  props: PropsWithoutRef<T>,
  selfClosing?: boolean,
) => (
  <Demo>
    <h1>interactive</h1>
    <StyledDemo>
      {renderDemoComponent<T>(C, props, { label: 'default', selfClosing })}
      {Object.values(HoverState).map((state) =>
        renderDemoComponent<T>(
          C,
          {
            ...props,
            className: state,
          },
          { key: `ui-state-${state}`, label: state, selfClosing },
        ),
      )}
      {renderDemoComponent<T>(
        C,
        {
          ...props,
          className: StatusState.Inactive,
        },
        {
          key: `ui-state-${StatusState.Inactive}`,
          label: StatusState.Inactive,
          selfClosing,
        },
      )}
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
    {interactiveDemo(C, props)}
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
    {interactiveDemo(C, props)}
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
    {chromaticControlDemo(C, props, true)}
    {interactiveDemo(C, props, true)}
    {paddedDemo(C, props, true)}
    {roundedDemo(C, props, true)}
    {typographicDemo(C, props, true)}
  </>
)

export const messageDemo = <T extends {}>(
  C: ElementType,
  props: PropsWithoutRef<T>,
) => (
  <>
    {chromaticNotificationDemo(C, props)}
    {typographicDemo(C, props)}
  </>
)

export const makeTableRow = (i: string): Record<string, string> => ({
  id: `${i.repeat(8)}-${i.repeat(4)}-${i.repeat(4)}-${i.repeat(4)}-${i.repeat(
    12,
  )}`,
  first_name: 'Example',
  last_name: 'User',
  email: `user-${i}@example.com`,
  phone: `${i.repeat(3)}-${i.repeat(3)}-${i.repeat(4)}`,
  created_at: `2020-${i.padStart(2, '0')}-01`,
  updated_at: '',
  deleted_at: '',
})

// TODO: is there a better way to set control options?
export const colorwayArgTypes = {
  color: {
    options: Object.values(Colorway),
    control: 'select',
  },
}

export const colorwayNotificationArgTypes = {
  color: {
    options: Object.values(ColorwayNotification),
    control: 'select',
  },
}

export const fontArgTypes = {
  font: {
    options: Object.values(Font),
    control: 'select',
  },
}

export const cursorArgTypes = {
  cursor: {
    options: Object.values(Cursor),
    control: 'select',
  },
}
