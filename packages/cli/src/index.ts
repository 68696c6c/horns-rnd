#!/usr/bin/env node
import chokidar from 'chokidar'
import fs from 'fs'
import ejs from 'ejs'
import yargs from 'yargs'
import path from 'path'

import { makeTheme, Config } from '@horns/theme'

const args = yargs.options({
  file: { type: 'string', alias: 'f' },
  out: { type: 'string', alias: 'o' },
}).argv

export const generateTheme = (
  baseTheme: Partial<Config>,
  outputPath: string,
): void => {
  const theme = JSON.stringify(makeTheme(baseTheme), null, 2)
  const template = `/** THIS FILE IS GENERATED, DO NOT EDIT */\nconst theme = <%- theme %>\n\nexport default theme\n`
  const result = ejs.render(template, { theme })
  console.log('outputPath', outputPath)
  fs.writeFileSync(outputPath, result)
}

const input = args.file || 'theme.config.js'
const output = args.out || 'theme.js'

const watcher = chokidar.watch(input, {
  ignored: /^\./,
  persistent: true,
})

watcher
  .on('add', (filepath: string) => {
    console.log('File', filepath, 'has been added')
  })
  .on('change', (filepath: string) => {
    console.log('File', filepath, 'has been changed')
    const inputPath = path.resolve(input)
    const outputPath = path.resolve(output)
    console.log('inputPath', inputPath)
    import(inputPath).then((a) => {
      generateTheme(a, outputPath)
    })
  })
  .on('unlink', (filepath: string) => {
    console.log('File', filepath, 'has been removed')
  })
  .on('error', (error: Error) => {
    console.error('Error happened', error)
    process.exitCode = 1
  })
