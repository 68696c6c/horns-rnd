import del from 'rollup-plugin-delete'
import typescript from 'rollup-plugin-typescript2'

import pkg from './package.json'

const input = 'src/index.ts'

const external = [...Object.keys(pkg.peerDependencies)]

const plugins = [
  del({ targets: 'dist/*' }),
  typescript({
    // eslint-disable-next-line global-require
    typescript: require('typescript'),
  }),
]

export default [
  {
    input,
    output: {
      dir: 'dist/esm',
      format: 'es',
      preserveModules: true,
      sourcemap: true,
    },
    plugins,
    external,
  },
  {
    input,
    output: {
      file: pkg.main,
      format: 'umd',
      name: 'horns-ui',
      sourcemap: true,
    },
    plugins,
    external,
  },
]
