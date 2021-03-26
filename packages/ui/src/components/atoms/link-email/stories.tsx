import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

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
  children: 'Default',
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
