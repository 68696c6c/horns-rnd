/* eslint-disable react/jsx-one-expression-per-line,jsx-a11y/label-has-associated-control */
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { TableRows } from '../../quarks'

import { DataTable, SortDirection } from '.'

export default {
  title: 'Organisms/DataTable',
  component: DataTable,
} as Meta

const staticData: TableRows = [
  // 1
  {
    _dataset: {
      key: 'value',
    },
    first_name: 'Testy',
    last_name: 'McGee',
    email: 'testy.mcgee@example.com',
  },
  {
    first_name: 'Bob',
    last_name: 'Guff',
    email: 'bob.guff@example.com',
  },
  {
    first_name: 'Maynard James',
    last_name: 'Keenan',
    email: 'maynard.keenan@tool.com',
  },
  {
    first_name: 'Adam',
    last_name: 'Jones',
    email: 'adam.jones@tool.com',
  },
  {
    first_name: 'Justin',
    last_name: 'Chancellor',
    email: 'justin.chancellor@tool.com',
  },
  {
    first_name: 'Danny',
    last_name: 'Carey',
    email: 'danny.carey@tool.com',
  },
  {
    first_name: 'Jens',
    last_name: 'Kidman',
    email: 'jens.kidman@meshuggah.com',
  },
  {
    first_name: 'Fredrik',
    last_name: 'Thordendal',
    email: 'fredrik.thordendal@meshuggah.com',
  },
  {
    first_name: 'Mårten',
    last_name: 'Hagström',
    email: 'mårten.hagström@meshuggah.com',
  },
  {
    first_name: 'Dick',
    last_name: 'Lövgren',
    email: 'dick.lövgren@meshuggah.com',
  },
  // 2
  {
    first_name: 'Tomas',
    last_name: 'Haake',
    email: 'tomas.haake@meshuggah.com',
  },
  {
    first_name: 'Randy',
    last_name: 'Blythe',
    email: 'randy.blythe@lambofgod.com',
  },
  {
    first_name: 'Mark',
    last_name: 'Morton',
    email: 'mark.morton@lambofgod.com',
  },
  {
    first_name: 'Willie',
    last_name: 'Adler',
    email: 'willie.adler@lambofgod.com',
  },
  {
    first_name: 'John',
    last_name: 'Campbell',
    email: 'john.campbell@lambofgod.com',
  },
  {
    first_name: 'Chris',
    last_name: 'Adler',
    email: 'chris.adler@lambofgod.com',
  },
  {
    first_name: 'Aaron',
    last_name: 'Turner',
    email: 'aaron.turner@isis.com',
  },
  {
    first_name: 'Michael',
    last_name: 'Gallagher',
    email: 'michael.gallagher@isis.com',
  },
  {
    first_name: 'Bryant Clifford',
    last_name: 'Meyer',
    email: 'bryant.meyer@isis.com',
  },
  {
    first_name: 'Jeff',
    last_name: 'Caxide',
    email: 'jeff.caxide@isis.com',
  },
  // 3
  {
    first_name: 'Aaron',
    last_name: 'Harris',
    email: 'aaron.harris@isis.com',
  },
  {
    first_name: 'Phillip',
    last_name: 'Fry',
    email: 'phillip.fry@futurama.com',
  },
  {
    first_name: 'Amy',
    last_name: 'Wong',
    email: 'amy.wong@futurama.com',
  },
  {
    first_name: 'Inez',
    last_name: 'Wong',
    email: 'inez.wong@futurama.com',
  },
  {
    first_name: 'Leo',
    last_name: 'Wong',
    email: 'leo.wong@futurama.com',
  },
  {
    first_name: 'Hubert',
    last_name: 'Farnsworth',
    email: 'hubert.farnsworth@futurama.com',
  },
  {
    first_name: 'Hermes',
    last_name: 'Conrad',
    email: 'hermes.conrad@futurama.com',
  },
  {
    first_name: 'Dwight',
    last_name: 'Conrad',
    email: 'dwight.conrad@futurama.com',
  },
  {
    first_name: 'LaBarbara',
    last_name: 'Conrad',
    email: 'labarbara.conrad@futurama.com',
  },
  {
    first_name: 'Zapp',
    last_name: 'Brannigan',
    email: 'zapp.brannigan@futurama.com',
  },
  // 4
  {
    first_name: 'Kif',
    last_name: 'Kroker',
    email: 'kif.kroker@futurama.com',
  },
  {
    first_name: 'Turanga',
    last_name: 'Leela',
    email: 'turanga.leela@futurama.com',
  },
  {
    first_name: 'Turanga',
    last_name: 'Morris',
    email: 'turanga.morris@futurama.com',
  },
  {
    first_name: 'Turanga',
    last_name: 'Munda',
    email: 'turanga.munda@futurama.com',
  },
  {
    first_name: 'Bender',
    last_name: 'Rodriguez',
    email: 'bender.rodriguez@futurama.com',
  },
  {
    first_name: 'John',
    last_name: 'Zoidberg',
    email: 'john.zoidberg@futurama.com',
  },
  {
    first_name: 'Lord',
    last_name: 'Nibbler',
    email: 'lord.nibbler@futurama.com',
  },
  {
    first_name: 'Ogden',
    last_name: 'Wernstrom',
    email: 'ogden.wernstrom@futurama.com',
  },
  {
    first_name: 'Barbados',
    last_name: 'Slim',
    email: 'barbados.slim@futurama.com',
  },
  {
    first_name: 'Warden',
    last_name: 'Vogel',
    email: 'warden.vogel@futurama.com',
  },
  // 5
  {
    first_name: 'Bubblegum',
    last_name: 'Tate',
    email: 'bubblegum.tate@futurama.com',
  },
  {
    first_name: 'Hank',
    last_name: 'Hill',
    email: 'hank.hill@kingofthehill.com',
  },
  {
    first_name: 'Peggy',
    last_name: 'Hill',
    email: 'peggy.hill@kingofthehill.com',
  },
  {
    first_name: 'Bobby',
    last_name: 'Hill',
    email: 'bobby.hill@kingofthehill.com',
  },
  {
    first_name: 'Cotton',
    last_name: 'Hill',
    email: 'cotton.hill@kingofthehill.com',
  },
  {
    first_name: 'Dale',
    last_name: 'Gribble',
    email: 'dale.gribble@kingofthehill.com',
  },
  {
    first_name: 'Nancy',
    last_name: 'Gribble',
    email: 'nancy.gribble@kingofthehill.com',
  },
  {
    first_name: 'Joseph',
    last_name: 'Gribble',
    email: 'joseph.gribble@kingofthehill.com',
  },
  {
    first_name: 'Jeff',
    last_name: 'Boomhauer',
    email: 'jeff.Boomhauer@kingofthehill.com',
  },
  {
    first_name: 'Bill',
    last_name: 'Dauterive',
    email: 'bill.dauterive@kingofthehill.com',
  },
]

export const Default: Story = () => <DataTable rowData={staticData} />

export const RemoteDataSource: Story = () => (
  <DataTable
    filterRows={(args, callback) => {
      const { currentPage, perPage, term, sortColumnName, sortDir } = args
      setTimeout(() => {
        // sort
        if (sortColumnName !== '') {
          let i1 = -1
          let i2 = 1
          if (sortDir === SortDirection.Descending) {
            i1 = 1
            i2 = -1
          }
          staticData.sort((a, b) => {
            const aValue = a[sortColumnName]
            const bValue = b[sortColumnName]
            if (aValue < bValue) {
              return i1
            }
            return aValue > bValue ? i2 : 0
          })
        }
        let result = staticData
        // filter
        if (term !== '') {
          result = staticData.filter((row) => {
            return (
              row.first_name.toLowerCase().includes(term.toLowerCase()) ||
              row.last_name.toLowerCase().includes(term.toLowerCase()) ||
              row.email.toLowerCase().includes(term.toLowerCase())
            )
          })
        }
        // paginate
        const start = (currentPage - 1) * perPage
        const end = start + perPage
        const rowData = result.slice(start, end)
        return callback(rowData)
      }, 1000)
    }}
  />
)
