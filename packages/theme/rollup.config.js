import del from 'rollup-plugin-delete'
import resolve from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'

import pkg from './package.json'

const external = [...Object.keys(pkg.dependencies)]

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist/esm',
    format: 'es',
    preserveModules: true,
    sourcemap: true,
  },
  external,
  plugins: [
    del({ targets: 'dist/*' }),
    typescript({
      // eslint-disable-next-line global-require
      typescript: require('typescript'),
    }),
    resolve({
      extensions: ['.ts', '.tsx'],
    }),
  ],
}
