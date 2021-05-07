/* eslint-disable no-console */
import fs from 'fs'
import path from 'path'
import ejs from 'ejs'

import { makeTheme, Config } from './config'

export const generateTheme = (
  baseTheme: Partial<Config>,
  outputPath: string,
): void => {
  console.log('generating theme')

  const filename = path.join(__dirname, '/theme.ejs')
  console.log('filename', filename)

  const template = fs.readFileSync(filename)
  console.log('template', template)

  const result = ejs.compile(template.toString(), { filename })
  console.log('result', result)

  const theme = makeTheme(baseTheme)
  console.log('theme.name', theme.name)

  ejs.renderFile(outputPath, { theme }, (err, str) => {
    console.log('err', err)
    console.log('str', str)
  })

  // fs.writeFileSync(outputPath, JSON.stringify(result))
}
