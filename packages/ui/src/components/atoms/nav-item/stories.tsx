/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { BorderStyle, Colorway, Size } from '../../../config'
import { NavItemLayout, NavItemVariant } from '../../quarks'

import { NavItem } from '.'

export default {
  title: 'Atoms/NavItem',
  component: NavItem,
} as Meta

export const Default: Story = () => (
  <>
    <h1>NavItem</h1>
    <p>
      The <em>NavItem</em> component has three variants.
    </p>
  </>
)

export const Background: Story = () => (
  <>
    <h1>NavItem background variant</h1>
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
        <NavItem
          href="#"
          variant={NavItemVariant.Background}
          color={Colorway.Dark}
        >
          horizontal nav item
        </NavItem>
      </div>
      <div>
        <NavItem
          href="#"
          variant={NavItemVariant.Background}
          layout={NavItemLayout.Vertical}
          color={Colorway.Neutral}
        >
          vertical nav item
        </NavItem>
      </div>
    </div>
    <div>
      <div>
        <NavItem
          href="#"
          variant={NavItemVariant.Background}
          color={Colorway.Dark}
          currentColor={Colorway.Primary}
          current
        >
          current horizontal nav item
        </NavItem>
      </div>
      <div>
        <NavItem
          href="#"
          variant={NavItemVariant.Background}
          layout={NavItemLayout.Vertical}
          color={Colorway.Neutral}
          currentColor={Colorway.Primary}
          current
        >
          current vertical nav item
        </NavItem>
      </div>
    </div>

    <h2>Layout Prop</h2>
    <div>
      <div>
        <NavItem href="#" variant={NavItemVariant.Background} current>
          current horizontal nav item
        </NavItem>
      </div>
      <div>
        <NavItem
          href="#"
          variant={NavItemVariant.Background}
          layout={NavItemLayout.Vertical}
          current
        >
          current vertical nav item
        </NavItem>
      </div>
    </div>
  </>
)

export const Border: Story = () => (
  <>
    <h1>NavItem border variant</h1>
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
        <NavItem
          href="#"
          variant={NavItemVariant.Border}
          color={Colorway.Secondary}
          current
        >
          current horizontal nav item
        </NavItem>
      </div>
      <div>
        <NavItem
          href="#"
          variant={NavItemVariant.Border}
          color={Colorway.Tertiary}
          layout={NavItemLayout.Vertical}
          current
        >
          current vertical nav item
        </NavItem>
      </div>
    </div>
    <div>
      <div>
        <NavItem
          href="#"
          variant={NavItemVariant.Border}
          color={Colorway.Neutral}
          currentColor={Colorway.Success}
          currentBorderStyle={BorderStyle.Dotted}
          current
        >
          current horizontal nav item
        </NavItem>
      </div>
      <div>
        <NavItem
          href="#"
          variant={NavItemVariant.Border}
          color={Colorway.Neutral}
          layout={NavItemLayout.Vertical}
          currentColor={Colorway.Info}
          currentBorderWidth={Size.XXSmall}
          current
        >
          current vertical nav item
        </NavItem>
      </div>
    </div>

    <h2>Layout Prop</h2>
    <div>
      <div>
        <NavItem href="#" variant={NavItemVariant.Border} current>
          current horizontal nav item
        </NavItem>
      </div>
      <div>
        <NavItem
          href="#"
          variant={NavItemVariant.Border}
          layout={NavItemLayout.Vertical}
          current
        >
          current vertical nav item
        </NavItem>
      </div>
    </div>
  </>
)

export const Underline: Story = () => (
  <>
    <h1>NavItem underline variant</h1>
    <p>
      The <em>underline</em> variant provides a themed nav item that uses a
      typographic underline to indicate that it is the current active item.
    </p>
    <div>
      <div>
        <NavItem
          href="#"
          variant={NavItemVariant.Underline}
          color={Colorway.Dark}
        >
          horizontal nav item
        </NavItem>
      </div>
      <div>
        <NavItem
          href="#"
          variant={NavItemVariant.Underline}
          layout={NavItemLayout.Vertical}
          color={Colorway.Neutral}
        >
          vertical nav item
        </NavItem>
      </div>
    </div>
    <div>
      <div>
        <NavItem
          href="#"
          variant={NavItemVariant.Underline}
          color={Colorway.Secondary}
          current
        >
          current horizontal nav item
        </NavItem>
      </div>
      <div>
        <NavItem
          href="#"
          variant={NavItemVariant.Underline}
          color={Colorway.Tertiary}
          layout={NavItemLayout.Vertical}
          current
        >
          current vertical nav item
        </NavItem>
      </div>
    </div>

    <h2>Layout Prop</h2>
    <div>
      <div>
        <NavItem href="#" variant={NavItemVariant.Underline} current>
          current horizontal nav item
        </NavItem>
      </div>
      <div>
        <NavItem
          href="#"
          variant={NavItemVariant.Underline}
          layout={NavItemLayout.Vertical}
          current
        >
          current vertical nav item
        </NavItem>
      </div>
    </div>
  </>
)
