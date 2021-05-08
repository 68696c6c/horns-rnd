#!/usr/bin/env node
import chalk from 'chalk'
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

const input = args.file || 'theme.config.js'
const output = args.out || 'theme.js'

const logSuccess = (...msg: any) => console.log(chalk.green(...msg))
const logError = (error: Error) => console.error(chalk.red(error.stack))

const writeThemeFile = (
  baseTheme: Partial<Config>,
  outputPath: string,
): void => {
  const theme = JSON.stringify(makeTheme(baseTheme), null, 2)
  const template = `/** THIS FILE IS GENERATED, DO NOT EDIT */\nconst theme = <%- theme %>\n\nexport default theme\n`
  const result = ejs.render(template, { theme })
  fs.writeFileSync(outputPath, result)
}

const generateTheme = () => {
  logSuccess(`generating theme from ${input} to ${output}`)
  const inputPath = path.resolve(input)
  const outputPath = path.resolve(output)
  import(inputPath)
    .then((a) => {
      writeThemeFile(a, outputPath)
      logSuccess('watching for changes...')
    })
    .catch(logError)
}

const watcher = chokidar.watch(input, {
  ignored: /^\./,
  persistent: true,
})

watcher
  .on('ready', generateTheme)
  .on('change', generateTheme)
  .on('error', logError)
