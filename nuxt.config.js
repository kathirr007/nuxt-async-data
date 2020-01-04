/* eslint-disable */
const pkg = require('./package')

module.exports = {
  server: {
    // port: 3100, // default 3000
    port: process.env.PORT || 3300
  },
  mode: 'universal',

  generate: {
    routes: [
      '/posts/balut',
      '/posts/whereIsIt',
      '/posts/how'
    ]
  },

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  // loading: { color: '#fff' },
  loading: false,

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/axios'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    // proxy module
    '@nuxtjs/proxy',
  ],

  /*
  ** axios configuration
  */
  axios: {
    // baseURL: 'https://jsonplaceholder.typicode.com',
    // baseURL: process.env.BASE_URL || 'https://jsonplaceholder.typicode.com'
    baseURL: process.env.BASE_URL || 'http://localhost:3300'
  },

  proxy: {
    // '/missions?': 'http://contentplace.x1.fr/missions?',
    // 'http://localhost:3100/missions?': 'http://contentplace.x1.fr',
    /* '/posts': {
      target: 'http://contentplace.x1.fr/missions?client_secret=%242y%2410%24r1u8S82qpoLo.ASFBnUQCe6MGJhOyuGYderz5fA64asogQ3LFpJIi&mission_status=ongoing',
      pathRewrite: {'^/posts': ''}
    }, */
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
