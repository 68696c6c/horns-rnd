/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { PaginationNavProps } from './styles'
import { PaginationNav } from '.'

export default {
  title: 'Molecules/PaginationNav',
  component: PaginationNav,
} as Meta

const Template: Story<PaginationNavProps> = ({
  totalPages,
  currentPage,
  ...others
}: PaginationNavProps) => (
  <PaginationNav
    totalPages={totalPages}
    currentPage={currentPage}
    {...others}
  />
)

export const Default = Template.bind({})
Default.args = {
  totalPages: 10,
  currentPage: 3,
}
