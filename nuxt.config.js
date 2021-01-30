export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Devement',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxt/content',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyBIeEIUW3MtW4hoQnl1YSczyXVYvqw-2-Q',
          authDomain: 'devement-db.firebaseapp.com',
          databaseURL: 'https://devement-db-default-rtdb.firebaseio.com/',
          projectId: 'devement-db',
          storageBucket: 'devement-db.appspot.com',
          messagingSenderId: '636510864386',
          appId: '1:636510864386:web:750524594c70ebf814131b',
          measurementId: 'G-VJ3HQXWNYV'
        },
        services: {
          auth: {
            persistence: 'local'
    },
          database: true,
          storage: true,
        }
      }
      ]

  ],
  content: {
    // Options
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
