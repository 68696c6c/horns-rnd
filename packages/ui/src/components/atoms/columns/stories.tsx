/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Breakpoint } from '@horns/theme'

import { StyledCode } from '../../../_story'

import { Columns, ColumnsProps } from '.'

export default {
  title: 'Atoms/Columns',
  component: Columns,
} as Meta

const Template: Story<ColumnsProps> = ({
  breakpoint,
  columns,
  children,
  ...others
}: ColumnsProps) => (
  <>
    <p>
      Above the {breakpoint} breakpoint, these items will be rendered as
      columns. By default, a single row of columns will be rendered with each
      item in its own column. The <StyledCode>columns</StyledCode> prop will
      limit the number of columns per row and create additional rows to fit the
      remaining items.
    </p>
    <Columns breakpoint={breakpoint} columns={columns} {...others}>
      {children}
    </Columns>
  </>
)

export const Default = Template.bind({})
Default.args = {
  breakpoint: Breakpoint.Mobile,
  children: (
    <>
      <div>one</div>
      <div>two</div>
      <div>three</div>
      <div>four</div>
      <div>five</div>
      <div>six</div>
    </>
  ),
}

export const Gapped = Template.bind({})
Gapped.args = {
  breakpoint: Breakpoint.Mobile,
  gapped: true,
  children: (
    <>
      <div style={{ background: 'tan' }}>one</div>
      <div style={{ background: 'tan' }}>two</div>
      <div style={{ background: 'tan' }}>three</div>
      <div style={{ background: 'tan' }}>four</div>
      <div style={{ background: 'tan' }}>five</div>
      <div style={{ background: 'tan' }}>six</div>
    </>
  ),
}

export const SingleItem = Template.bind({})
SingleItem.args = {
  breakpoint: Breakpoint.Mobile,
  children: <div>one</div>,
}

export const FixedColumns = Template.bind({})
FixedColumns.args = {
  breakpoint: Breakpoint.Mobile,
  columns: 4,
  children: (
    <>
      <div>one</div>
      <div>two</div>
      <div>three</div>
      <div>four</div>
      <div>five</div>
      <div>six</div>
    </>
  ),
}
