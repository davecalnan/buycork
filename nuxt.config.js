const path = require('path')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob-all')

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:/]+/g) || []
  }
}

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'BuyCork.ie',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Support independent businesses by finding local alternatives to chains and bigger brands. Buy Local. Buy Cork.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#e30613' },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    postcss: [
      require('tailwindcss')('./tailwind.js'),
      require('autoprefixer')
    ],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      config.plugins.push(
        new PurgecssPlugin({
          paths: glob.sync([
            path.join(__dirname, './pages/**/*.vue'),
            path.join(__dirname, './layouts/**/*.vue'),
            path.join(__dirname, './components/**/*.vue')
          ]),
          extractors: [
            {
              extractor: TailwindExtractor,
              extensions: ['vue']
            }
          ],
          whitelist: ['html', 'body', 'nuxt-progress']
        })
      )
    }
  },
  css: [
    '~/assets/sass/style.scss'
  ],
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },
  generate: {
    routes: ['/local-alternatives-to/costa','/local-alternatives-to/specsavers', '/local-alternatives-to/starbucks'],
    subFolders: false
  },
  sitemap: {
    generate: true,
    hostname: 'https://buycork.ie',
    routes: ['/local-alternatives-to/costa', '/local-alternatives-to/specsavers', '/local-alternatives-to/starbucks']
  },
  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/sitemap'
  ],
  plugins: [
    '~plugins/filters',
    '~plugins/vue-instantsearch'
  ],
  apollo: {
    clientConfigs: {
      default: '~/apollo/client-configs/default.js'
    }
  }
}
