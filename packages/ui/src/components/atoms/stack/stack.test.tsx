import React from 'react'

import { render } from '../../test'

import { Stack } from '.'

describe('Stack', () => {
  it('should render as default', () => {
    const { container } = render(
      <Stack>
        <div>one</div>
        <div>two</div>
        <div>three</div>
      </Stack>,
    )
    expect(container).toMatchSnapshot()
  })

  // TODO: figure out responsive testing
  // it('should render the items inline below the breakpoint', () => {
  //   const { container } = render(
  //     <Stack breakpoint={Breakpoint.Min}>
  //       <div>one</div>
  //       <div>two</div>
  //       <div>three</div>
  //     </Stack>,
  //   )
  //   expect(container).toMatchSnapshot()
  // })
})
