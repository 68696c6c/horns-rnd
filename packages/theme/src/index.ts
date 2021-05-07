import fs from 'fs'

export const generateTheme = (outputPath: string, name?: string): void => {
  const result = { name }
  fs.writeFile(outputPath, JSON.stringify(result), (err) => {
    console.log(err)
  })
}
