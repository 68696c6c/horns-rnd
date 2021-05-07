import del from 'rollup-plugin-delete'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'

import pkg from './package.json'

const external = [
  // ...Object.keys(pkg.peerDependencies),
  ...Object.keys(pkg.dependencies),
]

export default {
  input: 'src/index.ts',
  output: [
    {
      // file: 'dist/cjs/bundle.min.js',
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
  ],
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
    commonjs(),
  ],
}
