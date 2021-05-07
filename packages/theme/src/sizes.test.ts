import { isSize, Size } from './sizes'

describe('isSize', () => {
  it('should return true if the input is a Size', () => {
    const result = isSize(Size.Large)
    expect(result).toBe(true)
  })
  it('should return false if the input has an "all" property', () => {
    const result = isSize({
      all: Size.Large,
    })
    expect(result).toBe(false)
  })
  it('should return false if the input has a corner property', () => {
    const result = isSize({
      bottomRight: Size.Large,
    })
    expect(result).toBe(false)
  })
  it('should return false if the input has a side property', () => {
    const result = isSize({
      top: Size.Large,
    })
    expect(result).toBe(false)
  })
  it('should return false if the input is an empty object', () => {
    const result = isSize({})
    expect(result).toBe(false)
  })
  it('should return false if the input is undefined', () => {
    const result = isSize()
    expect(result).toBe(false)
  })
})
