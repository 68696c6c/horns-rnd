import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { Colorway, Cursor, Font } from '@horns/theme'

import { clickableButtonDemo, clickableLinkDemo } from '../../../_story'
import { LinkVariant as Variant } from '../../quarks'

import { LinkPhone, LinkPhoneProps } from '.'

export default {
  title: 'Atoms/LinkPhone',
  component: LinkPhone,
} as Meta

const Template: Story<LinkPhoneProps> = ({
  children,
  ...others
}: LinkPhoneProps) => <LinkPhone {...others}>{children}</LinkPhone>

export const Default = Template.bind({})
Default.args = {
  number: '1234567890',
  children: 'LinkPhone',
}

export const LinkVariant = Template.bind({})
LinkVariant.args = {
  ...Default.args,
  variant: Variant.Link,
  color: Colorway.Primary,
  font: Font.Emphasized,
  cursor: Cursor.Alias,
  children: 'Link Variant',
}

export const LinkVariantTraits = () =>
  clickableLinkDemo(LinkVariant, { variant: Variant.Link })

export const ButtonVariant = Template.bind({})
ButtonVariant.args = {
  ...Default.args,
  variant: Variant.Button,
  color: Colorway.Primary,
  font: Font.Emphasized,
  cursor: Cursor.Alias,
  children: 'Button Variant',
}

export const ButtonVariantTraits = () =>
  clickableButtonDemo(ButtonVariant, { variant: Variant.Button })
