import { makeTypography, Typography } from '.'

describe('makeTypography', () => {
  let result: Typography
  beforeEach(() => {
    result = makeTypography()
  })
  it('should match snapshot', () => {
    expect(result).toMatchSnapshot()
  })
  // it('should make the correct link styles', () => {
  //   console.log(result.link)
  //   // eslint-disable-next-line @typescript-eslint/no-use-before-define
  //   expect(result.link).toEqual(expectedLink)
  // })
})

// const expectedLink = {
//   active: {
//     align: 'left',
//     decoration: { line: 'underline', style: 'double' },
//     family: 'Helvetica, sans-serif',
//     indent: '',
//     kerning: 'normal',
//     letting: '',
//     size: 'medium',
//     spacing: '',
//     style: 'italic',
//     tracking: '',
//     transform: 'none',
//     weight: 400,
//   },
//   base: {
//     align: 'left',
//     decoration: { line: 'underline', style: 'solid' },
//     family: 'Helvetica, sans-serif',
//     indent: '',
//     kerning: 'normal',
//     letting: '',
//     size: 'medium',
//     spacing: '',
//     style: 'normal',
//     tracking: '',
//     transform: 'none',
//     weight: 400,
//   },
//   hover: {
//     align: 'left',
//     decoration: { line: 'underline', style: 'solid' },
//     family: 'Helvetica, sans-serif',
//     indent: '',
//     kerning: 'normal',
//     letting: '',
//     size: 'medium',
//     spacing: '',
//     style: 'italic',
//     tracking: '',
//     transform: 'none',
//     weight: 400,
//   },
//   inactive: {
//     align: 'left',
//     decoration: { line: 'underline', style: 'solid' },
//     family: 'Helvetica, sans-serif',
//     indent: '',
//     kerning: 'normal',
//     letting: '',
//     size: 'medium',
//     spacing: '',
//     style: 'normal',
//     tracking: '',
//     transform: 'none',
//     weight: 400,
//   },
//   visited: {
//     align: 'left',
//     decoration: { line: 'underline', style: 'solid' },
//     family: 'Helvetica, sans-serif',
//     indent: '',
//     kerning: 'normal',
//     letting: '',
//     size: 'medium',
//     spacing: '',
//     style: 'italic',
//     tracking: '',
//     transform: 'none',
//     weight: 400,
//   },
// }
