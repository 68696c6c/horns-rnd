import fs from 'fs'

import { makeTheme, Config } from './config'

export const generateTheme = (
  baseTheme: Partial<Config>,
  outputPath: string,
): void => {
  const result = makeTheme(baseTheme)
  fs.writeFileSync(outputPath, JSON.stringify(result))
}
