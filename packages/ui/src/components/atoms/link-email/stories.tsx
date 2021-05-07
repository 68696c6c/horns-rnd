import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { Colorway, Cursor, Font } from '@horns/theme'

import { clickableButtonDemo, clickableLinkDemo } from '../../../_story'
import { LinkVariant as Variant } from '../../quarks'

import { LinkEmail, LinkEmailProps } from '.'

export default {
  title: 'Atoms/LinkEmail',
  component: LinkEmail,
} as Meta

const Template: Story<LinkEmailProps> = ({
  children,
  ...others
}: LinkEmailProps) => <LinkEmail {...others}>{children}</LinkEmail>

export const Default = Template.bind({})
Default.args = {
  email: 'test@example.com',
  subject: 'Example subject',
  body: 'Example body.',
  children: 'LinkEmail',
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
