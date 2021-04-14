/* eslint-disable react/jsx-one-expression-per-line,jsx-a11y/label-has-associated-control */
import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { SiteNav } from '.'
import { NavItemVariant } from '../../quarks'
import { Colorway } from '../../../config'

export default {
  title: 'Molecules/SiteNav',
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
    <SiteNav currentPath="/four/four/three" links={links} />

    <h2>Item Props</h2>
    <p>
      The <em>SiteNav</em> component accepts <em>variant</em>, <em>layout</em>,{' '}
      <em>currentColor</em>, <em>currentWidth</em>, and <em>currentStyle</em>{' '}
      props for styling its items.
    </p>

    <h3>Background Variant</h3>
    <div>
      <SiteNav
        variant={NavItemVariant.Background}
        color={Colorway.Secondary}
        currentColor={Colorway.Dark}
        currentPath="/one"
        links={links}
        menuColor={Colorway.Neutral}
      />
    </div>

    <h3>Border Variant</h3>
    <div>
      <SiteNav
        variant={NavItemVariant.Border}
        color={Colorway.Tertiary}
        currentColor={Colorway.Neutral}
        currentPath="/one"
        links={links}
      />
    </div>

    <h3>Underline Variant</h3>
    <div>
      <SiteNav
        variant={NavItemVariant.Underline}
        color={Colorway.Warning}
        currentPath="/three"
        links={links}
      />
    </div>
  </>
)
