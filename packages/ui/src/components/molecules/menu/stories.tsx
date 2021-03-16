import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Dropdown, DropdownOption } from '../../atoms'
import { Menu } from '.'

export default {
  title: 'Molecules/Menu',
  component: Menu,
} as Meta

export const Default: Story = () => (
  <Menu
    forceWidth
    renderControl={(open, ref, toggleOpen) => (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
      <div
        ref={ref}
        onClick={toggleOpen}
        style={{
          padding: '0.25em',
        }}
      >
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        Menu is {open ? 'open' : 'closed'}
      </div>
    )}
    renderMenu={(open, ref) => (
      <Dropdown open={open} ref={ref}>
        <DropdownOption>example</DropdownOption>
        <DropdownOption>example</DropdownOption>
        <DropdownOption>example</DropdownOption>
      </Dropdown>
    )}
  />
)
