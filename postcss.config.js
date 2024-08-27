import autoprefixer from 'autoprefixer'
import postcss from 'postcss-preset-env'

export default {
  plugins: [autoprefixer({}), postcss({autoprefixer: {}})]
}
