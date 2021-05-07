import fs from 'fs'
import ejs from 'ejs'

import { makeTheme, Config } from './config'

export const generateTheme = (
  baseTheme: Partial<Config>,
  outputPath: string,
): void => {
  const theme = JSON.stringify(makeTheme(baseTheme), null, 2)
  const template = `/** THIS FILE IS GENERATED, DO NOT EDIT */\nconst theme = <%- theme %>\n\nexport default theme\n`
  const result = ejs.render(template, { theme })
  fs.writeFileSync(outputPath, result)
}
