/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { Colorway } from '../../../config'
import { NavItemLayout } from '../../quarks'

import { NavItemUnderline } from '.'

export default {
  title: 'Atoms/NavItemUnderline',
  component: NavItemUnderline,
} as Meta

export const Default: Story = () => (
  <>
    <h1>NavItemUnderline</h1>
    <p>
      The <em>NavItemUnderline</em> component provides a themed nav item that
      uses a typographic underline to indicate that it is the current active
      item.
    </p>
    <div>
      <div>
        <NavItemUnderline
          onClick={(e) => e.preventDefault()}
          color={Colorway.Dark}
        >
          horizontal nav item
        </NavItemUnderline>
      </div>
      <div>
        <NavItemUnderline
          onClick={(e) => e.preventDefault()}
          layout={NavItemLayout.Vertical}
          color={Colorway.Neutral}
        >
          vertical nav item
        </NavItemUnderline>
      </div>
    </div>
    <div>
      <div>
        <NavItemUnderline
          onClick={(e) => e.preventDefault()}
          color={Colorway.Secondary}
          current
        >
          current horizontal nav item
        </NavItemUnderline>
      </div>
      <div>
        <NavItemUnderline
          onClick={(e) => e.preventDefault()}
          color={Colorway.Tertiary}
          layout={NavItemLayout.Vertical}
          current
        >
          current vertical nav item
        </NavItemUnderline>
      </div>
    </div>

    <h2>Layout Prop</h2>
    <div>
      <div>
        <NavItemUnderline onClick={(e) => e.preventDefault()} current>
          current horizontal nav item
        </NavItemUnderline>
      </div>
      <div>
        <NavItemUnderline
          onClick={(e) => e.preventDefault()}
          layout={NavItemLayout.Vertical}
          current
        >
          current vertical nav item
        </NavItemUnderline>
      </div>
    </div>
  </>
)
