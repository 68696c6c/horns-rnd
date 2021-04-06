/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { BorderStyle, Colorway, Size } from '../../../config'

import { NavItemBorder } from '.'
import { NavItemLayout } from '../../quarks'

export default {
  title: 'Atoms/NavItemBorder',
  component: NavItemBorder,
} as Meta

export const Default: Story = () => (
  <>
    <h1>NavItemBorder</h1>
    <p>
      The <em>NavItemBorder</em> component provides a themed nav item that uses
      a border to indicate that it is the current active item.
    </p>
    <p>
      The <em>currentColor</em>, <em>currentWidth</em>, and{' '}
      <em>currentStyle</em> props control the properties of the <em>current</em>{' '}
      indicator when the <em>current</em> prop is true.
    </p>
    <div>
      <div>
        <NavItemBorder
          onClick={(e) => e.preventDefault()}
          color={Colorway.Secondary}
          current
        >
          current horizontal nav item
        </NavItemBorder>
      </div>
      <div>
        <NavItemBorder
          onClick={(e) => e.preventDefault()}
          color={Colorway.Tertiary}
          layout={NavItemLayout.Vertical}
          current
        >
          current vertical nav item
        </NavItemBorder>
      </div>
    </div>
    <div>
      <div>
        <NavItemBorder
          onClick={(e) => e.preventDefault()}
          color={Colorway.Neutral}
          currentColor={Colorway.Success}
          currentBorderStyle={BorderStyle.Dotted}
          current
        >
          current horizontal nav item
        </NavItemBorder>
      </div>
      <div>
        <NavItemBorder
          onClick={(e) => e.preventDefault()}
          color={Colorway.Neutral}
          layout={NavItemLayout.Vertical}
          currentColor={Colorway.Info}
          currentBorderWidth={Size.XXSmall}
          current
        >
          current vertical nav item
        </NavItemBorder>
      </div>
    </div>

    <h2>Layout Prop</h2>
    <div>
      <div>
        <NavItemBorder onClick={(e) => e.preventDefault()} current>
          current horizontal nav item
        </NavItemBorder>
      </div>
      <div>
        <NavItemBorder
          onClick={(e) => e.preventDefault()}
          layout={NavItemLayout.Vertical}
          current
        >
          current vertical nav item
        </NavItemBorder>
      </div>
    </div>
  </>
)
