/* eslint-disable react/jsx-one-expression-per-line,jsx-a11y/label-has-associated-control */
import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { Colorway } from '@horns/theme'

import { SiteNav } from '.'
import { NavItemVariant } from '../../quarks'

export default {
  title: 'Organisms/SiteNav',
  component: SiteNav,
} as Meta

const links = [
  { href: '/one', text: 'One' },
  { href: '/two', text: 'Two' },
  { href: '/three', text: 'Three' },
  {
    href: '/four',
    text: 'More',
    links: [
      { href: '/four/one', text: 'Sub One' },
      { href: '/four/two', text: 'Sub Two' },
      { href: '/four/three', text: 'Sub Three' },
      {
        href: '/four/four',
        text: 'More',
        links: [
          { href: '/four/four/one', text: 'Sub Sub One' },
          { href: '/four/four/two', text: 'Sub Sub Two' },
          { href: '/four/four/three', text: 'Sub Sub Three' },
        ],
      },
    ],
  },
]

export const Default: Story = () => (
  <>
    <h1>SiteNav</h1>
    <p>
      The <em>SiteNav</em> component provides a fully themed and functional
      site-wide navigation bar.
    </p>
    <p>
      The <em>SiteNav</em> component accepts the same <em>variant</em>,{' '}
      <em>layout</em>, <em>currentColor</em>, <em>currentBorderWidth</em>, and{' '}
      <em>currentBorderStyle</em> props used by the NavItem atoms and uses these
      props to styling its items.
    </p>
    <SiteNav currentPath="/four/four/three" links={links} />
  </>
)

export const BackgroundVariant: Story = () => (
  <div>
    <h1>Background Variant</h1>
    <SiteNav
      variant={NavItemVariant.Background}
      color={Colorway.Secondary}
      currentColor={Colorway.Dark}
      currentPath="/one"
      links={links}
      menuColor={Colorway.Neutral}
    />
  </div>
)

export const BorderVariant: Story = () => (
  <div>
    <h1>Border Variant</h1>
    <SiteNav
      variant={NavItemVariant.Border}
      color={Colorway.Tertiary}
      currentColor={Colorway.Neutral}
      currentPath="/one"
      links={links}
    />
  </div>
)

export const UnderlineVariant: Story = () => (
  <div>
    <h1>Underline Variant</h1>
    <SiteNav
      variant={NavItemVariant.Underline}
      color={Colorway.Warning}
      currentPath="/three"
      links={links}
    />
  </div>
)
