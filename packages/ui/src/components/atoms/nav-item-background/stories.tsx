/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { Colorway } from '../../../config'
import { NavItemLayout } from '../../quarks'

import { NavItemBackground } from '.'

export default {
  title: 'Atoms/NavItemBackground',
  component: NavItemBackground,
} as Meta

export const Default: Story = () => (
  <>
    <h1>NavItemBackground</h1>
    <p>
      The <em>NavItemBackground</em> component provides a themed nav item that
      uses a background color to indicate that it is the current active item.
    </p>
    <p>
      The <em>currentColor</em> prop controls the color of the item when the{' '}
      <em>current</em> prop is true.
    </p>
    <div>
      <div>
        <NavItemBackground
          onClick={(e) => e.preventDefault()}
          color={Colorway.Dark}
        >
          horizontal nav item
        </NavItemBackground>
      </div>
      <div>
        <NavItemBackground
          onClick={(e) => e.preventDefault()}
          layout={NavItemLayout.Vertical}
          color={Colorway.Neutral}
        >
          vertical nav item
        </NavItemBackground>
      </div>
    </div>
    <div>
      <div>
        <NavItemBackground
          onClick={(e) => e.preventDefault()}
          color={Colorway.Dark}
          currentColor={Colorway.Primary}
          current
        >
          current horizontal nav item
        </NavItemBackground>
      </div>
      <div>
        <NavItemBackground
          onClick={(e) => e.preventDefault()}
          layout={NavItemLayout.Vertical}
          color={Colorway.Neutral}
          currentColor={Colorway.Primary}
          current
        >
          current vertical nav item
        </NavItemBackground>
      </div>
    </div>

    <h2>Layout Prop</h2>
    <div>
      <div>
        <NavItemBackground onClick={(e) => e.preventDefault()} current>
          current horizontal nav item
        </NavItemBackground>
      </div>
      <div>
        <NavItemBackground
          onClick={(e) => e.preventDefault()}
          layout={NavItemLayout.Vertical}
          current
        >
          current vertical nav item
        </NavItemBackground>
      </div>
    </div>
  </>
)
