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
