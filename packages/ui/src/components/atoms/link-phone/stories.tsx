import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

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
}

export const LinkVariant = Template.bind({})
LinkVariant.args = {
  ...Default.args,
  variant: Variant.Link,
  children: 'Link Variant',
}

export const LinkVariantTraits = () =>
  clickableLinkDemo(LinkVariant, { ...LinkVariant.args })

export const ButtonVariant = Template.bind({})
ButtonVariant.args = {
  ...Default.args,
  variant: Variant.Button,
  children: 'Button Variant',
}

export const ButtonVariantTraits = () =>
  clickableButtonDemo(ButtonVariant, { ...ButtonVariant.args })
