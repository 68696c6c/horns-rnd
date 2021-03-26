import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { clickableButtonDemo, clickableLinkDemo } from '../../../_story'
import { LinkVariant as Variant } from '../../quarks'

import { Link, LinkProps } from '.'

export default {
  title: 'Atoms/Link',
  component: Link,
} as Meta

const Template: Story<LinkProps> = ({ children, ...others }: LinkProps) => (
  <Link {...others}>{children}</Link>
)

export const Default = Template.bind({})
Default.args = {
  href: '#',
  children: 'Default',
}

export const LinkVariant = Template.bind({})
LinkVariant.args = {
  href: '#',
  variant: Variant.Link,
  children: 'Link Variant',
}

export const LinkVariantTraits = () =>
  clickableLinkDemo(LinkVariant, { ...LinkVariant.args })

export const ButtonVariant = Template.bind({})
ButtonVariant.args = {
  href: '#',
  variant: Variant.Button,
  children: 'Button Variant',
}

export const ButtonVariantTraits = () =>
  clickableButtonDemo(ButtonVariant, { ...ButtonVariant.args })
