import { Size } from '../config'

import { evalCorners } from './rounded'

describe('evalCorners', () => {
  it('should merge provided all prop with default all', () => {
    const input = {
      all: Size.Medium,
    }
    const def = {
      all: Size.Large,
    }
    const result = evalCorners(input, def)
    expect(result.topLeft).toEqual(Size.Medium)
    expect(result.topRight).toEqual(Size.Medium)
    expect(result.bottomLeft).toEqual(Size.Medium)
    expect(result.bottomRight).toEqual(Size.Medium)
  })
  it('should merge provided corner prop with same default corner', () => {
    const input = {
      topRight: Size.Medium,
    }
    const def = {
      topRight: Size.Large,
    }
    const result = evalCorners(input, def)
    expect(result.topLeft).toBeUndefined()
    expect(result.topRight).toEqual(Size.Medium)
    expect(result.bottomLeft).toBeUndefined()
    expect(result.bottomRight).toBeUndefined()
  })
  it('should merge provided corner prop with different default corner', () => {
    const input = {
      topRight: Size.Medium,
    }
    const def = {
      bottomRight: Size.Large,
    }
    const result = evalCorners(input, def)
    expect(result.topLeft).toBeUndefined()
    expect(result.topRight).toEqual(Size.Medium)
    expect(result.bottomLeft).toBeUndefined()
    expect(result.bottomRight).toEqual(Size.Large)
  })
  it('should merge provided all prop with default corner', () => {
    const input = {
      all: Size.Medium,
    }
    const def = {
      topLeft: Size.Large,
    }
    const result = evalCorners(input, def)
    expect(result.topLeft).toEqual(Size.Medium)
    expect(result.topRight).toEqual(Size.Medium)
    expect(result.bottomLeft).toEqual(Size.Medium)
    expect(result.bottomRight).toEqual(Size.Medium)
  })
  it('should merge provided corner prop with default all', () => {
    const input = {
      bottomRight: Size.Medium,
    }
    const def = {
      all: Size.Large,
    }
    const result = evalCorners(input, def)
    expect(result.topLeft).toEqual(Size.Large)
    expect(result.topRight).toEqual(Size.Large)
    expect(result.bottomLeft).toEqual(Size.Large)
    expect(result.bottomRight).toEqual(Size.Medium)
  })
})
