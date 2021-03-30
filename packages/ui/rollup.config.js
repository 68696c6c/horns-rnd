import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'

const input = 'src/index.ts'

const external = ['react', 'react-dom']

const plugins = [
  typescript({
    // eslint-disable-next-line global-require
    typescript: require('typescript'),
  }),
]

export default [
  {
    input,
    output: {
      file: pkg.module,
      format: 'es',
      preserveModules: true,
    },
    plugins,
    external,
  },
  {
    input,
    output: {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    plugins,
    external,
  },
]
