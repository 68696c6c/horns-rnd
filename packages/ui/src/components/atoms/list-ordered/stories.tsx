import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { Colorway, Font, OLType, Size } from '@horns/theme'

import { OL, OLProps } from '.'

export default {
  title: 'Atoms/List - Ordered',
  component: OL,
} as Meta

const Template: Story<OLProps> = ({ children, ...others }: OLProps) => (
  <OL {...others}>{children}</OL>
)

export const Default = Template.bind({})
Default.args = {
  children: (
    <>
      <li>static &lt;li&gt; children</li>
      <li>two</li>
      <li>three</li>
      <li>four</li>
      <li>five</li>
      <li>six</li>
      <li>seven</li>
      <li>eight</li>
      <li>nine</li>
      <li>ten</li>
    </>
  ),
}

export const Props = Template.bind({})
Props.args = {
  ...Default.args,
  color: Colorway.Primary,
  markerColor: Colorway.Secondary,
  font: Font.Strong,
  gapped: true,
  gap: Size.XXSmall,
  listType: OLType.A,
}

export const ItemData = Template.bind({})
ItemData.args = {
  color: Colorway.Primary,
  markerColor: Colorway.Secondary,
  font: Font.Strong,
  gapped: true,
  gap: Size.XXSmall,
  itemData: [
    {
      children: 'these items are dynamically generated from data',
    },
    {
      children: 'ordered lists do not use custom icons',
    },
    {
      color: Colorway.Tertiary,
      markerColor: Colorway.Dark,
      font: Font.Emphasized,
      children: (
        <strong>
          dynamic items support more props and can override the default list
          styling
        </strong>
      ),
    },
  ],
}
