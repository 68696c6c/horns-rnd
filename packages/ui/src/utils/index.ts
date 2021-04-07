export const makeIntArray = (itemCount: number): number[] =>
  [...Array(itemCount + 1).keys()].slice(1, itemCount + 1)
