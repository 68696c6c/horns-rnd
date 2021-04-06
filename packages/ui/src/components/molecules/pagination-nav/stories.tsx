/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { PaginationNav } from '.'

export default {
  title: 'Molecules/PaginationNav',
  component: PaginationNav,
} as Meta

export const Default: Story = () => (
  <>
    <h1>PaginationNav</h1>
    <p>
      The <em>PaginationNav</em> component provides a fully themed and
      functional pagination menu.
    </p>
    <PaginationNav pages={10} currentPage={3} />
  </>
)
