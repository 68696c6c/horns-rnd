/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import _range from 'lodash.range'

import { makeTableRow } from '../../../_story'

import { TableProps } from '../../quarks'

import { Table } from '.'

export default {
  title: 'Atoms/Table',
  component: Table,
} as Meta

const Template: Story<TableProps> = ({
  rowData,
  height,
  minWidth,
  children,
  ...others
}: TableProps) => (
  <>
    <p>
      The <em>Table</em> component applies theming to the HTML{' '}
      <code>table</code> tag and its children; <code>thead</code>,{' '}
      <code>tbody</code>, <code>tr</code>, <code>th</code>, and <code>td</code>.
    </p>
    <p>
      The <em>Table</em> component works using standard HTML children and does
      not require any other Horns components to create fully themed tables.
    </p>
    <p>
      Alternatively, if the <code>rowData</code> prop is provided, the{' '}
      <em>Table</em> component will dynamically render that content, ignoring
      any children.
    </p>
    <Table rowData={rowData} minWidth={minWidth} height={height} {...others}>
      {children}
    </Table>
  </>
)

const exampleRowData = _range(4)

export const Default = Template.bind({})
Default.args = {
  minWidth: '1200px',
  children: (
    <>
      <thead>
        <tr>
          {exampleRowData.map((i) => (
            <th key={`row-header-${i}`}>Row 0, Column {i} Heading</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {exampleRowData.map((rowIndex) => (
          <tr key={`row-${rowIndex}`}>
            {exampleRowData.map((colIndex) => (
              <td key={`row-${rowIndex}-column-${colIndex}`}>
                Row {rowIndex}, Column {colIndex} Content
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </>
  ),
}

export const UsingRowDataProp = Template.bind({})
UsingRowDataProp.args = {
  ...Default.args,
  rowData: exampleRowData.map((i) => makeTableRow(`${i}`)),
}
