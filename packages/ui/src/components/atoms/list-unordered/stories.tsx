import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { FaSkull, FaSkullCrossbones } from 'react-icons/fa'

import { Colorway, Font, Size, ULType } from '@horns/theme'

import { UL, ULProps } from '.'

export default {
  title: 'Atoms/List - Unordered',
  component: UL,
} as Meta

const Template: Story<ULProps> = ({ children, ...others }: ULProps) => (
  <UL {...others}>{children}</UL>
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
  type: ULType.Square,
}

export const ItemData = Template.bind({})
ItemData.args = {
  color: Colorway.Primary,
  markerColor: Colorway.Secondary,
  font: Font.Strong,
  gapped: true,
  gap: Size.XXSmall,
  Icon: FaSkull,
  itemData: [
    {
      children: 'these items are dynamically generated from data',
    },
    {
      children:
        'custom marker icons are supported when using the itemData prop',
    },
    {
      Icon: FaSkullCrossbones,
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
