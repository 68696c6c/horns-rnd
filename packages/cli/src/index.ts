#!/usr/bin/env node

// import fs from 'fs'
// import ejs from 'ejs'
//
// import { makeTheme, Config } from '@horns/theme'
//
// export const generateTheme = (
//   baseTheme: Partial<Config>,
//   outputPath: string,
// ): void => {
//   const theme = JSON.stringify(makeTheme(baseTheme), null, 2)
//   const template = `/** THIS FILE IS GENERATED, DO NOT EDIT */\nconst theme = <%- theme %>\n\nexport default theme\n`
//   const result = ejs.render(template, { theme })
//   fs.writeFileSync(outputPath, result)
// }

import chokidar from 'chokidar'
import yargs from 'yargs'

const args = yargs.options({
  file: { type: 'string', demandOption: true, alias: 'f' },
}).argv

const watcher = chokidar.watch(args.file, {
  ignored: /^\./,
  persistent: true,
})

watcher
  .on('add', (path: string) => {
    console.log('File', path, 'has been added')
  })
  .on('change', (path: string) => {
    console.log('File', path, 'has been changed')
  })
  .on('unlink', (path: string) => {
    console.log('File', path, 'has been removed')
  })
  .on('error', (error: Error) => {
    console.error('Error happened', error)
    process.exitCode = 1
  })

watcher.close().then(() => console.log('closed'))
