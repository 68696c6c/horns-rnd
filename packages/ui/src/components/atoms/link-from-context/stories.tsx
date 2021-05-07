import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { Colorway, Cursor, Font } from '@horns/theme'

import { clickableButtonDemo, clickableLinkDemo } from '../../../_story'
import { LinkProps, LinkVariant as Variant } from '../../quarks'

import { LinkFromContext } from '.'

export default {
  title: 'Atoms/LinkFromContext',
  component: LinkFromContext,
} as Meta

const Template: Story<LinkProps> = ({ children, ...others }: LinkProps) => (
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  <LinkFromContext {...others}>{children}</LinkFromContext>
)

export const Default = Template.bind({})
Default.args = {
  children: 'LinkFromContext',
}

export const LinkVariant = Template.bind({})
LinkVariant.args = {
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
  variant: Variant.Button,
  color: Colorway.Primary,
  font: Font.Emphasized,
  cursor: Cursor.Alias,
  children: 'Button Variant',
}

export const ButtonVariantTraits = () =>
  clickableButtonDemo(ButtonVariant, { variant: Variant.Button })
