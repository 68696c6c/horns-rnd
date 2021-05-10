/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { BorderStyle, Colorway, Size } from '@horns/theme'

import { NavItemLayout, NavItemVariant } from '../../quarks'

import { PaginationLink } from '.'

export default {
  title: 'Atoms/PaginationLink',
  component: PaginationLink,
} as Meta

export const Default: Story = () => (
  <>
    <h1>PaginationLink</h1>
    <p>
      The <em>PaginationLink</em> component has three variants.
    </p>
  </>
)

export const Background: Story = () => (
  <>
    <h1>PaginationLink background variant</h1>
    <p>
      The <em>background</em> variant provides a themed nav item that uses a
      background color to indicate that it is the current active item.
    </p>
    <p>
      The <em>currentColor</em> prop controls the color of the item when the{' '}
      <em>current</em> prop is true.
    </p>
    <div>
      <div>
        <PaginationLink
          variant={NavItemVariant.Background}
          color={Colorway.Dark}
        >
          horizontal nav item
        </PaginationLink>
      </div>
      <div>
        <PaginationLink
          variant={NavItemVariant.Background}
          layout={NavItemLayout.Vertical}
          color={Colorway.Neutral}
        >
          vertical nav item
        </PaginationLink>
      </div>
    </div>
    <div>
      <div>
        <PaginationLink
          variant={NavItemVariant.Background}
          color={Colorway.Dark}
          currentColor={Colorway.Primary}
          current
        >
          current horizontal nav item
        </PaginationLink>
      </div>
      <div>
        <PaginationLink
          variant={NavItemVariant.Background}
          layout={NavItemLayout.Vertical}
          color={Colorway.Neutral}
          currentColor={Colorway.Primary}
          current
        >
          current vertical nav item
        </PaginationLink>
      </div>
    </div>

    <h2>Layout Prop</h2>
    <div>
      <div>
        <PaginationLink variant={NavItemVariant.Background} current>
          current horizontal nav item
        </PaginationLink>
      </div>
      <div>
        <PaginationLink
          variant={NavItemVariant.Background}
          layout={NavItemLayout.Vertical}
          current
        >
          current vertical nav item
        </PaginationLink>
      </div>
    </div>
  </>
)

export const Border: Story = () => (
  <>
    <h1>PaginationLink border variant</h1>
    <p>
      The <em>border</em> variant provides a themed nav item that uses a border
      to indicate that it is the current active item.
    </p>
    <p>
      The <em>currentColor</em>, <em>currentWidth</em>, and{' '}
      <em>currentStyle</em> props control the properties of the <em>current</em>{' '}
      indicator when the <em>current</em> prop is true.
    </p>
    <div>
      <div>
        <PaginationLink
          variant={NavItemVariant.Border}
          color={Colorway.Secondary}
          current
        >
          current horizontal nav item
        </PaginationLink>
      </div>
      <div>
        <PaginationLink
          variant={NavItemVariant.Border}
          color={Colorway.Tertiary}
          layout={NavItemLayout.Vertical}
          current
        >
          current vertical nav item
        </PaginationLink>
      </div>
    </div>
    <div>
      <div>
        <PaginationLink
          variant={NavItemVariant.Border}
          color={Colorway.Neutral}
          currentColor={Colorway.Success}
          currentBorderStyle={BorderStyle.Dotted}
          current
        >
          current horizontal nav item
        </PaginationLink>
      </div>
      <div>
        <PaginationLink
          variant={NavItemVariant.Border}
          color={Colorway.Neutral}
          layout={NavItemLayout.Vertical}
          currentColor={Colorway.Info}
          currentBorderWidth={Size.XXSmall}
          current
        >
          current vertical nav item
        </PaginationLink>
      </div>
    </div>

    <h2>Layout Prop</h2>
    <div>
      <div>
        <PaginationLink variant={NavItemVariant.Border} current>
          current horizontal nav item
        </PaginationLink>
      </div>
      <div>
        <PaginationLink
          variant={NavItemVariant.Border}
          layout={NavItemLayout.Vertical}
          current
        >
          current vertical nav item
        </PaginationLink>
      </div>
    </div>
  </>
)

export const Underline: Story = () => (
  <>
    <h1>PaginationLink underline variant</h1>
    <p>
      The <em>underline</em> variant provides a themed nav item that uses a
      typographic underline to indicate that it is the current active item.
    </p>
    <div>
      <div>
        <PaginationLink
          variant={NavItemVariant.Underline}
          color={Colorway.Dark}
        >
          horizontal nav item
        </PaginationLink>
      </div>
      <div>
        <PaginationLink
          variant={NavItemVariant.Underline}
          layout={NavItemLayout.Vertical}
          color={Colorway.Neutral}
        >
          vertical nav item
        </PaginationLink>
      </div>
    </div>
    <div>
      <div>
        <PaginationLink
          variant={NavItemVariant.Underline}
          color={Colorway.Secondary}
          current
        >
          current horizontal nav item
        </PaginationLink>
      </div>
      <div>
        <PaginationLink
          variant={NavItemVariant.Underline}
          color={Colorway.Tertiary}
          layout={NavItemLayout.Vertical}
          current
        >
          current vertical nav item
        </PaginationLink>
      </div>
    </div>

    <h2>Layout Prop</h2>
    <div>
      <div>
        <PaginationLink variant={NavItemVariant.Underline} current>
          current horizontal nav item
        </PaginationLink>
      </div>
      <div>
        <PaginationLink
          variant={NavItemVariant.Underline}
          layout={NavItemLayout.Vertical}
          current
        >
          current vertical nav item
        </PaginationLink>
      </div>
    </div>
  </>
)
