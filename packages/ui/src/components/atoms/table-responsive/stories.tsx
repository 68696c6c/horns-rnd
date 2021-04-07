/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { makeTableRow } from '../../../_story'
import { makeIntArray } from '../../../utils'

import { TableResponsive } from '.'

export default {
  title: 'Atoms/TableResponsive',
  component: TableResponsive,
} as Meta

const tableData = makeIntArray(9).map((i) => makeTableRow(`${i}`))

export const Default: Story = () => (
  <>
    <h1>TableResponsive</h1>
    <p>
      The <em>TableResponsive</em> component applies theming to the HTML{' '}
      <code>table</code> tab and its children, <code>thead</code>,{' '}
      <code>tbody</code>, <code>tr</code>, <code>td</code>, and <code>td</code>.
    </p>
    <p>
      The <em>Table</em> component works using standard HTML children and does
      not require any other Horns components to create fully themed tables.
    </p>
    <h2>Rows from Prop</h2>
    <p>
      Unlike the <em>Table</em> component, the <em>TableResponsive</em> does not
      accept children and must generate the table content using the{' '}
      <em>rowData</em> prop. This is because the component needs to map over the
    </p>
    <TableResponsive rowData={tableData} minWidth="1200px" />
  </>
)
