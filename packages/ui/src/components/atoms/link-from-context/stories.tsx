import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { Colorway, Cursor, Font } from '@horns/theme'

import {
  clickableButtonDemo,
  clickableLinkDemo,
  StorybookLink,
} from '../../../_story'
import { LinkVariant as Variant } from '../../quarks'

import { LinkFromContext, LinkFromContextProps } from '.'

export default {
  title: 'Atoms/LinkFromContext',
  component: LinkFromContext,
} as Meta

const Template: Story<LinkFromContextProps> = ({
  children,
  ...others
}: LinkFromContextProps) => (
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  <LinkFromContext {...others}>{children}</LinkFromContext>
)

export const Default = Template.bind({})
Default.args = {
  children: 'LinkFromContext',
  LinkComponent: StorybookLink,
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
