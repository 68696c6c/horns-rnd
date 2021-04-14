export const makeIntArray = (itemCount: number): number[] =>
  [...Array(itemCount + 1).keys()].slice(1, itemCount + 1)

export const valueToNumber = (cssVal: string): number =>
  Number(
    cssVal
      .replace('px', '')
      .replace('rem', '')
      .replace('em', '')
      .replace('vw', '')
      .replace('vh', '')
      .replace('cm', '')
      .replace('mm', '')
      .replace('in', '')
      .replace('pt', '')
      .replace('pc', '')
      .replace('ex', '')
      .replace('ch', '')
      .replace('vmin', '')
      .replace('vmax', '')
      .replace('%', ''),
  )
